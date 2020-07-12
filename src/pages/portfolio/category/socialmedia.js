import React from 'react';
import FlickrLightbox from "react-flickr-lightbox";

function SocialMedia() {
  return (
    <div>
      <FlickrLightbox api_key='138e347faa6302c00650413cf2106c5c' user_id='189302524@N06' album_id='72157715068152747' thumbnailSizeParam='url_s' />
    </div>
  );
}

export default SocialMedia;
