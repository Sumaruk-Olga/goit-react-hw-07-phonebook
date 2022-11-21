import { Label, Input } from "components/Filter/Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "redux/contactsSlice";
import { getFilter } from "redux/selectors";  

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const handleChange = (e)=>{    
    return dispatch(filterContacts(e.currentTarget.value));
  }
  
  return(  <Label>
    Find contacts by name
    <Input type="text" value={value} onChange={handleChange}  title='start typing a name to search'/>
  </Label>
  )
};
