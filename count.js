#!/usr/bin/env node
const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let choice;

  while (true) {
    choice = await rl.question(
      "1: 改行やスペースを含む全てをカウント\n2: 改行やスペースをカウントしない\n選択: "
    );

    if (choice === "1" || choice === "2") {
      break; // 1か2が選択されたらループを抜ける
    } else {
      console.log("1か2を入力してください");
    }
  }

  let inputText = await rl.question("カウントする文字を入力: ");
  let characterCount = 0;

  if (choice === "1") {
    characterCount = countAllCharacters(inputText);
  } else if (choice === "2") {
    characterCount = countNonSpaceCharacters(inputText);
  }

  console.log("文字数: " + characterCount);
  rl.close();
}

function countAllCharacters(text) {
  return text.length;
}

function countNonSpaceCharacters(text) {
  return text.replace(/\s/g, "").length; // 空白文字を削除して文字数をカウントする
}

main();
