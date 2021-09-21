import "./App.css";
import contactsJSON from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contact, setContacts] = useState(contactsJSON.slice(0, 5));

  console.log(contact);

  const addContact = () => {
    const index = Math.floor(Math.random() * (contactsJSON.length - 1));
    const newRandom = contactsJSON[index];
    contactsJSON.splice(index, 1);
    setContacts([newRandom, ...contact]);
  };

  const sortName = () => {
    const nameSorted = contact.sort(function (contact1, contact2) {
      return contact1.name > contact2.name ? 1 : -1;
    });

    setContacts([...nameSorted]);
  };

  const sortPop = () => {
    const popSorted = contact.sort(function (contact1, contact2) {
      return contact1.popularity < contact2.popularity ? 1 : -1;
    });
    setContacts([...popSorted]);
  };

  const deleteContact = (id) => {
    setContacts(contact.filter((object) => object.id !== id));
  };

  return (
    <>
      <div className="App">
        <h1>IRON CONTACTS</h1>
        <button onClick={sortName}>Sort By Name</button>
        <button onClick={sortPop}>Sort By Popularity</button>
        <button onClick={addContact}>Add Random Contact</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar Winner</th>
            <th>Emmy Winner</th>
            <th>Actions</th>
          </tr>
          {contact.map((person) => {
            return (
              <>
                <tr>
                  <th>
                    <img
                      src={person.pictureUrl}
                      alt="persons face"
                      height="250px"
                    />
                  </th>
                  <th>{person.name}</th>
                  <th>{person.popularity.toFixed(2)}</th>
                  <th>{person.wonOscar ? "🏆" : ""}</th>
                  <th>{person.wonEmmy ? "🏆" : ""}</th>
                  <th>
                    <button onClick={() => deleteContact(person.id)}>
                      Remove
                    </button>
                  </th>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default App;
