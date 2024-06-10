import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold">Login</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p style={{ color: "red", border: "1px solid red", borderRadius: "5px", padding: "5px" }}>
        Belum punya akun? registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
