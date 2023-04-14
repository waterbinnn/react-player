import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

export const Nav = () => {
  const router = useRouter();

  const handleRoute = (type: string): void => {
    if (type === "main") {
      router.push("/");
    } else if (type === "shorts") {
      router.push("/shorts");
    }
  };

  return (
    <nav className={cx("nav")}>
      <ul>
        <li>
          <button
            type="button"
            className={cx("btn-nav")}
            onClick={() => handleRoute("main")}
          >
            🏠
          </button>
        </li>
        <li>
          <button
            type="button"
            className={cx("btn-nav")}
            onClick={() => handleRoute("shorts")}
          >
            ⚡️
          </button>
        </li>
      </ul>
    </nav>
  );
};
