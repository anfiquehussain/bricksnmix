import React from 'react'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import ContactForm from '../../components/ContactForm/ContactForm'


function ContactUs() {
  return (
    <div>
      <HeroBanner title='Contact Us' subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque atprovident voluptates vitae, explicabo ipsum, " />
      <ContactForm/>
    </div>
  )
}

export default ContactUs