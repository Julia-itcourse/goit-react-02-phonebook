import React, { Component } from "react"
import styles from "./PhonebookForm.module.css"
import { v4 as uuidv4 } from "uuid"

//Форма для добавления контактов
class PhonebookForm extends Component {
  state = {
    name: "",
    number: "",
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    }

    this.props.onAddContact(contact)
    this.setState({ name: "", number: "" })
  }

  render() {
    return (
      <>
        {
          <form onSubmit={this.handleSubmit} className={styles.form__group}>
            <input
              className={styles.form__input}
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
              required
            />

            <input
              className={styles.form__input}
              name="number"
              type="text"
              value={this.state.number}
              onChange={this.handleChange}
              placeholder="Phone number"
              required
            />

            <button className={styles.button} type="submit">
              Add contact
            </button>
          </form>
        }
      </>
    )
  }
}

export default PhonebookForm
