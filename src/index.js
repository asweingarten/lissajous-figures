import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

class App extends Component {
  constructor(props) {
    super(props);
    this.onGenericChange = this.onGenericChange.bind(this);
  }

  state = {
    A: 200,
    B: 200,
    alpha: 4.0,
    beta: 2.0
  }

  onGenericChange(prop) {
    return (event) => {
      this.setState({[prop]: event.target.value});
    }
  }
  
  componentDidMount() {
    // this.interval = setInterval(() => this.setState({ time: Date.now() }), 500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let {A, B, alpha, beta} = this.state;
    let delta = Math.PI/2;

    let X = (A, alpha, delta) => (t) => A * Math.sin (alpha * t + delta);
    let Y = (B, beta) => (t) => B * Math.sin (beta * t);

    let xgo = X (A, alpha, delta);
    let ygo = Y (B, beta);

    let path = [];
    const pixels = [...Array(5000)].map(
      (x, i) => {
              return <Rect
                x={xgo(i)}
                y={ygo(i)}
                width={2}
                height={2}
                fill='black'
              />
    });
      // path.push ({x: , y: });
    // console.log(`xgo: ${xgo(5)}      ygo: ${ygo(5)}`);
    const width = 200;
    const height = 200;
    return (
      <div>
        <label>A:</label><input type="number" onChange={this.onGenericChange("A")} value={A} ></input>
        <label>B:</label><input type="number" onChange={this.onGenericChange("B")} value={B} ></input>
        <label>alpha:</label><input type="number" onChange={this.onGenericChange("alpha")} value={alpha} ></input>
        <label>beta:</label><input type="number" onChange={this.onGenericChange("beta")} value={beta} ></input>
        <Stage width={window.innerWidth} height={window.innerHeight} fill='#fffbf4'>
          <Layer fill="#fffbf4"
                x={window.innerWidth/2 - width/2}
                y={window.innerHeight/2 - height/2}
                width={width}
                height={height}>
            {pixels}
          </Layer>
        </Stage>
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
