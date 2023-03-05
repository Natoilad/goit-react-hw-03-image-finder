import { Component } from 'react';
import { getImages } from 'Service/service';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
// import * as fetchSevice from 'Service/service';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
    toggleModal: false,
    total: 1,
    isVisibleBtn: false,
  };
  onSubmit = text => {
    this.setState({
      search: text,
      images: [],
      page: 1,
      loading: false,
      error: null,
      toggleModal: false,
      isVisibleBtn: false,
    });
  };
  componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.getPhotos(this.state.search, this.state.page);
    }
  }
  onLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  getPhotos = async (search, page) => {
    if (!search) return;
    this.setState({ loading: true });
    try {
      const { hits, totalHits } = await getImages(search, page);
      if (hits.length === 0) {
        // this.setState({ empty: true });
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        total: totalHits,
        isVisibleBtn: this.state.page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      console.dir(error);
      this.setState({ error: error });
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.isVisibleBtn && <Button onLoadMore={this.onLoadMore} />}
      </div>
    );
  }
}
