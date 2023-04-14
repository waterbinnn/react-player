import classNames from "classnames/bind";
import styles from "./Shorts.module.scss";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export const Shorts = () => {
  const [isWindow, setIsWindow] = useState<boolean>(false);
  useEffect(() => {
    setIsWindow(true);
  }, []);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const router = useRouter();

  /**
   * 필요한 ui
   * - 플레이어
   * - 플레이어 컨트롤러 (mute, pause)
   * - 사이드 버튼
   *  - 좋아요/싫어요 버튼, 카운트 되게
   *  - 공유하기 버튼
   * - 뒤로가기 버튼
   */

  /**
   * section > div > react player 구조로 마크업
   * 플레이어 임포트 
   * mute
   * 기본 컨트롤러 없애고 커스텀
   */


  return (
    <>
      <div className={cx("container")}>
        <section>
          <h2 className="visually-hidden">쇼츠</h2>
          <button
            className={cx("btn-back")}
            onClick={() => router.back()}
          ></button>

        </section>
      </div>
    </>
  );
};
