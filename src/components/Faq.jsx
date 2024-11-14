import React from 'react'
import Accordion from './Accordion'

function Faq() {
  return (
    <div className="faq-container">
      <div className="faq-left-container">
        <div className="faq-title">
          <h1>Any questions? <br />Check out the FAQs</h1>
          <p>Still have unanswered questions and need to get in touch?</p>
        </div>
        <div className="contact-box-container">
          <div className="contact-Box">
            <div className="title-box">
              <img src="/faqicon1.svg" alt="faqIcon1" />
              <p>Still have questions?</p>
            </div>
            <a href="#" className="contact-btn">
              <span className="primary-color">Contact us</span>
              <img src="/icon-r-primary.svg" alt="" />
            </a>
          </div>
          <div className="contact-Box">
            <div className="title-box">
              <img src="/faqicon2.svg" alt="faqIcon2" />
              <p>Don't like phone calls?</p>
            </div>
            <a href="#" className="contact-btn">
              <span className="green-color">Contact us</span>
              <img src="/icon-r-green.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <Accordion />
    </div>
  )
}

export default Faq