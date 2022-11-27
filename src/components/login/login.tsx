import { component$, useStore, useStylesScoped$, $ } from "@builder.io/qwik";
import styles from "./login.css?inline";
import { Link } from "@builder.io/qwik-city";
import { logInWithEmailAndPassword, signInWithGoogle } from "~/firebase";

export default component$(() => {
  useStylesScoped$(styles);

  const state = useStore({
    email: "",
    password: "",
  });

  const setEmail = $((value: string) => {
    state.email = value;
  });
  const setPassword = $((value: string) => {
    state.password = value;
  });

  const authWithEmail = $(async () => {
    await logInWithEmailAndPassword(state.email, state.password);
  });

  const googleSignIn = $(() => signInWithGoogle());

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={state.email}
          onChange$={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={state.password}
          onChange$={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="login__btn" onClick$={() => authWithEmail}>
          Login
        </button>
        <button
          className="login__btn login__google"
          onClick$={() => googleSignIn}
        >
          Login with Google
        </button>
        {/*         <div> TODO: Implement later
          <Link href="/reset">Forgot Password</Link>
        </div> */}
        <div>
          Don't have an account? <Link href="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
});