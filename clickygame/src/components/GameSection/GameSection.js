import React, { Component } from 'react';
import DogCard from "../DogCard";
import img from "../../dog.json";

class GameSection extends Component {
    state = {
        img,
        score: 0,
        highScore: 0,
        msg: "Click a picture to begin!"
    };

    // function running on whether the image was clicked or not
    onClick = (id, clicked) => {
        const changeImg = this.state.img;

        if(clicked) {
            changeImg.forEach((img, index) => {
                changeImg[index].clicked = false;
            });
            return this.setState({
                img: changeImg.sort(() => Math.random() - 0.5),
                msg: "Wrong guess!",
                score: 0
            })
        } else {
            changeImg.forEach((img, index) => {
                if (id === img.id) {
                    changeImg[index].clicked = true;
                }
            });

            const { highScore, score }= this.state;
            const newScore = score + 1;
            const newHighScore = newScore > highScore ? newScore : highScore;
            
            return this.setState({
                img: changeImg.sort(() => Math.random() - 0.5),
                msg: "You got it!",
                score: newScore,
                highScore: newHighScore
            });
        }

    };

    render() {
        return (
        <div className="container-fluid">
            
            <div className="container">
                <h1 className="text-center text-white gameMsg">{this.state.msg}</h1>
                <h3 className="text-center text-white">Score: {this.state.score} | High score: {this.state.highScore}</h3>

                <div className="row">
                {this.state.img.map(img => (
                    <DogCard
                        key={img.id}
                        id={img.id}
                        clicked={img.clicked}
                        image={img.image}
                        onClick={this.onClick}
                    />
                ))}
                </div>
            </div>
        </div>
        )
    }
}

export default GameSection;