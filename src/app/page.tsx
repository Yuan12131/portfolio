"use client";

import styles from "../styles/home.module.scss";
import React, { useState } from "react";
import Stack from "@/components/Stack";
import Project from "@/components/Project";
import Archiving from "@/components/Archiving";
import ModalBar from "@/components/Modal";

const Home = () => {
  const [showNotion, setShowNotion] = useState(false);
  const [notionPageId, setNotionPageId] = useState("");

  const openModal = (pageId: string) => {
    setNotionPageId(pageId); // Set the notion page id
    setShowNotion(true); // Open the modal
  };

  return (
    <div className={styles.main}>
      <div>
        <div>
          이유안 <br></br>풀 스택 웹 개발자
        </div>
        <div>
          <div>
            <div></div>
            <div>
              연락처<br></br>010-5526-0787
              </div>
          </div>
          <div>
            <div></div>
            <div>
            메일<br></br>dbdks32123@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div id="archiving">
        <Archiving />
      </div>
      <div>
        {showNotion && (
          <ModalBar setShowNotion={setShowNotion} notionPageId={notionPageId} />
        )}
        <Project setShowNotion={setShowNotion} openModal={openModal} />
      </div>
      <div>
        <Stack />
      </div>
    </div>
  );
};

export default Home;
