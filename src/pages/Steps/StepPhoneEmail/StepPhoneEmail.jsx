import React, { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import styles from './StepEmail.module.css'


const phoneEmailMap = {
  phone: Phone,
  email: Email
};

const StepPhoneEmail = ({ onNext }) => {
  function onNext() {}

  const [type, setType] = useState("phone");

  const Component = phoneEmailMap[type];

  return (
    <>
      <div className={styles.cardWrapper}>
        <div className={styles.buttonWrap}>
          <button onClick={() => setType("phone")}>Phone</button>
          <button onClick={() => setType("email")}>Email</button>
        </div>
        <Component onNext={onNext} />
      </div>
    </>
  );
};

export default StepPhoneEmail;
