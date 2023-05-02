import { ShortsList } from "./shortsList";
import classNames from "classnames/bind";
import styles from "./Main.module.scss";
import { DataType } from "@/contents/data";

const cx = classNames.bind(styles);

interface MainProps {
  popularList: DataType[];
  hotList: DataType[];
}

export const Main = ({ popularList, hotList }: MainProps) => {
  return (
    <>
      <div className={cx("container")}>
        <h1 className={cx("title")}>🎬</h1>
        <section>
          <h2 className="visually-hidden">main</h2>
          <section className={cx("list-wrap")}>
            <h2>⚡️ 요즘 뜨는</h2>
            <ShortsList list={popularList} />
          </section>
          <section className={cx("list-wrap")}>
            <h2>🔥 지금 인기 있는</h2>
            <ShortsList list={hotList} />
          </section>
        </section>
      </div>
    </>
  );
};
