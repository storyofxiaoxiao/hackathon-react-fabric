import PropTypes from 'prop-types';
import React from 'react';

export default function AlbumItem(props) {

  const productItem = props.product;
  return (
    <div key={productItem} className="col">
      <div className="card shadow-sm">
        <img className="bd-placeholder-img card-img-top" height="225" src={productItem.productSrc} alt="" srcSet="" />

        <div className="card-body">
          <p className="card-text">{productItem.productName}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">btn</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">btn</button>
            </div>
            <small className="text-muted">9 数量</small>
          </div>
        </div>
      </div>
    </div>
  );
}
AlbumItem.propTypes = {
  product: PropTypes.object,
};