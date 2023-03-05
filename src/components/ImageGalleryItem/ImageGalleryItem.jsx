export const ImageGalleryItem = ({ images }) => {
  return images.map(img => {
    const { id, webformatURL, tags } = img;
    return (
      <li key={id} className="ImageGalleryItem">
        <img
          loading="lazy"
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={tags}
        />
      </li>
    );
  });
};
