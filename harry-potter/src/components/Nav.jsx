import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav (props) {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleClick = (path) => {
        setActiveLink(path);
      };

    // const [isOpen, setIsOpen] = useState(false);
  
    // const toggleMenu = () => {
    //   setIsOpen(!isOpen);
    // };
    
    return (


    <div className= "nav">

      <Link to="/" onClick={() => handleClick('/')}>
        <h2 className={activeLink === '/' ? 'navtext active' : 'navtext'}>Home</h2>
      </Link>
      <Link to="/films" onClick={() => handleClick('/films')}>
        <h2 className={activeLink === '/films' ? 'navtext active' : 'navtext'}>Films</h2>
      </Link>
      <Link to="/books" onClick={() => handleClick('/books')}>
        <h2 className={activeLink === '/books' ? 'navtext active' : 'navtext'}>Books</h2>
      </Link>
      <Link to="/people" onClick={() => handleClick('/people')}>
        <h2 className={activeLink === '/people' ? 'navtext active' : 'navtext'}>People</h2>
      </Link>
      <Link to="/spells" onClick={() => handleClick('/spells')}>
        <h2 className={activeLink === '/spells' ? 'navtext active' : 'navtext'}>Spells</h2>
      </Link>
      <Link to="/potions" onClick={() => handleClick('/potions')}>
        <h2 className={activeLink === '/potions' ? 'navtext active' : 'navtext'}>Potions</h2>
      </Link>
    </div>
    
    )
  }