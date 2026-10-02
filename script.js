"use strict";

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// ボタンをおすたびに、ちがうメッセージが出ます。
const messages = [
  "🌈 きみの『すき』は、せかいにひとつのたからもの！ 💖",
  "🦄 きょうは、ちいさなハッピーを見つけてみよう！ ✨",
  "🎨 すきな色で、じぶんだけのにじをかこう！ 🌈",
  "🧁 ひとやすみも、すてきなまほうだよ ☁️",
  "🎀 きみのやさしさで、だれかがにっこりするかも！ 💕",
  "⭐ はじめてのことに、ちょっぴりチャレンジ！ 🪄"
];
const button = document.getElementById("magic-button");
const result = document.getElementById("magic-result");
let messageIndex = 0;

if (button && result) {
  button.addEventListener("click", () => {
    result.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    result.classList.remove("pop");
    // アニメーションを、もう一度はじめます。
    void result.offsetWidth;
    result.classList.add("pop");
  });
}
