import React from 'react';
export default function Card(props) {
  const {contain, image, footername } = props;
  return (
    <div class="card">
      <img
        class="card-img-top img-fluid"
        src={image}
        alt=""
      />
      <div class="card-body">
        <p class="card-text textColor">
          {contain}
        </p>
      </div>
      <div class="textColorBottom" >
      <p class="textBottom">
          {footername}
        </p>
      
      </div>
    </div>
  );
}
