import React from "react";
import FlickrLightbox from "react-flickr-lightbox";

export default function Identify() {
  return (
      <FlickrLightbox api_key='138e347faa6302c00650413cf2106c5c' user_id='189302524@N06' album_id='72157715067880037' thumbnailSizeParam='url_s' />
    );
  }