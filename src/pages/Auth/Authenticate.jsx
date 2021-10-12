import React, { useState } from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Authenticte = () => {
  function onNext() {
    setStep(step + 1);
  }

  const [step, setStep] = useState(1);

  const Step = steps[step];
  return(
      <Step onNext={onNext}/>
  )
};

export default Authenticte;