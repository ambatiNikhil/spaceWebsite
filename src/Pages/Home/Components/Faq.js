import React from "react";
import { useState } from "react";

const Faq = () => {
  const data = [
    {
      question: "question1",
      answer:
        "Lorem ipsum dolor sit ametr, consectetur adipiscing elit. Sed ac justo vel libero tincidunt lacinia.Nullam nec nisl nec nunc facilisis dignissim.",
    },
    {
      question: "question2",
      answer:
        "Lorem ipsum dolor sit ametr, consectetur adipiscing elit. Sed ac justo vel libero tincidunt lacinia.Nullam nec nisl nec nunc facilisis dignissim.",
    },
    {
      question: "question3",
      answer:
        "Lorem ipsum dolor sit ametr, consectetur adipiscing elit. Sed ac justo vel libero tincidunt lacinia.Nullam nec nisl nec nunc facilisis dignissim.",
    },
    {
      question: "question4",
      answer:
        "Lorem ipsum dolor sit ametr, consectetur adipiscing elit. Sed ac justo vel libero tincidunt lacinia.Nullam nec nisl nec nunc facilisis dignissim.",
    },
    {
      question: "question5",
      answer:
        "Lorem ipsum dolor sit ametr, consectetur adipiscing elit. Sed ac justo vel libero tincidunt lacinia.Nullam nec nisl nec nunc facilisis dignissim.",
    },
  ];

  const [selected , setSelected] = useState(null) 

  const handleSelect = (i) => {
    setSelected(i)
  }
  return (
    <>
      <h1 className="heading">Faq</h1>
      <section className="faq">
        <div className="item">
          {data.map((item , i) => {
            return (
              <div className="wrapper" key={i} onClick={() => handleSelect(i)}>
                <div className="question" >
                  <h3>{item.question}</h3>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbn7XvMR-Muer6dVASZoQlKfMXvZzeAmP2XA&usqp=CAU"
                    alt="arrow"
                  />
                </div>
                <div className={selected === i ? "answers show" : "answers"}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;
