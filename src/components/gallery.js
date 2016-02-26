import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

var images = [
  {
    original: '../images/DSC_0001.jpg',
    thumbnail: '../images/DSC_0001.jpg',
    originalClass: 'featured-slide',
    thumbnailClass: 'featured-thumb',
    originalAlt: 'original-alt',
    thumbnailAlt: 'thumbnail-alt',
  },
  {
    original: '../images/DSC_0002.jpg',
    thumbnail: '../images/DSC_0002.jpg'
  },
  {
    original: '../images/DSC_0004.jpg',
    thumbnail: '../images/DSC_0004.jpg'
  },
  {
    original: '../images/DSC_0005.jpg',
    thumbnail: '../images/DSC_0005.jpg'
  },
  {
    original: '../images/DSC_0006.jpg',
    thumbnail: '../images/DSC_0006.jpg'
  },
  {
    original: '../images/DSC_0009.jpg',
    thumbnail: '../images/DSC_0009.jpg'
  },
  {
    original: '../images/DSC_0011.jpg',
    thumbnail: '../images/DSC_0011.jpg'
  },
  {
    original: '../images/DSC_0015.jpg',
    thumbnail: '../images/DSC_0015.jpg'
  },
  {
    original: '../images/DSC_0019.jpg',
    thumbnail: '../images/DSC_0019.jpg'
  },
  {
    original: '../images/DSC_0020.jpg',
    thumbnail: '../images/DSC_0020.jpg'
  },
  {
    original: '../images/DSC_0523.jpg',
    thumbnail: '../images/DSC_0523.jpg'
  },
];

export default class Gallery extends Component {

  handleSlide(item) {
    console.log('slide to ', item);
  }

  render() {
    return (
      <div id='photos' className='section'>
      <div className='content'>
      <h2>Photos</h2>
      <ImageGallery
        items={images}
        autoPlay={true}
        slideInterval={10000}
        onSlide={this.handleSlide}/>
      </div>
      </div>
    );
  }
}
