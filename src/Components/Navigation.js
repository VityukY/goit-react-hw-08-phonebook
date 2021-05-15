import { NavLink } from 'react-router-dom';
import routes from '../routs';

const Navigation = () => {
   return (
      <nav className="linkList">
         <NavLink exact to={routes.home} className="" activeClassName="">
            Home
         </NavLink>
         <NavLink exact to={routes.contacts} className="" activeClassName="">
            Contacts
         </NavLink>
         <NavLink exact to={routes.registarion} className="" activeClassName="">
            Registarion
         </NavLink>
         <NavLink exact to={routes.login} className="" activeClassName="">
            Login
         </NavLink>
      </nav>
   );
};
export default Navigation;
