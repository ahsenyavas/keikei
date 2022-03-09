import Footer from "../footer";
import Navbar from "../navbar";
import Styles from "./index.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <div className={Styles.root}>
        <Navbar />
        <div className={Styles.mainContainer}>
          <main className={Styles.main}>{children}</main>
        </div>

        <Footer />
      </div>
    </>
  );
}
