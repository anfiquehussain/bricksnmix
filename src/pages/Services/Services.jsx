import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Card from '../../components/Card/Card';
import img from '../../assets/images/sr_images/Construction-Tools.png';
import ServiceContactForm from '../../components/ServiceContactForm/ServiceContactForm';

function Services() {
    return (
        <div>
            <HeroBanner
                title="Services"
                subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque at provident voluptates vitae, explicabo ipsum,"
            />

            <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center px-4 py-8">
                <Card img={img} title="Construction" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                <Card img={img} title="Construction" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                <Card img={img} title="Construction" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </div>
            <ServiceContactForm/>
        </div>
    );
}

export default Services;
