import { DataType } from "@/contents/data";
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ShortsList.module.scss";
import { useRouter } from "next/router";
import path from "path";

const cx = classNames.bind(styles);

interface ShortsListProps {
  list: DataType[];
}

export const ShortsList = (list: ShortsListProps) => {
  const router = useRouter();

  const handleMoveToUrl = (url: string) => {
    router.push(`shorts`);
  };

  return (
    <>
      <ul className={cx("player-wrap")}>
        {list.list.map((item: DataType) => (
          <li
            key={item.id}
            className={cx("list")}
            onClick={() => handleMoveToUrl(item.url)}
          >
            <div
              style={{
                backgroundImage: `url("${item.image}")`,
              }}
              className={cx("thumbnail")}
            ></div>
            <strong className={cx("title")}>{item.title}</strong>
          </li>
        ))}
      </ul>
    </>
  );
};
