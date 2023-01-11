import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  render() {
    const { status, imageList, loadMore } = this.props;

    if (status === 'resolved' || status === 'pending') {
      return (
        <>
          <ul className="ImageGallery">
            {imageList.length > 0 &&
              imageList.map(image => {
                const { id, webformatURL, largeImageURL, user } = image;

                return (
                  <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    alt={user}
                  />
                );
              })}
          </ul>

          {status === 'pending' ? (
            <Loader />
          ) : imageList.length < 10 ? (
            <p>There are no more pictures with this title.</p>
          ) : (
            <Button loadMore={loadMore} />
          )}
        </>
      );
    }
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
