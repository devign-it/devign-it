import React from "react";
import anime from "animejs/lib/anime.es.js";
import SiteMeta from "../../components/SiteMeta";
import DarkModeToggle from "../../components/DarkModeToggle";
import "./styles.scss";

class AnimatedQuote extends React.Component {
    constructor(props) {
        super(props);
        this.quoteContainer = React.createRef();
        this.animatedQuote = React.createRef();
    }

    componentDidMount() {
        const header = this.quoteContainer.current;

        header.addEventListener("mousemove", (event) => {
            let xPos = event.clientX / window.innerWidth + 0.05 / 2;
            let yPos = event.clientY / window.innerHeight + 0.05 / 2;

            console.log(xPos, yPos);

            anime({
                targets: ".quote",
                easing: "easeOutQuint",
                duration: 120,
                // rotationZ: Math.sqrt(Math.pow(yPos, 4) + Math.pow(xPos, 2)) * 5,
                // rotationX: Math.sqrt(Math.pow(xPos, 4) + Math.pow(yPos, 2)) * 5,
                // rotation: Math.sqrt(Math.pow(yPos, 4) + Math.pow(xPos, 2)) * 5,
                skewY: Math.pow(yPos, 2) * -3,
                skewX: Math.pow(xPos, 2) * -6,
            });

            // moveTitle();
        });
    }

    render() {
        return (
            <header ref={this.quoteContainer} className="header--container">
                <SiteMeta color="white" />
                <h1 ref={this.animatedQuote} className="quote">
                    {this.props.children}
                </h1>
                {/* <DarkModeToggle /> */}
            </header>
        );
    }
}

export default AnimatedQuote;
