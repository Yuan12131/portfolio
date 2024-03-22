import React, { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion";
import axios from "axios";
import "react-notion/src/styles.css";

const ReactNotion = () => {
  const [response, setResponse] = useState({});
  const [notionPageId, setNotionPageId] = useState<string>("");

  useEffect(() => {
    const NOTION_PAGE_ID = "940bda2d3591490d891df569d92b7489";
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, []);

  return (
    Object.keys(response).length && (<>
      <NotionRenderer hideHeader blockMap={response} fullPage={true} />
    </>
    )
  );
}

export default ReactNotion