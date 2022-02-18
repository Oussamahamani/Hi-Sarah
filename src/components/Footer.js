import React from 'react';
import './Nav.css'
const Footer = () => {
    return (
        <div>
            <footer  className="bg-dark text-center text-white footer">
  <div className="container p-4 pb-0" >
    <section className="mb-4">
  

      <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/oussama-hamani/" role="button"
        ><i className="fab fa-linkedin-in"></i  >LinkedIn</a>

      <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Oussamahamani/Hi-Sarah" role="button"
        ><i className="fab fa-github"></i>Github</a>
    </section>
  </div>

  <div className="text-center p-3" style={{backgroundColor: 'black'}}>
    <a className="text-white" href="www.linkedin.com/in/oussama-hamani">By Oussama Hamani</a>
  </div>
  
</footer>
        </div>
    );
}

export default Footer;
