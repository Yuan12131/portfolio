"use client";
import React, { useState } from "react";
import styles from "@/styles/project.module.scss";
import Link from "next/link";
import Project1 from "./Project1";
import Project2 from "./Project2";
import "react-notion-x/src/styles.css";
import ReactNotion from "@/components/Notion";

interface ProjectProps {
  setShowNotion: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: (pageId: string) => void;
}

const Project: React.FC<ProjectProps> = ({ setShowNotion, openModal }) => {

  const handleShowNotion = (pageId:string) => {
    setShowNotion(true);
    openModal(pageId);
  };

  return (
    <div id="project">
      <div className={styles.main}>
        <div>PROJECT</div>
        <div>
          <div>
            01 TOUI
            <p>2024.02.21-2024.03.10 | 개인프로젝트</p>
          </div>
          <div>
            <div>
              <Project1 />
            </div>
            <div>
              <div>
                <Link href={"https://toui.yuanrecord.click/"}>
                  <span>URL</span>
                  <div></div>
                </Link>
                <Link href={"https://github.com/Yuan12131/toi"}>
                  <span>Github</span>
                  <div></div>
                </Link>
                <Link
                  href={
                    "https://drive.google.com/file/d/1zc0DEwl_1ncTJUh8jCmUHPUafAReBo-h/view"
                  }
                >
                  <span>Video</span>
                  <div></div>
                </Link>
              </div>
              <div>
                <span
                  style={{
                    fontWeight: "900",
                    backgroundColor: "#F1F6F9",
                    borderRadius: "5px",
                  }}
                >
                  {" "}
                  <span style={{ color: "#27374D" }}>
                    &nbsp;사용자가 날짜, 여행지, 주제를 입력하면 AI가 여행
                    코스를 계획해주는 웹 사이트{" "}
                  </span>
                </span>
                &nbsp;입니다. 여행 계획을 세우는 것이 번거롭거나 시간이 부족한
                사람들을 위한 솔루션으로, &quot;AI가 여행 계획을 세워주면
                간편하겠다는 생각&quot;과 &quot;GPT를 사용하여 여행 코스를
                짜보았던 경험&quot;을 결합하여 개발하였습니다.<br></br>
                <br></br>여러 <span style={{ color: "#4682A9" }}>Rest API</span>
                를 활용하며 서버를 따로 구축하지 않고 API 라우팅으로
                처리함으로써 <span style={{ color: "#4682A9" }}>Next.js</span>의
                장점을 직접 경험할 수 있었습니다. 또한, 사용자 편의성을 높이기
                위해{" "}
                <span style={{ color: "#4682A9" }}>
                  GooglePlacesAutocomplete, React-Calendar
                </span>{" "}
                등의 라이브러리를 적극적으로 활용하였으며, 렌더링 요소들을
                컴포넌트화하여 <span style={{ color: "#4682A9" }}>React</span>를
                더욱 효율적으로 사용할 수 있었습니다.
              </div>
              <div onClick={() => handleShowNotion("940bda2d3591490d891df569d92b7489")} style={{ cursor: "pointer" }}>
                👉&nbsp;&nbsp; 이어서 보기
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            02 MUMUS
            <p>2024.01.29-2024.02.16 | 개인프로젝트</p>
          </div>
          <div>
            <div>
              <Project2 />
            </div>
            <div>
              <div>
                <Link href={"https://mumu.yuanrecord.click/"}>
                  <span>URL</span>
                  <div></div>
                </Link>
                <Link href={"https://github.com/Yuan12131/mumaps"}>
                  <span>Github</span>
                  <div></div>
                </Link>
                <Link
                  href={
                    "https://drive.google.com/file/d/1HoMRH05_l9aljCrJjCluEJ0ASd7DsTgo/view?usp=drive_link"
                  }
                >
                  <span>Video</span>
                  <div></div>
                </Link>
              </div>
              <div>
                <span
                  style={{
                    fontWeight: "900",
                    backgroundColor: "#F1F6F9",
                    borderRadius: "5px",
                  }}
                >
                  {" "}
                  <span style={{ color: "#27374D" }}>
                    &nbsp;Spotify API를 활용한 음악 검색, 추천, 재생 웹 사이트{" "}
                  </span>
                  입니다. 
                </span>
                &nbsp;대부분 음악 추천 서비스 ‘드라이브 할 때 듣기 좋은 곡’처럼 추상적인 분위기로 곡을 추천해주는 것에 대한 아쉬움이 있어서 저의 취향에 맞게 &quot;음악의 오디오 특성을 활용한 음악 추천 서비스&quot;를 개발하게 되었습니다.<br></br>
                <br></br>여러 <span style={{ color: "#4682A9" }}>Rest API</span>
                를 활용하며 서버를 따로 구축하지 않고 API 라우팅으로
                처리함으로써 <span style={{ color: "#4682A9" }}>Next.js</span>의
                장점을 직접 경험할 수 있었습니다. 또한, 사용자 편의성을 높이기
                위해{" "}
                <span style={{ color: "#4682A9" }}>
                  GooglePlacesAutocomplete, React-Calendar
                </span>{" "}
                등의 라이브러리를 적극적으로 활용하였으며, 렌더링 요소들을
                컴포넌트화하여 <span style={{ color: "#4682A9" }}>React</span>를
                더욱 효율적으로 사용할 수 있었습니다.
              </div>
              <div onClick={() => handleShowNotion("3be5c96ce69940d1bb43561fca5cb6b3")} style={{ cursor: "pointer" }}>
                👉&nbsp;&nbsp; 이어서 보기
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Project;
