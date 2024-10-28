import React from 'react'
import "./../styles/contact.css";

const Contact = () => {
  return (
    <section id='contact' className='contactSection sectionHead'>
      <div className='contactContainer'>
        <div>
          <h1>Reach Out to Me</h1>
          <p>I am currently looking for new opportunities and welcome job offers! If any feedback, queries, or simply want to say hi, please feel free to reach out to me. My inbox is always open, and I will respond as soon as possible.</p>
        </div>
        <a className="button checkout" href="mailto:ujwal5ghare@gmail.com" >Send Message</a>
      </div>
      <div className='footer'>
        <ul className='mediaIcons'>
          <li>
            <a href="https://www.linkedin.com/in/ujwal-pachghare" rel="noreferrer" target="_blank"><svg className="feather feather-linkedin" fill="none" height="24" stroke="#8892b0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect height="12" width="4" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></a>
          </li>
          <li>
            <a href="https://github.com/Uj5Ghare" rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#8892b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>

          </li>
          <li>
            <a
              href="https://www.medium.com/%40ujwal5ghare"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8892b0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="bi bi-medium"
              >
                <title>Medium</title>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"></path>
              </svg>{" "}
            </a>
          </li>
        </ul>
        <p className='copyRight'>&#169; Copyright 2024. Developed by <span><a href="https://www.linkedin.com/in/ujwal-pachghare" rel="noopener noreferrer" target="_blank" >Ujwal Pachghare</a></span></p>
      </div>
    </section>
  )
}

export default Contact