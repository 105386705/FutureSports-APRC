import React from 'react';

const MapFrame = () => (
  <section className="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12602.02009354019!2d144.96611302953212!3d-37.84847211019015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad667e1dead25bd%3A0x5045675218ce8a0!2sAlbert%20Park%20VIC%203206!5e0!3m2!1sen!2sau!4v1709564506954!5m2!1sen!2sau"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </section>
);

export default MapFrame;
