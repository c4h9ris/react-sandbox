import React, {Component} from 'react';
import Slider from 'react-slick';

class CarouselItems extends Component {

  updatePopupContent(value) {
    this.props.onClickSlideHandler(value);
  }
  render() {
    var currentImage;
    var settings = {
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 1, infinite: false } },
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false } },
        { breakpoint: 100000, settings: { slidesToShow: 5, slidesToScroll: 5, infinite: false } }
      ]
    };
    var carouselSlides = [];
    var clonedData = [...this.props.data]
    for(var x=0; x < clonedData.length; x++) {

      var templateChunk = clonedData.splice(0, 3);
      // var myData = this.props.data;
      // var first, second, third, theRest;

      // [first, second, third, ...theRest] = myData;

      var slide = <div key={templateChunk[0].id + templateChunk[1].id}>
            <a
              href="#" onClick={this.updatePopupContent.bind(this, templateChunk[0].name)} data-toggle="modal"
              data-target="#carouselPopup">
                <img src={templateChunk[0].thumbnail} />
            </a>
            <br />
            <a
              href="#" onClick={this.updatePopupContent.bind(this, templateChunk[1].name)} data-toggle="modal"
              data-target="#carouselPopup">
                <img src={templateChunk[1].thumbnail} />
            </a>
            <br />
            <a
              href="#" onClick={this.updatePopupContent.bind(this, templateChunk[2].name)} data-toggle="modal"
              data-target="#carouselPopup">
                <img src={templateChunk[2].thumbnail} />
            </a>
          </div>;

      carouselSlides.push(slide);
    }

    return (
      <div>
        <Slider {...settings}>
          { carouselSlides }
        </Slider>
      </div>
    );
  }
}

export default CarouselItems;
