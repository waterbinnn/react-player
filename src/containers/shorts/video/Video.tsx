import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import {
  ArrowBack,
  InsertComment,
  MoreVert,
  Share,
  ThumbDown,
  ThumbUp,
} from "@material-ui/icons";

import { Avatar } from "@material-ui/core";
import { DataType } from "@/contents/data";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

interface VideoProps {
  data: DataType;
}

export const Video = ({ data }: VideoProps) => {
  const [isWindow, setIsWindow] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    setIsWindow(true);
  }, []);

  return (
    <div className={cx("video-wrap")}>
      <ReactPlayer
        className={cx("video-player")}
        url={`${data.url}`}
        width={"450px"}
        height={"90vh"}
      />
      <div className={cx("shorts-container")}>
        <div className={cx("shorts-video-top")}>
          <div className={cx("shorts-video-top-icon")}>
            <ArrowBack />
          </div>
        </div>
        <div className={cx("shorts-video-side")}>
          <div className={cx("shorts-video-side-icon")}>
            <ThumbUp />
            <p>200</p>
          </div>
          <div className={cx("shorts-video-side-icon")}>
            <ThumbDown />
            <p>0</p>
          </div>
          <div className={cx("shorts-video-side-icon")}>
            <InsertComment />
            <p>10</p>
          </div>
          <div className={cx("shorts-video-side-icon")}>
            <Share />
          </div>
        </div>
        <div className={cx("shorts-bottom")}>
          <div className={cx("shorts-details")}>
            <Avatar />
            <p className={cx("channel")}>waterbin</p>
            <button className={cx("btn-subscribe")}>subscribe</button>
          </div>
          <div className={cx("shorts-desc")}>
            <p className={cx("desc")}>{data.title}</p>
            <div className={cx("tag-wrap")}>
              {data.tag.map((item, index) => (
                <p className={cx("tag")} key={index}>
                  #{item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
