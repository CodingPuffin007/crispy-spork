import React from "react";
import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../Components/shared/card/Card";
import Button from "../../Components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077FF",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  const history = useHistory();

  function startRegister(){
    history.push('/register')
    console.log('button pressed....')
  }


  return (
    <div className={styles.cardWrapper}>
      <Card title="✌️ Welcome to Helium!">
        <p className={styles.text}>
          Welcome to Helium We’re working hard to get Helium ready for everyone!
          While we wrap up the finishing youches, we’re adding people gradually
          to make sure nothing breaks
        </p>
        <div>
          <Button text="Get your username" onClick={startRegister}/>
        </div>
        <div className={styles.signInWrapper}>
          <span className={styles.hasInvite}>Have and invite text?</span>
          <Link to="/login" style={signInLinkStyle}>
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
