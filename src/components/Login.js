import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <h1> Login </h1>
      <input type="email" placeholder="E-mail"  className={styles.inputContainer}/>
      <input type="password" placeholder="Senha" className={styles.inputContainer}/>

      <button className={styles.buttonContainer}>Login</button>
    </div>
  );
}

export default Login;
