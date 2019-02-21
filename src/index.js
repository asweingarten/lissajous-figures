import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

class App extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 50);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let A = 200;
    let B = 200;
    let alpha = 4.0;
    let beta = 2.0;
    let delta = Math.PI/2;
    let off = 100;

    let X = (A, alpha, delta) => (t) => A * Math.sin (alpha * t + delta);
    let Y = (B, beta) => (t) => B * Math.sin (beta * t);


    let xgo = X (A, alpha + Math.floor (Math.random()*(2*off) - off), delta);
    let ygo = Y (B, beta + Math.floor (Math.random()*(2*off) - off));
    console.log(`xgo: ${xgo(5)}      ygo: ${ygo(5)}`);
    const width = 200;
    const height = 200;
    return (
      <Stage width={window.innerWidth} height={window.innerHeight} fill='#fffbf4'>
        <Layer fill="#fffbf4"
               x={window.innerWidth/2 - width/2}
               y={window.innerHeight/2 - height/2}
               width={width}
               height={height}>
          {[...Array(5000)].map((x,i) => (
            <Rect
              x={xgo(i)}
              y={ygo(i)}
              width={2}
              height={2}
              fill='black'
            />
          ))}
          </Layer>
      </Stage>
    );
  }
}


render(<App />, document.getElementById('root'));
