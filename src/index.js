import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  changeCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render() {
    return (
      <Scene>
        <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          />
        </a-assets>

        <Entity
          primitive="a-plane"
          src="#groundTexture"
          rotation="-90 0 0"
          height="100"
          width="100"
        />
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 4 4"
        />
        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
        />
        <Entity particle-system={{ preset: 'snow', particleCount: 2000 }} />
        <Entity
          text={{
            value: 'Tıkla',
            align: 'center',
            width: 1.5,
            height: 5,
          }}
          position={{ x: 0, y: 2, z: -1 }}
        />
        <Entity
          text={{
            value: `${this.state.counter}`,
            align: 'center',
            width: 1.5,
            height: 5,
          }}
          position={{ x: 0, y: 2.1, z: -1 }}
        />

        <Entity
          geometry={{
            primitive: 'plane',
            height: '2',
          }}
          material={{ color: 'blue' }}
          position={{ x: 0, y: 2, z: -1 }}
          events={{
            click: () => {
              this.changeCounter();
            },
          }}></Entity>

        <Entity primitive="a-camera">
          <Entity
            primitive="a-cursor"
            animation__click={{
              property: 'scale',
              startEvents: 'w',
              from: '0.1 0.1 0.1',
              to: '1 1 1',
              dur: 150,
            }}
          />
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#sceneContainer'));
