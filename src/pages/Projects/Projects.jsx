import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ImageGrid from '../../components/ImageGrid/ImageGrid';
import { image1, image2, image3, image4, image5 } from '../../assets/images/pr_images/pr_img';
import ProjecrContactForm from '../../components/ProjecrContactForm/ProjecrContactForm';


function Projects() {
  return (
    <>
      <HeroBanner
        title='Projects'
        subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque at provident voluptates vitae, explicabo ipsum,"
      />
      <ImageGrid
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
        image5={image5}
      />
      <ProjecrContactForm/>
      <div>
        Projects
      </div>
    </>
  );
}

export default Projects;
