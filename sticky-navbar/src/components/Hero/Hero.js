import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import hero from '../../images/nature.jpg';
import './Hero.css';

// const inlineStyle = {
//     color: '#fff',
//     textTransform: 'uppercase',
//     fontFamily: 'sans-serif',
//     fontSize: '100px',
//     fontWeight: '800',
//     fontStyle: 'normal',
//     letterSpacing: '0.1em',
//     lineHeight: '1em',
//     textAlign: 'center'
// };

class Hero extends Component {
    render() {

        return (
            <div>
              <Parallax 
              bgImage={ hero }
              strength={100}
              >
                <div style={{height: '110vh'}}>
                    <div className="showcase-text">
                        <h1>Jeremy Mark</h1>
                        <p>Web Developer</p>
                    </div>
                </div>
              </Parallax>
            </div>
        )
    }
}

export default Hero;