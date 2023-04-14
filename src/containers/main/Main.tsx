import { ShortsList } from "./shortsList";
import classNames from "classnames/bind";
import styles from "./Main.module.scss";

const cx = classNames.bind(styles);

export const Main = () => {
  return (
    <>
      <div className={cx("container")}>
        <section>
          <h2 className="visually-hidden">main</h2>
          <section>
            <h2>요즘 뜨는</h2>
            <ShortsList />
          </section>
          <section>
            <h2>지금 인기 있는</h2>
            <ShortsList />
          </section>
        </section>
      </div>
    </>
  );
};
