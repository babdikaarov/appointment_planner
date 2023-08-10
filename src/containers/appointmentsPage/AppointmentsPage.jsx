import AppointmentList from "../../components/appointmentList/AppointmentList";
// eslint-disable-next-line react/prop-types
const AppointmentsPage = ({ appointments }) => {
  return (
    <section className="list">
      <h2>Appointment</h2>
      <hr />
      <AppointmentList appointments={appointments} />
    </section>
  );
};

export default AppointmentsPage;
