import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

class Item extends React.Component {
  render() {
    let img = this.props.item.img;
    return(
      <div className="Item">
        <div className="Item-left">
          <div className="Item-image" >
            <img src={require(`${img}`)} alt={this.props.item.name}/>            
          </div>
          <div className="Item-title">{this.props.item.name}</div>
          <div className="Item-description">{this.props.item.description}</div>
        </div>
        <div className="Item-right">
          <div className="Item-price">${this.props.item.price}</div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
/*
const Item = ({ item, children }) => (
  <div className="Item">
    <div className="Item-left">
      <div className="Item-image" >
        <img src={img} />
      </div>
      <div className="Item-title">{item.name}</div>
      <div className="Item-description">{item.description}</div>
    </div>
    <div className="Item-right">
      <div className="Item-price">${item.price}</div>
      {children}
    </div>
  </div>
);
*/
Item.propTypes = {
  item: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default Item;