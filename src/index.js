import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

class App extends Component {
  constructor(props) {
    super(props);
    this.onAChange = this.onAChange.bind(this);
    this.onBChange = this.onBChange.bind(this);
  }

  state = {
    A: 200,
    B: 200
  }
  
  onAChange(newA) {
    this.setState({A: newA.target.value});
  }

  onBChange(newB) {
    this.setState({B: newB.target.value});
  }

  componentDidMount() {
    // this.interval = setInterval(() => this.setState({ time: Date.now() }), 500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let {A, B} = this.state;
    let alpha = 4.0;
    let beta = 2.0;
    let delta = Math.PI/2;

    let X = (A, alpha, delta) => (t) => A * Math.sin (alpha * t + delta);
    let Y = (B, beta) => (t) => B * Math.sin (beta * t);


    let xgo = X (A, alpha, delta);
    let ygo = Y (B, beta);
    console.log(`xgo: ${xgo(5)}      ygo: ${ygo(5)}`);
    const width = 200;
    const height = 200;
    return (
      <div>
        <label>A:</label><input type="number" onChange={this.onAChange} value={A} ></input>
        <label>B:</label><input type="number" onChange={this.onBChange} value={B} ></input>
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
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
