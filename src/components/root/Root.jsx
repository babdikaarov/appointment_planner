import { Outlet, NavLink } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components
export const ROUTES = {
  CONTACTS: "/contacts",
  APPOINTMENTS: "/appointments",
  ADD_CONTACT: "/add-contact",
  ADD_APPOINTMENT: "/add-appointment",
};

function Root() {
  return (
    <>
      <h1>Appointment Planner</h1>
      <nav>
        <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
        <NavLink to={ROUTES.APPOINTMENTS}>Appointments</NavLink>
        <NavLink to={ROUTES.ADD_CONTACT}>Add Contact</NavLink>
        <NavLink to={ROUTES.ADD_APPOINTMENT}>Add Appointment</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Root;

// eslint-disable-next-line react-refresh/only-export-components
export const mockAppointment = [
  {
    title: "Meeting 1",
    contact: "John Doe",
    date: "2023-08-10",
    time: "14:30",
  },
  {
    title: "Appointment 2",
    contact: "Jane Smith",
    date: "2023-08-11",
    time: "10:00",
  },
  {
    title: "Conference Call",
    contact: "Alex Johnson",
    date: "2023-08-12",
    time: "16:15",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const mockContacts = [
  {
    name: "John Doe",
    phone: "123-456-7890",
    email: "john@example.com",
    date: "2023-08-10",
  },
  {
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@example.com",
    date: "2023-08-11",
  },
  {
    name: "Alex Johnson",
    phone: "555-555-5555",
    email: "alex@example.com",
    date: "2023-08-12",
  },
  {
    name: "Alex Johnson",
    phone: "555-555-5555",
    email: "alex@example.com",
    date: "2023-08-12",
  },
  {
    name: "Alex Johnson",
    phone: "555-555-5555",
    email: "alex@example.com",
    date: "2023-08-12",
  },
];
