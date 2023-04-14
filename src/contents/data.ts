//쇼츠 데이터

export interface DataType {
  id: string;
  title: string;
  tag: string[];
  url: string;
  image: string;
}

const hotList: DataType[] = [
  {
    id: "$h_1",
    title: "사계 - 태연",
    tag: ["태연", "비긴어게인"],
    url: "https://youtu.be/0-63sH6EdAk",
    image:
      "https://i.ytimg.com/vi/0-63sH6EdAk/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBEW04s4vNQ39jQmIrLQsTN2g1xvA",
  },
  {
    id: "$h_2",
    title: "I HAVE IVE",
    tag: ["아이브", "IVE", "IAMchallenge", "아이엠챌린지", "아이해브아이브"],
    url: "https://youtu.be/XcGNgxZyCpA",
    image:
      "https://i.ytimg.com/vi/XcGNgxZyCpA/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLCXIAmOCg9kBpj5L33HCtFafVRp4A",
  },
  {
    id: "$h_3",
    title: "(visual focused) 스튜디오춤 아이브",
    tag: ["아이브", "IVE", "IAM", "STUDIOCHOOM"],
    url: "https://youtu.be/wWA0lDbuxZs",
    image:
      "https://i.ytimg.com/vi/wWA0lDbuxZs/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLBEAXEuxRhL-M9IADlIJCRwx2I7jA",
  },
  {
    id: "$h_4",
    title: "붉게 타버려진 지수와 영지",
    tag: ["지수", "영지", "지수꽃", "JISOO_FLOWER", "BLACKPINK"],
    url: "https://youtu.be/klbdGv5Bz3U",
    image:
      "https://i.ytimg.com/vi/klbdGv5Bz3U/hq720.jpg?sqp=-oaymwEYCJUDENAFSFryq4qpAwoIARUAAIhC0AEB&rs=AOn4CLBwcKnSCM8sc91tQD5tQFbSklUf9A",
  },
  {
    id: "$h_5",
    title: "권진아 Ditto 1분",
    tag: ["권진아", "Ditto", "뉴진스"],
    url: "https://youtu.be/Ydln6PPibQM",
    image:
      "https://i.ytimg.com/vi/Ydln6PPibQM/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLA4UnOu6C0HEYqPdB1vbZyNUlNYpw",
  },
  {
    id: "$h_6",
    title: "Jay Park - Yesterday",
    tag: ["박재범", "yesterday"],
    url: "https://youtu.be/J_DlUXX2NrI",
    image:
      "https://i.ytimg.com/vi/J_DlUXX2NrI/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLCYSKTzLfca91vyLzxdKcjBjlD8-w",
  },
  {
    id: "$h_7",
    title: "유재석 잡는 레이",
    tag: ["런닝맨", "유재석", "아이브", "레이"],
    url: "https://youtu.be/n1IhcLD1D08",
    image:
      "https://i.ytimg.com/vi/n1IhcLD1D08/oar2.jpg?sqp=-oaymwEVCNAFENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLBdgokdPgDG0au1qAV-_d3Rv-muvA",
  },
  {
    id: "$h_8",
    title: "NCT Dream Goated 챌린지",
    tag: ["NCTDream", "GOATED"],
    url: "https://youtu.be/uAIokJ0kO_E",
    image:
      "https://i.ytimg.com/vi/uAIokJ0kO_E/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLB94yoosWafAFQHu7grRACOwh6z_A",
  },
  {
    id: "$h_9",
    title: "사직서 쓸 때도 포스가 느껴지는 박연진",
    tag: ["더글로리", "박연진"],
    url: "https://youtu.be/-nQibZP_AMs",
    image:
      "https://i.ytimg.com/vi/-nQibZP_AMs/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLBhiCCqyr4XWb_YkKRoIFOD65w5Tg",
  },
  {
    id: "$h_10",
    title: "게스트가 남의 방송 마무리하게 된 상황",
    tag: ["BTS", "진", "차쥐뿔", "영지"],
    url: "https://youtu.be/37p0d5zNM2Q",
    image:
      "https://i.ytimg.com/vi/37p0d5zNM2Q/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLABDLeyGNQri_HYjOTQL0kilDn9Fw",
  },
];

const popularList: DataType[] = [
  {
    id: "$p_1",
    title: "허윤진 자작곡 'Raise y_our glass'",
    tag: ["르세라핌", "허윤진", "자작곡"],
    url: "https://youtu.be/Il6GrMjW274",
    image:
      "https://i.ytimg.com/vi/Il6GrMjW274/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLA5EgGO1SSJkXVmvlAEEiOja2Nl5w",
  },
  {
    id: "$p_2",
    title: "비행기 다이빙 씬 직접 소화한 장원영",
    tag: ["장원영", "아이브", "아이엠", "문명특급"],
    url: "https://youtu.be/idUeoxEciG8",
    image:
      "https://i.ytimg.com/vi/idUeoxEciG8/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLC-A8Wwh--M1BC2PRRvdPLHY9hPLQ",
  },
  {
    id: "$p_3",
    title: "기타치며 노래부르는 미연",
    tag: ["아이들미연", "기타"],
    url: "https://youtu.be/8vaeEDqTtSI",
    image:
      "https://i.ytimg.com/vi/8vaeEDqTtSI/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLDHOQlENYw27F2LT3yJeGRrFVF4Ug",
  },
  {
    id: "$p_4",
    title: "Anti-Hero(Taylor Swift) - 수지",
    tag: ["수지", "조현아의목요일밤", "테일러스위프트", "AntiHero"],
    url: "https://youtu.be/2f-7Qhe3RAg",
    image:
      "https://i.ytimg.com/vi/2f-7Qhe3RAg/oar2.jpg?sqp=-oaymwEVCIoDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLCasXg4kja4sMf5b_Kj_Zlp05CDlA",
  },
  {
    id: "$p_5",
    title: "[뉴진스]역할에 충실한 팜팀장님",
    tag: ["뉴진스", "하니", "민지", "혜인"],
    url: "https://youtu.be/TgXbs0zbvYk",
    image:
      "https://i.ytimg.com/vi/TgXbs0zbvYk/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLBO6-DD7n20YJ5zaElIEwSRozB-sg",
  },
  {
    id: "$p_6",
    title: "That's my life is 아름다운 갤럭시✨",
    tag: ["IVE", "IVE_IAM", "60secCHOOM", "스튜디오춤"],
    url: "https://youtu.be/YS-hTR_72Bw",
    image:
      "https://i.ytimg.com/vi/YS-hTR_72Bw/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLBq0iQHIW0uAQpM1ogMNMOZizutCQ",
  },
  {
    id: "$p_7",
    title: "[G맘대로아이들]조미연 갑분싸",
    tag: ["아이들", "미연", "G맘대로아이들"],
    url: "https://youtu.be/axezh-AsgoY",
    image:
      "https://i.ytimg.com/vi/axezh-AsgoY/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLByyoZkSS2xbWbUHShXoHpanB9Onw",
  },
  {
    id: "$p_8",
    title: "음치한테 노래 시키면 생기는 일",
    tag: ["앨런"],
    url: "https://youtu.be/Z1r3B0cgP0s",
    image:
      "https://i.ytimg.com/vi/Z1r3B0cgP0s/hq720_2.jpg?sqp=-oaymwEYCJYDENAFSFryq4qpAwoIARUAAIhC0AEB&rs=AOn4CLD5RirvaUPdIH6bkvVufpB8LomQlg",
  },
  {
    id: "$p_9",
    title: "칭얼대면 산타할어버지가 선물 안 주신대!",
    tag: ["보아", "BoA", "화사", "ZIPChallenge"],
    url: "https://youtu.be/ATC3S1GKO3o",
    image:
      "https://i.ytimg.com/vi/ATC3S1GKO3o/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLAHZeCPkw-teNp7hmiquO6Yv6pj6A",
  },
  {
    id: "$p_10",
    title: "맴버들 앞에서만 나오는 카리나 현실 말투",
    tag: ["에스파의싱크로드", "카리나", "윈터"],
    url: "https://youtu.be/pB4HQ7pAZwk",
    image:
      "https://i.ytimg.com/vi/pB4HQ7pAZwk/oar2.jpg?sqp=-oaymwEVCJUDENAFSFryq4qpAwcIARUAAIhC&rs=AOn4CLASn7Qnij83m6kALBNWp-kBHBWAoA",
  },
];

export { hotList, popularList };
