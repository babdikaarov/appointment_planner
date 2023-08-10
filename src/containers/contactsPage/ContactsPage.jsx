import { ContactList } from "../../components/contactList/ContactList";

// eslint-disable-next-line react/prop-types
const ContactsPage = ({ contacts }) => {
  return (
    <section className="list">
      <h2>Contacts</h2>
      <hr />
      <ContactList contacts={contacts} />
    </section>
  );
};

export default ContactsPage;
