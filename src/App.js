import React from 'react';
import './App.scss';

import { Carousel } from './components/Carousel/index';

class App extends React.Component {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
  };

  render() {
    const { images } = this.state;

    return (
      <div className="App">
        <h1 className="header">
          {`Carousel with ${images.length} images`}
        </h1>

        <Carousel
          images={images}
          itemWidth={130}
          step={3}
          frameSize={3}
          animationDuration={1000}
        />
      </div>
    );
  }
}

export default App;