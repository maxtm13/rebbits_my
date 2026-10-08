"use strict";

const blocks = document.querySelectorAll(".block");
const resetBtn = document.querySelector("button.btn-reset");

const renderBlocks = (oldindex, newindex) => {
  if (oldindex === newindex) {
    return;
  }
  let oldBlock = blocks[oldindex];
  let oldBlockText = oldBlock.querySelector(".block-number").innerText;
  let newBlock = blocks[newindex];
  let newBlockText = newBlock.querySelector(".block-number").innerText;

  blocks[newindex].querySelector(".block-number").innerText = oldBlockText;
  blocks[oldindex].querySelector(".block-number").innerText = newBlockText;
};
blocks.forEach((block, index) => {
  block.addEventListener("click", (e) => {
    let currentIndex = index;
    let newIndex = index;
    if (e.target.closest(".arrow.right")) {
      newIndex++;
      newIndex = newIndex <= blocks.length ? newIndex : newIndex - 1;
      renderBlocks(currentIndex, newIndex);
    }
    if (e.target.closest(".arrow.left")) {
      newIndex--;
      newIndex = newIndex < 0 ? 0 : newIndex;
      renderBlocks(currentIndex, newIndex);
    }
    if (e.target.closest(".arrow.top")) {
      newIndex = newIndex - 5;
      newIndex = newIndex < 0 ? currentIndex : newIndex;
      renderBlocks(currentIndex, newIndex);
    }
    if (e.target.closest(".arrow.bottom")) {
      newIndex = newIndex + 5;
      newIndex = newIndex >= blocks.length ? currentIndex : newIndex;
      renderBlocks(currentIndex, newIndex);
    }
  });
});
resetBtn.addEventListener("click", () => {
  blocks.forEach((block, index) => {
    index++;
    block.querySelector(".block-number").innerText = index;
  });
});
