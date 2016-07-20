import React, {Component} from 'react';
import CarouselItems from './carousel-items';
import CarouselPopup from './carousel-popup';

require('styles/carousel.less');
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {data:[], currentImage: ''};
  }
  componentDidMount() {
    $.ajax({
      url: '/stores/templates.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  render() {
    return(
      <div>
        <div className="react-carousel">
          <div className="container">
          <div className="row">
              <div className="col-sm-offset-1 col-sm-10 col-xs-12">
                <h2 className="light_text" id="headline_message">Just pick a template and then you&#39;re good to go!</h2>
              </div>
            </div>
            <CarouselItems data={this.state.data} onClickSlideHandler={(imageURL)=> {
                this.setState({currentImage: imageURL}, function() {
                  this.forceUpdate();
                });
              }
            }/>
          </div>
        </div>
        <CarouselPopup image={this.state.currentImage} />
      </div>
    );
  }
}

export default Carousel;
