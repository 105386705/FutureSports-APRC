import React from 'react';
import MapFrame from './MapFrame';
import ContactForm from './ContactForm';
import EventTable from './EventTable';

const Home = () => (
  <div className="home-container">
    <div className="main-area">
      <section className="about">
        <h2>About</h2>
        <p>Empowering local runners towards achieving personal and professional excellence, Albert Park Running Club aims to connect users through an intuitive, comprehensive, and supportive digital platform, that engages the local community with the tools, information, and resources needed to support users directly. Unlike other social media network groups, APRC utilizes events, maps, digital media, and other informational resources to support its target audience.</p>
      </section>
      <MapFrame />
    </div>
    <aside className="sidebar">
      <EventTable />
      <ContactForm />
    </aside>
  </div>
);

export default Home;
