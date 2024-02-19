import { useState } from "react";

import "./InputField.css";
import printerIcon from "/printer.svg";

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
            rows="5"
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
  function handleRemove(id) {
    items = items.filter((item) => item.id !== id);
    onAddItem(items);
  }
  function handleAdd() {
    if (currentInput.trim() !== "") {
      items = [
        ...items,
        { label: currentInput, id: crypto.randomUUID(), date },
      ];
      setCurrentInput("");
      setDate("");
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
        placeholder="May 23, 2012"
        onChange={handleDateChange}
        value={date}
      />
      <div id={`${id}collection`}>
        {items.map(({ label, date, id }) => {
          return (
            <div key={id} className="list-item">
              <span>
                {label} -- {date}
              </span>
              <button onClick={() => handleRemove(id)} className="remove">
                ✖
              </button>
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
  function handlePrint() {
    window.print();
  }
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

      <button id="print" onClick={handlePrint}>
        <img src={printerIcon} alt="Printer Icon" aria-label="Print document" />
      </button>
    </div>
  );
}
