import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectContacts, selectFilter } from "redux/selectors";
// import { deleteContact } from "redux/contactsSlice";
// import { getContacts, getFilter } from "redux/selectors";
import { ContactsList, ContactItem, DeleteButton } from "./Contacts.styled";

export const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);


    const getVisibleContacts = () => {
        if(filter){
            const normalizedFilter = filter.toLowerCase();
            return contacts.filter(item => item.name.toLowerCase().includes(normalizedFilter));
        }        
        return contacts;
      };

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

    return (<>
        { 
        contacts.length>0 && 
        <ContactsList>                  
            {getVisibleContacts().map((item) => {               
                return <ContactItem key={item.id}>
                    <p>{item.name}: {item.phone}</p>
                    <DeleteButton type="button" 
                    // onClick={()=>dispatch(deleteContact(item.id))}
                    >x</DeleteButton>
                </ContactItem>
            })}
        </ContactsList>} 
    </>)
        
}

