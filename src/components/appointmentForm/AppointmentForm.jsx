import ContactPicker from "../contactPicker/ContactPicker";
import { useForm } from "react-hook-form";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

// eslint-disable-next-line react/prop-types
const AppointmentForm = ({ contacts, addAppointment }) => {
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    addAppointment(data);
    reset();
  }
  return (
    <section className="form">
      <h2>Add Appointment</h2>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} type="text" placeholder="Title" />
        <input
          {...register("date")}
          type="date"
          placeholder="dd/mm/yy"
          min={getTodayString()}
        />
        <input
          {...register("time")}
          type="time"
          placeholder="mm:hh  - 24hr format"
        />
        <select>
          <option {...register("contact")}>Select contact</option>
          <ContactPicker contacts={contacts} />
        </select>
        <button type="submit">Add appointment</button>
      </form>
    </section>
  );
};

export default AppointmentForm;
