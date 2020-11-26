import React, { Component } from "react"
import ContactList from "../ContactList"
import PhonebookForm from "../PhonebookForm"
import Filter from "../Filter"

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
    name: "",
    number: "",
  }

  onAddContact = (newContact) => {
    this.state.contacts.find((contact) => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in the phonebook!`)
      : this.setState((prevState) => {
          return {
            contacts: [...prevState.contacts, newContact],
          }
        })

    console.log("Contacts in onAddContact", this.state.contacts)
  }

  onRemoveContact = (contactId) => {
    console.log("On remove contact>>>")
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      }
    })
  }

  onChangeFilter = (filter) =>{
    this.setState({filter})
  }

  render() {
    const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter))
    return (
      <>
        <h1>Phonebook</h1>
        <PhonebookForm onAddContact={this.onAddContact} />
        <h2>Contacts</h2>
        {this.state.contacts.length >1 && (
          <Filter value={this.state.filter} onChangeFilter={this.onChangeFilter} /> 
        )}
        <ContactList
          contacts={filteredContacts}
          onRemoveContact={this.onRemoveContact}
        />
      </>
    )
  }
}

export default App
