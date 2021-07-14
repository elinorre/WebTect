import React, {useEffect, useRef, useState} from "react";
import {detectFaces, drawResults} from "../../helpers/faceApi";

import "./SelectedImage.css";
import Results from "../Results/Results";

const SelectedImage = ({img}) => {
  const selected = useRef();
  const canvas = useRef();

  const [processing, setProcessing] = useState(true);
  const [results, setResults] = useState([]);

  const getFaces = async () => {
    setProcessing(true);
    const faces = await detectFaces(selected.current);
    setResults(faces);
    drawResults(selected.current, canvas.current, faces, "box");
    drawResults(selected.current, canvas.current, faces, "landmarks");

    setProcessing(false);
  };

  const download = e => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFaces();
  }, [img]);

  return (
    <div className="selected-image">
      <div className="selected-image__wrapper">
        <img
          ref={selected}
          src={img}
          alt="selected"
          className="selected-image__image"
        />
        <canvas className="selected-image__overlay" ref={canvas} download onClick={e => download(e)} />
      </div>
      <div className="results__container">
        <Results results={results} processing={processing} />
      </div>
    </div>
  );
};

export default SelectedImage;
