export const ImageGalleryItem = ({ images, togleModal }) => {
  return images.map(img => {
    const { id, webformatURL, tags } = img;
    return (
      <li
        key={id}
        onClick={evt => {
          togleModal(img.largeImageURL, img.tags);
        }}
        className="ImageGalleryItem"
      >
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
