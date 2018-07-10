import React, { Component } from 'react';
import Title from './Title';
import ImageSwitcher from './ImageSwitcher';
import images from '../data/images';
import content from '../data/content';

import './App.css';
import Article from './Article';
import TileVideo from './TileVideo';
import ContentContainer from './ContentContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images,
      selectedImage: images[0],
      content,
    };
  }

  render() {
    return (
      <div className="root">
        <Title />
        <ImageSwitcher
          images={this.state.images}
          onImageSelect={selectedImage => this.setState({ selectedImage })}
          selectedImage={this.state.selectedImage}
        />
        <ContentContainer content={this.state.content[0].content} />
        <h1>
          Tile Layout
        </h1>
        <TileVideo />
      </div>
    );
  }
}

export default App;
