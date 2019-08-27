import React from 'react';
import TopPicksContainer from './TopPicksContainer';
import CategoriesContainer from '../Categories/CategoriesContainer';
import ReactPlayer from 'react-player'


const HomeMainSection = () => (
      <main>
        <div className="landing-container">
          <ReactPlayer
          url='https://vimeo.com/169599296'
          width="100%"
          height="100%"
          />
        </div>
        <CategoriesContainer />
        <TopPicksContainer />
      </main>

);

export default HomeMainSection;
