import React from 'react'
import {HashLink} from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div>
      <nav>
        <main className='flex flex-row gap-5 justify-evenly'>
          <HashLink to='/#'>Home</HashLink>
          <HashLink to='/#about'>About</HashLink>
          <HashLink to='/#disc'>disc</HashLink>
          <HashLink to='/#testi'>Testimonial</HashLink>
          
        </main>
      </nav>
    </div>
  )
}

export default Navbar


// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   function clickHandler(event, sectionId) {
//     event.preventDefault();
//     const targetSection = document.getElementById(sectionId);
//     if (targetSection) {
//       window.scrollTo({
//         top: targetSection.offsetTop,
//         behavior: 'smooth',
//       });
//     }
//   }

//   return (
//     <div className='flex flex-row justify-evenly'>
//       <nav className=''>
//         <ul>
//           <li>
//             <Link to="/" onClick={(e) => clickHandler(e, 'hero')}>Home</Link>
//           </li>
//           <li>
//             <Link to="/about" onClick={(e) => clickHandler(e, 'about')}>About</Link>
//           </li>
//           <li>
//             <Link to="/description" onClick={(e) => clickHandler(e, 'disc')}>Description</Link>
//           </li>
//           <li>
//             <Link to="/testimonial" onClick={(e) => clickHandler(e, 'testi')}>Testimonial</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
