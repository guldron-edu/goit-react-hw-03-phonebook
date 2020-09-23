import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import InputForm from "./InputForm/InputForm";
import Filter from "./Filter/Filter";
import Contacts from "./Contacts/Contacts";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const localStorageContacts = localStorage.getItem("contacts");

    if (localStorageContacts) {
      this.setState({
        contacts: JSON.parse(localStorageContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = (name, number) => {
    const tempContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.checkExistingName(name)
      ? alert(name + ` is already in contacts`)
      : this.pushToContacts(tempContact);
  };

  pushToContacts = (contact) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  inputFilterTracking = (ev) => {
    this.setState({ filter: ev.target.value });
  };

  filterContacts = () => {
    return this.state.contacts.filter((contact) =>
      (contact.name.toLowerCase() + contact.number.toLowerCase()).includes(
        this.state.filter.toLowerCase()
      )
    );
  };

  checkExistingName = (targetName) => {
    return this.state.contacts
      .map((contact) => contact.name.toLowerCase().trim())
      .includes(targetName.toLowerCase().trim());
  };

  deleteContact = (targetId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== targetId),
      };
    });
  };

  render() {
    const visibleContacts = this.filterContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <InputForm addNewContact={this.addNewContact} />

        {this.state.contacts.length > 0 && <h2>Contacts</h2>}
        {this.state.contacts.length > 1 && (
          <Filter inputTracking={this.inputFilterTracking} />
        )}
        {this.state.contacts.length > 0 && (
          <Contacts
            visibleContacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        )}
      </>
    );
  }
}
