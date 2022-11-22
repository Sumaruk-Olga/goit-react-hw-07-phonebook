import { Label, Input } from "components/Filter/Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "redux/selectors";  
import {DebounceInput} from 'react-debounce-input';
import { getfilterValue } from "redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  let value ='';
   useSelector(selectFilter);

  const handleChange = (e)=>{    
    return dispatch(getfilterValue(e.target.value));
  }
  
  return(  <Label>
    Find contacts by name
    <DebounceInput
          minLength={1}
          debounceTimeout={350}
          value={value} 
          onChange={handleChange}          
          title='start typing a name to search'
          element={Input} 
        />
    
  </Label>
  )
};