import './App.css';

function Footbar() {
    return (<div>
        <section id="contacts">
    <form className="contacts"/>
      <div className="fill">
        <h3> Feel free to contact me: </h3>
      </div>
    </section>
      
      <div className="labels">
        <label> Name: </label>
        <input type="text" placeholder="Type your name..." required/>
      </div>
      
      <div className="labels">
        <label> Phone:</label>
        <input type="tel" placeholder="Type your phone#..."/>
      </div>
      
      <div className="labels">
        <label> Email: </label>
        <input type="email" placeholder="Type your email..." required/>
      </div>
    
      <div id="button">
        <a href="mailto:mmadinag@gmail.com"> <button class="send"> Send </button> </a>
      </div>
    
  

  <div className="container">
    <footer className="py-3 my-4">
      <div className="justify-content-center border-bottom pb-3 mb-3">
        <p className="text-center text-body-white"> © 2023 By Madina </p>
      </div>
      <a href="#home" className=" text-center  nav-link px-2 text-body-white"> <p> HOME  </p>  </a>
    </footer>
  </div>
       
   
           
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="script.js"> </script>
    </div>


    
    )
}

export default Footbar;