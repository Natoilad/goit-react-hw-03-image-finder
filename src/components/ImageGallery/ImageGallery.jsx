import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, togleModal }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem togleModal={togleModal} images={images} />
    </ul>
  );
};
