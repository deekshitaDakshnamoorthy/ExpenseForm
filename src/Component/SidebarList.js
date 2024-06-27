import SidebarListItem from "./SidebarListItem";
import {listItems} from '../Utils/data';
const SidebarList=()=>{
   
    return(
<div className="sidebar-container__list">
    <ul>
        {listItems.map((items,index)=>{
            return(
                <SidebarListItem key={index} text={items.text} path={items.path}/>
            )
        })}
    </ul>
  
</div>
    )
}
export default SidebarList;