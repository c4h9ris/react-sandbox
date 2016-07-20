import React, {Component} from 'react';

class CarouselPopup extends Component {
  render() {
    return (
      <div className="modal fade" id="carouselPopup" tabindex="-1" role="dialog" aria-labelledby="carouselPopupLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="secondary_button btn" id="template-preview-build-dyn">
                <span className="light_text">use this template</span>
              </div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
              <img className="img-responsive" src={"images/templates_preview/" + this.props.image + "v6template.png"} />
            </div>
            <div className="modal-footer">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselPopup;
