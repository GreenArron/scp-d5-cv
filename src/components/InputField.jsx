import { useState } from "react";
import "./InputField.css";

function Input({ placeholder, label, id, onChange, type = "text" }) {
  function handleChange(e) {
    if (!!onChange) {
      onChange(e.target.value);
    }
  }

  switch (type) {
    case "textarea":
      return (
        <>
          <label htmlFor={id}>{label}</label>
          <textarea
            name={id}
            id={id}
            placeholder={placeholder}
            onChange={handleChange}
            rows="4"
          />
        </>
      );

    default:
      return (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            name={id}
            id={id}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </>
      );
  }
}

function ListInput({ label, id, placeholder, items, onAddItem }) {
  const [currentInput, setCurrentInput] = useState("");
  const [date, setDate] = useState("");
  function handleChange(e) {
    setCurrentInput(e.target.value);
  }
  function handleDateChange(e) {
    setDate(e.target.value);
  }
  function handleAdd() {
    if (currentInput.trim() !== "") {
      items = [
        ...items,
        { label: currentInput, id: crypto.randomUUID(), date },
      ];
      setCurrentInput("");
      onAddItem(items);
    }
  }
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        value={currentInput}
      />
      <input
        type="text"
        name="date"
        placeholder="2012 May 23"
        onChange={handleDateChange}
        value={date}
      />
      <div id={`${id}collection`}>
        {items.map(({ label, date, id }) => {
          return (
            <div key={id}>
              {label} -- {date}
            </div>
          );
        })}
      </div>
      <button className="addtolist" onClick={handleAdd}>
        ➕
      </button>
    </>
  );
}

function Card({ children }) {
  return <div className="inputcard">{children}</div>;
}

export default function InputField({
  onNameChange,
  onDobChange,
  onBioChange,
  educations,
  onEducationsChange,
  crimes,
  onCrimesChange,
  onPhonenumberChange,
  onEmailChange,
  onAddressChange,
}) {
  /*
    name,
  dob,
  bio,
  educations,
  crimes,
  phonenumber,
  email,
  address,
    */
  return (
    <div className="inputfield">
      <Card>
        <Input
          placeholder="Jack..."
          label="NAME"
          id="namefield"
          onChange={onNameChange}
        />
        <Input
          placeholder="May 21, 1999..."
          label="BIRTHDAY"
          id="dobfield"
          onChange={onDobChange}
        />
        <Input
          placeholder="One upon a time I went to the store..."
          label="BIO"
          id="biofield"
          type="textarea"
          onChange={onBioChange}
        />
      </Card>
      <Card>
        <Input
          placeholder="+1-123-456789"
          label="PHONENUMBER"
          id="phonenumber"
          onChange={onPhonenumberChange}
        />
        <Input
          placeholder="JackCrawford@fake.com"
          label="EMAIL"
          id="email"
          onChange={onEmailChange}
        />
        <Input
          placeholder="308 Negra Arroyo Lane, Albuquerque, New Mexico..."
          label="ADDRESS"
          id="address"
          onChange={onAddressChange}
        />
      </Card>
      <Card>
        <ListInput
          placeholder="College name, Course..."
          id="educations"
          label="EDUCATION"
          items={educations}
          onAddItem={onEducationsChange}
        />
      </Card>
      <Card>
        <ListInput
          placeholder="Felony, First class offense..."
          id="crimes"
          label="CRIME"
          items={crimes}
          onAddItem={onCrimesChange}
        />
      </Card>
    </div>
  );
}
