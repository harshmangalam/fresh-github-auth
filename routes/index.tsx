/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`min-h-screen grid place-items-center`}>
        Home
    </div>
  );
}
