import { DataType, hotList, popularList } from "@/contents/data";
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ShortsList.module.scss";

const cx = classNames.bind(styles);

export const ShortsList = () => {
  return (
    <>
      <ul className={cx("player-wrap")}>
        {hotList.map((item: DataType) => (
          <li key={item.id} className={cx("list")}>
            {/* 클릭시 링크이동 */}
            <div
              style={{
                backgroundImage: `url("${item.image}")`,
              }}
              className={cx("thumbnail")}
            ></div>
            <strong>{item.title}</strong>
          </li>
        ))}
      </ul>
    </>
  );
};
