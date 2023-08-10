/* eslint-disable react/prop-types */
const ContactPicker = ({ contacts }) => {
  return contacts.map((contact, i) => (
    <option value={contact.name} key={i}>
      {contact.name} ----- {contact.phone}
    </option>
  ));
};
export default ContactPicker;
