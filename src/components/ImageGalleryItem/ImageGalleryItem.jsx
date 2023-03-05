export const ImageGalleryItem = ({ images }) => {
  return images.map(img => {
    const { id, webformatURL, tags } = img;
    return (
      <li key={id} className="gallery-item">
        <img src={webformatURL} alt={tags} />
      </li>
    );
  });
};
