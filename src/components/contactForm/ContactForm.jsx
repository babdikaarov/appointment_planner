// import React from "react";
import { useForm, Controller } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const ContactForm = ({ addContact }) => {
  const { handleSubmit, setValue, control, reset } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      date: "",
    },
  });

  const handlePhoneNumberChange = (input) => {
    const formattedInput = formatPhoneNumber(input);
    setValue("phone", formattedInput, { shouldValidate: true });
  };

  const formatPhoneNumber = (input) => {
    const countryCode = input.slice(0, 3);
    const numbers = input.slice(3);

    let formattedInput = countryCode;

    for (let i = 0; i < numbers.length; i++) {
      if (i === 0 || i === 3 || i === 5) {
        formattedInput += "-";
      }
      formattedInput += numbers[i];
    }

    return formattedInput;
  };
  const getCurrentDateFormatted = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const onSubmit = (data) => {
    const date = getCurrentDateFormatted();
    data.date = date;
    addContact(data);
    reset();
  };

  return (
    <section className="form">
      <h2>Add Contact</h2>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: true,
            minLength: 20,
            pattern: /^[a-zA-Z\s]*$/,
          }}
          render={({ field }) => (
            <input {...field} placeholder="Name" defaultValue="" />
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              type="text"
              {...field}
              onChange={(e) =>
                handlePhoneNumberChange(e.target.value.replace(/[^\d]/g, ""))
              }
              placeholder="(XX) - XXX - XXXX"
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} placeholder="Email" />}
        />
        <button type="submit">Add contact</button>
      </form>
    </section>
  );
};
export default ContactForm;
