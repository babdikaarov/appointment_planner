/* eslint-disable react/prop-types */

export const ContactList = ({ contacts }) => {
  return (
    <table className="table-container">
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Aquired</th>
      </tr>
      {contacts.map((contact, i) => (
        <tr key={i + contact.name}>
          <td data-cell="name">{contact.name}</td>
          <td data-cell="phone">{contact.phone}</td>
          <td data-cell="email">{contact.email}</td>
          <td data-cell="saved on">{contact.date}</td>
        </tr>
      ))}
    </table>
  );
};

export default ContactList;
