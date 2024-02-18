import "./DocPreview.css";
import scpLogo from "/scpf-emblem.svg";

function DocField({ name, value }) {
  return (
    <div className="docfield">
      <span className="docname">{name}: </span>
      <span className="docvalue">{value}</span>
    </div>
  );
}

export default function DocPreview({
  name,
  dob,
  bio,
  educations,
  crimes,
  phonenumber,
  email,
  address,
}) {
  if (educations === undefined) {
    educations = [];
  }
  if (crimes === undefined) {
    crimes = [];
  }

  return (
    <section className="doc-preview">
      <div className="header">
        <img src={scpLogo} alt="SCP Foundation Logo" className="doc-logo" />
        <h2>D CLASS APPLICATION FORM</h2>
      </div>
      <DocField name="Name" value={name} /> <DocField name="DOB" value={dob} />
      <p>{bio}</p>
      <h3>Education</h3>
      <ul>
        {educations.map((education) => {
          return (
            <li aria-label="degree">
              <span>{education}</span>
              <small aria-label="acquired at date"></small>
            </li>
          );
        })}
      </ul>
      <h3>Crime Background</h3>
      <ul>
        {crimes.map(({ crime, date }) => {
          return (
            <li aria-label="crime">
              <span>{crime}</span>
              <small aria-label="sentenced at date"> {date.toString()}</small>
            </li>
          );
        })}
      </ul>
      <h3>Contact Info</h3>
      <span>📞 {phonenumber}</span>
      <span>📧 {email}</span>
      <div>
        <div id="docfield-address">Address:</div>
        <p>{address}</p>
      </div>
    </section>
  );
}
