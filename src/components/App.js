import React, { Component } from 'react';
import Title from './Title';
import ImageSwitcher from './ImageSwitcher';
import images from '../data/images';
import content from '../data/content';

import './App.css';
import TileVideo from './TileVideo';
import ContentContainer from './ContentContainer';
import ArticleVideo from './ArticleVideo';
import TransitionVideo from './TransitionVideo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images,
      selectedImage: images[0],
      content,
      videoTarget: null,
    };
  }

  render() {
    const playTransition = (event) => {
      event.target.stopVideo();
      this.state.videoTarget.playVideo();
    };

    const getVideoTarget = (event) => {
      this.setState({ videoTarget: event.target });
    };

    return (
      <div className="root">
        <Title />
        <ImageSwitcher
          images={this.state.images}
          onImageSelect={selectedImage => this.setState({ selectedImage })}
          selectedImage={this.state.selectedImage}
        />
        <div className="article-container">
          <ContentContainer content={this.state.content[0]} />
          <ArticleVideo />
        </div>
        <h1>
          Tile Layout
        </h1>
        <div className="tile-top-container">
          <TileVideo playTransition={playTransition} />
          <ContentContainer content={this.state.content[1]} />
        </div>
        <div className="tile-bottom-container">
          <TransitionVideo getVideoTarget={getVideoTarget} />
          <ContentContainer content={this.state.content[2]} />
        </div>
      </div>
    );
  }
}

export default App;
