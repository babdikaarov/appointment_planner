import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, {
  ROUTES,
  mockAppointment,
  mockContacts,
} from "./components/root/Root";
import AppointmentsPage from "./containers/appointmentsPage/AppointmentsPage";
import ContactsPage from "./containers/contactsPage/ContactsPage";
import ContactForm from "./components/contactForm/ContactForm";
import AppointmentForm from "./components/appointmentForm/AppointmentForm";

function App() {
  const [contacts, setContacts] = useState(mockContacts);
  const [appointments, setAppointments] = useState(mockAppointment);

  function addContact(newContact) {
    setContacts((prev) => [newContact, ...prev]);
  }

  function addAppointment(newAppointment) {
    setAppointments((prev) => [newAppointment, ...prev]);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to="/add-contact" replace />} />
        <Route
          path={ROUTES.ADD_CONTACT}
          element={<ContactForm addContact={addContact} />}
        />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contacts={contacts} />}
        />
        <Route
          path={ROUTES.ADD_APPOINTMENT}
          element={
            <AppointmentForm
              contacts={contacts}
              addAppointment={addAppointment}
            />
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage contacts={contacts} appointments={appointments} />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
