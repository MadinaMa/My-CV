import './App.css';

function Navbar() {
return (
    <div>
          <section id="home">
        <nav className="navbar">
            <a className="link " aria-current="page" href="#myprojects"> My projects </a>
            <a className="link two" aria-current="page" href="#mycertificates"> My certificates </a>
            <a className="link one" aria-current="page" href="#contacts"> Contact me </a>
        </nav>

      <p id="par"> </p>  
    </section>
    </div>
)
}

export default Navbar;