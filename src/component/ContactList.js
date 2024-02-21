import React from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) =>
    state.filterName.length > 0 ? state.filterName : state.contactList
  );
  return (
    <div>
      <SearchBox />
      {contactList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
