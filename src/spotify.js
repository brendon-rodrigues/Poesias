import { Component } from "react";
import Gil from "./gil.mp3";

export default function Spotify() {
  return (
    <>
      <audio className={"Style"} autoPlay="autoplay" controls="constrols">
        <source src={Gil} type="audio/mp3" />
      </audio>
    </>
  );
}
