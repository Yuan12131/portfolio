"use client";
import React, { useState } from "react";
import styles from "@/styles/project.module.scss";
import Link from "next/link";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";

import "react-notion-x/src/styles.css";
import ReactNotion from "@/components/Notion";

interface ProjectProps {
  setShowNotion: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: (pageId: string) => void;
}

const Project: React.FC<ProjectProps> = ({ setShowNotion, openModal }) => {
  const handleShowNotion = (pageId: string) => {
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
              <div
                onClick={() =>
                  handleShowNotion("940bda2d3591490d891df569d92b7489")
                }
                style={{ cursor: "pointer" }}
              >
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
                <Link
                  href={
                    "https://www.figma.com/file/lj0b2GinLC3GwanyINvK8l/MUMUS?type=design&node-id=0-1&mode=design&t=RwISG2hwQUQXitgn-0"
                  }
                >
                  <span>Figma</span>
                  <div></div>
                </Link>
                <Link
                  href={
                    "https://www.notion.so/MUMUS-406ef2f548b440b6b4ff055f143327b2?pvs=4"
                  }
                >
                  <span>Notion</span>
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
                    &nbsp;Spotify API를 활용하여 음악을 검색하고, 추천받고,
                    재생하는 웹 사이트{" "}
                  </span>
                </span>
                입니다. &nbsp;기존의 음악 추천 서비스는 주로 &lsquo;드라이브 할
                때 듣기 좋은 곡&rsquo;과 같은 추상적인 분위기로 음악을 추천하는
                경우가 많았습니다. 이는 저의 개인적인 취향과 다를 때가 있었고,
                이러한 아쉬움을 해소하기 위해 수치로 표현되는 &lsquo;BPM&rsquo;,
                &lsquo;Energy&rsquo;, &lsquo;Valence&rsquo; 등의 음악의 특성을
                기반으로 한 음악 추천 서비스를 개발하였습니다.<br></br>
                <br></br>개발에 앞서 UI 및 UX를{" "}
                <span style={{ color: "#4682A9" }}>Figma</span>로 디자인하고
                인터랙션 기능을 활용하여 사용자 경험을 고려했습니다. 이후에는{" "}
                <span style={{ color: "#4682A9" }}>Next.js</span>에{" "}
                <span style={{ color: "#4682A9" }}>Express 서버</span>를
                연결하여 Rest API를 활용했습니다. 이 과정에서 서버와 클라이언트
                간의 통신을 구현하고, 데이터를 주고받는 방법에 대한 이해를 높일
                수 있었습니다. 작업 후에는{" "}
                <span style={{ color: "#4682A9" }}>AWS</span>로 배포하며 개발의
                전 과정을 직접 경험하고, 수행했다는 것에 의미가 큰
                작업이었습니다.
              </div>
              <div
                onClick={() =>
                  handleShowNotion("3be5c96ce69940d1bb43561fca5cb6b3")
                }
                style={{ cursor: "pointer" }}
              >
                👉&nbsp;&nbsp; 이어서 보기
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            03 ERP e-commerce
            <p>2024.01.29-2024.02.16 | 팀프로젝트(4인)</p>
          </div>
          <div>
            <div>
              <Project3 />
            </div>
            <div>
              <div>
                <a></a>
                <Link
                  href={
                    "https://github.com/KDT-IaaS-Class-One-Group/KDT-IaaS-2team-ERP"
                  }
                >
                  <span>Github</span>
                  <div></div>
                </Link>
                <Link
                  href={
                    "https://drive.google.com/file/d/1VxY0mfXoC5UeMqd_Cq-TjQwH6-CMwyHG/view?usp=drive_link"
                  }
                >
                  <span>Video</span>
                  <div></div>
                </Link>
                <Link
                  href={
                    "https://www.figma.com/embed?embed_host=notion&url=https://www.figma.com/file/wuktHFzNE6Tbrz8NyXRWLp/NTS---ERP-IA?type=design&node-id=0-1&mode=design&t=RbAlmsdVm6DZcEux-0"
                  }
                >
                  <span>Figma</span>
                  <div></div>
                </Link>
                <Link
                  href={
                    "https://ubiquitous-ravioli-eff.notion.site/ERP-568b0a2e75b2441fa756519311f56242?pvs=4"
                  }
                >
                  <span>Notion</span>
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
                    &nbsp;ERP 시스템을 기반으로 한 e-commerce로 고객용 페이지와
                    관리자용 페이지가 존재하는 원두 구독 서비스 제공 웹 사이트{" "}
                  </span>
                </span>
                입니다. 팀 프로젝트의 공통 주제가 &lsquo;ERP 시스템을 활용한
                e-commerce&rsquo; 개발하기였고, 저희 팀은 일반적인 쇼핑몰과의
                차별화를 위해 특정한 테마와 서비스를 모색했습니다. 팀 내의 공통
                관심사인 &lsquo;원두&rsquo;를 주제로 원두 소비자의 성향을
                기반으로 &lsquo;구독 서비스&rsquo;를 제공하기로 결정했습니다.
                <br></br>
                <br></br>
                <span style={{ color: "#4682A9" }}>Next.js</span>에 <span style={{ color: "#4682A9" }}>Node.js</span>로 별도의 서버를 구축하며, React와 Next.js를 습득할 수 있었습니다. 그리고 <span style={{ color: "#4682A9" }}>MariaDB</span>를 활용하여 ERP/e-commerce와 같이 복잡한 시스템에서 필요한 관계형 데이터베이스의 구조를 이해할 수 있었습니다. 이 과정에서 협업을 위해 데이터베이스의 구조화 및 와이어프레임 설계와 Github 컨벤션을 맞추며 큰 규모의 웹 사이트를 개발할 수 있는 능력을 키우고, 팀 프로젝트를 효율적으로 수행하는 방법을 배울 수 있었습니다.
              </div>
              <div
                onClick={() =>
                  handleShowNotion("3efe789c337240ca8f2a8df27d39a0ba")
                }
                style={{ cursor: "pointer" }}
              >
                👉&nbsp;&nbsp; 이어서 보기
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            04 Community
            <p>2023.11.07 - 2023.12.06 | 개인프로젝트</p>
          </div>
          <div>
            <div>
              <Project4 />
            </div>
            <div>
              <div>
                <Link href={"http://43.202.241.98:8000/"}>
                  <span>URL</span>
                  <div></div>
                </Link>
                <Link href={"https://github.com/Yuan12131/signup-board-chat"}>
                  <span>Github</span>
                  <div></div>
                </Link>
                <a></a>
                <Link
                  href={
                    "https://www.figma.com/community/file/1312020545724832462"
                  }
                >
                  <span>Figma</span>
                  <div></div>
                </Link>
                <Link
                  href={
                    "https://www.notion.so/signup-board-chat-a96a57a7ea294e56a4768ae26cc3f5e4?pvs=4"
                  }
                >
                  <span>Notion</span>
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
                  게시판과 단체 채팅방 기능이 있는 커뮤니티 웹 사이트{" "}
                  </span>
                </span>
                입니다. 커뮤니티 사이트로 개발하고 싶었지만, 당시에는 Node.js로 간단한 input 데이터만 가지고 HTTP 요청 처리하는 것만 배웠을 때라 처음 접해보는 DB, WEB Socket 같은 기술로 HTTP 요청과 응답 처리를 구현하는 것이 난관이었습니다. 그래서 Notion, Figma를 활용하여 기술들에 대한 학습과 설계에 많은 시간을 투자한 후 개발에 착수했습니다.
                <br></br>
                <br></br>
                <span style={{ color: "#4682A9" }}>MySQL</span>을 사용하여 회원, 게시판, 채팅 기능을 구현하며 데이터베이스의 CRUD를 이해할 수 있었습니다. 이 과정에서 <span style={{ color: "#4682A9" }}>Node.js</span>의 <span style={{ color: "#4682A9" }}>HTTP 요청과 응답</span>에 대한 처리 방법을 습득할 수 있는 기회가 되었으며, <span style={{ color: "#4682A9" }}>Web Socket</span>을 활용하여 실시간 통신에 대한 이해를 높일 수 있었습니다. 프론트엔드부터 백엔드까지 다양한 기능이 구현된 웹 사이트를 처음으로 완성해봄으로써 추후 프로젝트의 기반이 되었던 작업이라고 할 수 있습니다.
              </div>
              <div
                onClick={() =>
                  handleShowNotion("f9ea935f093a416293c409096dee5577")
                }
                style={{ cursor: "pointer" }}
              >
                👉&nbsp;&nbsp; 이어서 보기
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            05 교육과정 히스토리
            <p>2023.08.28-2023.11.03 | 기록</p>
          </div>
          <div>
            <div>
              <Project5 />
            </div>
            <div>
              <div>
                <a></a>
                <a></a>
                <a></a>
                <a></a>
                <Link
                  href={
                    "https://ubiquitous-ravioli-eff.notion.site/ba88aea188ab4d718edb14f9e8138fd7?v=e841ca3e13d7404fbe02cc84a5cdb922"
                  }
                >
                  <span>Notion</span>
                  <div></div>
                </Link>
              </div>
              <div>
                  <span style={{ color: "#27374D" }}>
                  &lsquo;지역인재 양성을 위한 IaaS기반 웹 서비스 개발자 과정&rsquo;을 수료하며 본격적인 프로젝트 작업 전에 
                  정적인 웹 페이지부터 동적인 이벤트 처리와 서버 구축까지의 기록입니다. 수업 중 진행한 평가 과제와 배운 것을 활용하여 실습했던 기록으로 성장 과정을 확인할 수 있습니다.
                  </span>
                <br></br>
                <br></br>
                <span style={{ color: "#4682A9" }}>HTML</span>과  <span style={{ color: "#4682A9" }}>CSS</span>를 처음 배우면서 웹 페이지의 마크업을, <span style={{ color: "#4682A9" }}>JavaScript</span>를 학습하며 동적인 웹을 구현할 수 있게 되었습니다. 이후에는 <span style={{ color: "#4682A9" }}>Node.js</span>로 서버를 구축하고, HTTP 요청을 통해 클라이언트와 서버 간의 통신 방법을 이해할 수 있었습니다. 이러한 기술들을 실습과 과제를 작업하면서 습득하여 웹 프로그래밍의 기반을 탄탄히 다질 수 있었습니다.
              </div>
              <div
                onClick={() =>
                  handleShowNotion("cd6e8640cf2d414483d1cf46b5ce6071")
                }
                style={{ cursor: "pointer" }}
              >
                👉&nbsp;&nbsp; 이어서 보기
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
