import React from 'react';
import './index.scss';
export default function DragImage() {
  return (
    <div className="text-center py-5 light-bg">
      <div className="container">
        <div className="mx-auto fs-2">
          brand
        </div>
        <div className="mb-5 mx-auto small-line-segment mt-2"></div>
        <div className="row">
          <div className="col-lg-6">
            <img src="/images/jing.svg" alt="精益求精" srcSet="" />
            <h2 className="mt-4 mb-3">精益求精</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first
              column.</p>
          </div>
          <div className="col-lg-6">
            <img src="/images/xie.svg" alt="协力和协" srcSet="" />
            <h2 className="mt-4 mb-3">协力和协</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
          </div>
        </div>
      </div>
    </div>

  );

}