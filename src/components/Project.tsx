import React from "react";
import styles from "@/styles/project.module.scss";
import Link from "next/link";
import useSWR from "swr";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";

const Project = () => {
  const notion = new NotionAPI();
  const recordMap = notion.getPage("067dd719a912471ea9a3ac10710e7fdf");

  return (
    <div id="project">
      <div className={styles.main}>
        <div>PROJECT</div>
        <div>
          <div>
            01 TOUI
            <p>2024.02.21 - 2024.03.10 | 개인 프로젝트</p>
          </div>
          <div>
            <div></div>
            <div>
              <div>
                <Link href={"https://toui.yuanrecord.click/"}>
                  https://toui.yuanrecord.click/
                </Link>
              </div>
              <div>
                여행 계획을 세우기 번거롭거나 시간이 없는 사람들에게 “AI가
                계획을 세워주면 어떨까”하는 생각에 “이전에 GPT와 대화 할 때 여행
                계획을 세워주었던 경험”을 더해 개발 사용자가 날짜, 여행 갈 국가
                또는 도시, 주제를 입력하면 이를 바탕으로 AI가 여행 코스를
                계획해주는 웹 사이트
              </div>
              <div>
                주요 기능
                <br />
                날짜, 여행장소, 주제를 기반으로 여행 계획 세워주기
                <br />
                여행지 별 세부 데이터
                <br />
                여행 플랜 저장
                <br />
                회원가입 및 로그인
                <br />
                마이페이지
              </div>
              <div>
                스택
                <br />
                Rest API, Mongo DB, Next.js, React, TypeScript, JWT, SCSS,
                Vercel, Git/GitHub
              </div>
              <div>
                자세히 보기
                <NotionRenderer
                  recordMap={recordMap}
                  fullPage={true}
                  darkMode={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Project;
