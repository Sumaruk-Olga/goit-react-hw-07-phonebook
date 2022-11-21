import { Label, Input } from "components/Filter/Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "redux/contactsSlice";
import { getFilter } from "redux/selectors";  
import {DebounceInput} from 'react-debounce-input';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const handleChange = (e)=>{    
    return dispatch(filterContacts(e.target.value));
  }
  
  return(  <Label>
    Find contacts by name
    <DebounceInput
          minLength={2}
          debounceTimeout={500}
          value={value} 
          onChange={handleChange}          
          title='start typing a name to search'
          element={Input} 
        />
    
  </Label>
  )
};