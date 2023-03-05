import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('escapeKey', this.escapeKey);
  }

  componentWillUnmount() {
    window.removeEventListener('escapeKey', this.escapeKey);
  }

  escapeKey = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };
  backDropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div onClick={this.backDropClick} className="Overlay">
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}
