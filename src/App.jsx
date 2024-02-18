import { useState } from "react";
import "./App.css";
import DocPreview from "./components/DocPreview";
import InputField from "./components/InputField";

let nextId = 0;

function App() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [bio, setBio] = useState("");
  const [educations, setEducations] = useState([]);
  // {label, date, id}
  const [crimes, setCrimes] = useState([]);
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  return (
    <>
      <InputField
        onNameChange={setName}
        onDobChange={setDob}
        onBioChange={setBio}
        educations={educations}
        onEducationsChange={setEducations}
        onPhonenumberChange={setPhonenumber}
        crimes={crimes}
        onCrimesChange={setCrimes}
        onEmailChange={setEmail}
        onAddressChange={setAddress}
      />
      <div className="preview-container">
        <DocPreview
          name={name}
          dob={dob}
          bio={bio}
          educations={educations}
          crimes={crimes}
          phonenumber={phonenumber}
          email={email}
          address={address}
        />
      </div>
    </>
  );
}

export default App;
