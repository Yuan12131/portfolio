import React from "react";
import styles from "@/styles/archiving.module.scss";
import Link from "next/link";

const Archiving = () => {
  return (
    <div id="archiving">
      <div className={styles.main}>
        <div>ARCHIVING</div>
        <div>
          <div>
            <div>
              <Link href={"https://github.com/Yuan12131"}>
                <div></div>
              </Link>

              <div>Github</div>
            </div>
            <Link href={"https://github.com/Yuan12131"}>
              <div>https://github.com/Yuan12131</div>
            </Link>

            <div>- 작업한 모든 프로젝트의 소스코드</div>
            <div>- 코딩 연습용으로 작성한 소스코드</div>
            <div>- 교육 과정 중 작성한 소스코드</div>
          </div>
          <div>
            <div>
              <Link
                href={
                  "https://ubiquitous-ravioli-eff.notion.site/ba88aea188ab4d718edb14f9e8138fd7?v=e841ca3e13d7404fbe02cc84a5cdb922"
                }
              >
                <div></div>
              </Link>
              <div>Notion</div>
            </div>
            <Link
              href={
                "https://ubiquitous-ravioli-eff.notion.site/ba88aea188ab4d718edb14f9e8138fd7?v=e841ca3e13d7404fbe02cc84a5cdb922"
              }
            >
              <div>https://notion.site</div>
            </Link>
            <div>- 교육 과정 중 습득한 지식 정리</div>
            <div>- 혼자 연구한 기술 및 개념 기록</div>
            <div>- 작업한 프로젝트의 기록</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archiving;
