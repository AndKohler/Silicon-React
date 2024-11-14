import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Jag kollade videon i Omniway för att skapa denna, sedan tog jag lite hjälp utav ChatGPT för OpenIndex delen. 
// Fetch gjorde jag utan ChatGPT.


const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("https://win24-assignment.azurewebsites.net/api/faq")
      .then((res) => res.json())
      .then((data) => {
        setFaqs(data);
      });
  }, []);

  const handleClick = (index) => {
    setOpenIndex(index);
  };

  return (
    <div className="accordion-container">
      {faqs.map((faq, index) => (
        <div className="faq" key={faq.id}>
          <div className="faq-card">
            <div className="question" onClick={() => handleClick(index)}>
              <p>{faq.title}</p>
              <button className={`accordion-btn ${openIndex === index ? 'open' : ''}`}>
                <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown}/>
              </button>
            </div> {openIndex === index && <div className="answer">{faq.content}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
