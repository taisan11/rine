import { useSignal } from "@preact/signals";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#56b97a]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-6xl font-bold">Rine</h1>
        <p class="my-5">RineはLineを模した国内産メッセンジャーです</p>
      </div>
      <a href="./about">Rineについて</a>
      <a href="./login">ログイン</a>
      <a href="reg">登録</a>
    </div>
  );
}
