import React from 'react';
import AlbumList from '../../components/albumList';
import './index.scss';
export default function Products() {
  const picList = [{
    productName: '产品名称',
    productSrc: '/images/album/cut1.jpg',
  }, {
    productName: '产品名称',
    productSrc: '/images/album/light.jpeg',
  }, {
    productName: '产品名称',
    productSrc: '/images/album/machine.jpg',
  }, {
    productName: '产品名称',
    productSrc: '/images/album/worker.jpeg',
  }, {
    productName: '产品名称',
    productSrc: '/images/album/light2.jpg',
  }, {
    productName: '产品名称',
    productSrc: '/images/album/cut1.jpg',
  }, {
    productName: '产品名称',
    productSrc: '/images/album/cut1.jpg',
  }, {
    productName: '产品名称',
    productSrc: '/images/album/cut1.jpg',
  }, {
    productName: '产品名称',
    productSrc: '/images/album/cut1.jpg',
  }]
  return (
    <div className="header-top">
      <div className="product-top d-flex justify-content-center align-items-center">
        <img srcSet="/images/products/products.jpg" alt="" src="/images/default-cover.png" />
        <div className="container position-absolute text-white title ps-3 ">
          <div className="mb-1">
            <span className="blue">精协</span>
            <span>机械</span>
          </div>
          <div className="mb-1">全产品中心</div>
          <img className="img-arrow mt-4" src="/images/default-cover.png" alt="" srcSet="/images/products/arrow1.png" />
        </div>
      </div>
      <div className="container  my-5">
        <div className="product-title fs-3 mb-5 text-center">
          产品展示
        </div>
        <AlbumList picList={picList}></AlbumList>
      </div>
    </div>
  );
}