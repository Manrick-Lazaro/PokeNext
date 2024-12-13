import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/pokeball.png";
import styles from "../styles/navbar.module.css";

export function Navbar(): JSX.Element {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href={"/"}>
          <div className={styles.logo}>
            <Image
              width={"20"}
              height={"20"}
              alt="Logo do site"
              className="h-8 w-8 rounded-full"
              src={logo}
            />
            <h1>PokeNext</h1>
          </div>
        </Link>
        <div className="">
          <div className={styles.navbar_items}>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>Sobre</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
