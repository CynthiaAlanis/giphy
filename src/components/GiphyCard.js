import React from 'react';

const GiphyCard = ({giphy}) => {
  return giphy.data ?(
    <div className="giphy">
      <div>
        <h1>GIPHY API</h1>
        <img src={giphy.data.images.downsized.url} alt='giphy'/>
      </div>


    </div>
  ):(
    <h1>

    </h1>
  )
}

export default GiphyCard;