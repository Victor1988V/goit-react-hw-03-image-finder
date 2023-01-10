import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = ({ currentTarget, target, code }) => {
    if (currentTarget === target || code === 'Escape') {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const { webformatURL, largeImageURL, alt } = this.props;
    const { isOpen } = this.state;

    return (
      <li className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={alt}
          className="ImageGalleryItem-image"
          onClick={this.openModal}
        />
        {isOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={alt}
            closeModal={this.closeModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
};
