import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            addClass: ''
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY > 0) {
          this.setState({addClass: 'sticky'})
        } else {
          this.setState({addClass: ''})
        }
    }
    
    render() {
        return (
            <div>
            <header onScroll={this.handleScroll} className={this.state.addClass}>
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

