import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            addClass: '',
            backgroundColor: ''
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleStyle = this.toggleStyle.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.toggleStyle);
    }

    handleScroll() {
        if (window.scrollY > 0) {
          // console.log(window.scrollY)
          this.setState({addClass: 'sticky'})
        } else {
          this.setState({addClass: ''})
        }
        this.toggleStyle();
    }

    toggleStyle() {
        if (window.scrollY >= 160) {
            // console.log(window.scrollY)
            this.setState({backgroundColor: 'black'});
        } else {
            this.setState({backgroundColor: ''})
        }
    }
    
    render() {
        return (
            <div>
                <header 
                onScroll={this.handleScroll} 
                className={this.state.addClass} 
                style={{backgroundColor: this.state.backgroundColor}}
                >
                    <a href="#home" className="logo">Logo</a>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default Navbar;
