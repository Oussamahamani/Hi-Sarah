import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer  className="bg-dark text-center text-white">
  <div className="container p-4 pb-0" >
    <section className="mb-4">
  

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i  >LinkedIn</a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i>Github</a>
    </section>
  </div>

  <div className="text-center p-3" style={{backgroundColor: 'black'}}>
    <a className="text-white" href="#!">By Oussama Hamani</a>
  </div>
</footer>
        </div>
    );
}

export default Footer;
