import PropTypes from 'prop-types';
import React from 'react';
import AlbumItem from './components/albumItem';
export default function AlbumList(props) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {props.picList && props.picList.map((product, index) => {
        return (
          <AlbumItem product={product} key={index}></AlbumItem>
        );
      })}
    </div>
  );
}
AlbumList.propTypes = {
  picList: PropTypes.array,
};