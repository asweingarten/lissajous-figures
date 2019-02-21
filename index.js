import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

class ColoredRect extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    const height = 400;
    const width  = 400;
    return (
      <Rect
        x={window.innerWidth/2 - width/2}
        y={window.innerHeight/2 - height/2}
        width={width}
        height={height}
        fill='#fffbf4'
        onClick={this.handleClick}
      />
    );
  }
}

class App extends Component {
  render() {
    let X = (A, alpha, delta) => (t) => A * sin (alpha * t + delta);
    let Y = (B, beta) => (t) => B * sin (beta * t);

    let A = 60;
    let B = 60;
    let alpha = 4.0;
    let beta = 2.0;
    let delta = HALF_PI;
    let off = 20;

    let xgo = X (A, alpha + floor (Math.random()*(2*off) - off), delta);
    let ygo = Y (B, beta + floor (Math.random()*(2*off) - off);
    return (
      <Stage width={window.innerWidth} height={window.innerHeight} fill='#fffbf4'>
        <Layer>
          <Text text="Try click on rect" />
          <ColoredRect />
          {[...Array(1000)].map(i => (
            <Rect
              x={xgo(t)}
              y={ygo(t)}
              width={1}
              height={1}
              fill='#282828'
            />
            // point (xgo(t), ygo(t));
          )}
        </Layer>
      </Stage>
    );
  }
}


render(<App />, document.getElementById('root'));
