/* eslint-disable react/prop-types */
const AppointmentList = ({ appointments }) => {
  /*  const test = [
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
  ]; */

  return (
    <table className="table-container">
      <tr>
        <th>Title</th>
        <th>Contact</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
      {appointments.map((apoint, i) => (
        <tr key={apoint.title + i}>
          <td data-cell="title">{apoint.title}</td>
          <td data-cell="contact">{apoint.contact}</td>
          <td data-cell="date">{apoint.date}</td>
          <td data-cell="time">{apoint.time}</td>
        </tr>
      ))}
    </table>
  );
};
export default AppointmentList;
