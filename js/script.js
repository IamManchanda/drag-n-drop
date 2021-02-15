const lists = document.querySelectorAll(".list");
const listItems = document.querySelectorAll(".list-item");

let draggedItem = null;

function handleDragStart(_event, item) {
  draggedItem = item;
  setTimeout(() => {
    item.style.display = "none";
  }, 50);
}

function handleDragEnd(_event, item) {
  setTimeout(() => {
    item.style.display = "block";
    draggedItem = null;
  }, 50);
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDragEnter(event, list) {
  event.preventDefault();
  list.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
}

function handleDragLeave(_event, list) {
  list.style.backgroundColor = "rgba(88, 65, 83, 0.5)";
}

function handleDrop(_event, list) {
  list.append(draggedItem);
  list.style.backgroundColor = " rgba(88, 65, 83, 0.5)";
}

for (let i = 0; i < listItems.length; i++) {
  const item = listItems[i];
  item.addEventListener("dragstart", (e) => handleDragStart(e, item));
  item.addEventListener("dragend", (e) => handleDragEnd(e, item));

  for (let l = 0; l < lists.length; l++) {
    const list = lists[l];
    list.addEventListener("dragover", (e) => handleDragOver(e));
    list.addEventListener("dragenter", (e) => handleDragEnter(e, list));
    list.addEventListener("dragleave", (e) => handleDragLeave(e, list));
    list.addEventListener("drop", (e) => handleDrop(e, list));
  }
}
