import React from "react"
import ContactItem from "../ContactItem"
import PropTypes, { arrayOf } from 'prop-types'

const ContactList = ({ contacts, onRemoveContact }) => {
  console.log("contacts in ContactList", contacts)
  return (
    <ul>
      {contacts.map((item) => (
        <ContactItem
          key={item.id}
          contact={item}
          onRemoveContact={() => onRemoveContact(item.id)}
        />
      ))}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: arrayOf(PropTypes.object)

}

export default ContactList
