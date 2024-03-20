"use client";

import styles from "../styles/home.module.scss";
import Link from "next/link";
import React, { useState } from "react";
import Contact from "@/components/Contact";
import Stack from "@/components/STack";
import Project from "@/components/Project";
import Archiving from "@/components/Archiving";

export default function Home() {
  return (
    <div className={styles.main}>
      <div>
          <div>
            이유안 <br></br>풀 스택 웹 개발자
          </div>
          <div>
            안녕하세요.<br></br>
          </div>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <div id="archiving">
        <Archiving/>
      </div>
      <div>
        <Project/>
      </div>
      <div>
        <Stack/>
      </div>
    </div>
  );
}
