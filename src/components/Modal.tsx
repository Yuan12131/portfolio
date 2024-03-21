import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "@/styles/modalbar.module.scss";
import { NotionRenderer } from "react-notion";
import axios from "axios";
import "react-notion/src/styles.css";

interface ModalProps {
  setShowNotion: React.Dispatch<React.SetStateAction<boolean>>;
  notionPageId: string; // Receive the notion page id as prop
}

const ModalBar: React.FC<ModalProps> = ({ setShowNotion, notionPageId }) => {
  const [response, setResponse] = useState({});

  const handleCloseNotion = () => {
    setShowNotion(false);
  };

  useEffect(() => {
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${notionPageId}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, [notionPageId]);

  const customModalStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      width: "90%",
      height: "87vh",
      zIndex: "11",
      position: "relative",
      top: "55%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
    },
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={handleCloseNotion}
      style={customModalStyles}
      ariaHideApp={false}
      contentLabel="Pop up Message"
      shouldCloseOnOverlayClick={true}
    >
      <button className={styles.close} onClick={handleCloseNotion}>
        X
      </button>
      {Object.keys(response).length && (
        <NotionRenderer hideHeader blockMap={response} fullPage={true} />
      )}
    </Modal>
  );
};

export default ModalBar;
