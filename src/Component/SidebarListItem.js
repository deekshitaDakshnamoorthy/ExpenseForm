import { NavLink } from "react-router-dom";

const SidebarListItem = (props) => {
  return (
    <li>
      <NavLink to={props.path}>{props.text}</NavLink>
      
    </li>
  );
};
export default SidebarListItem;
