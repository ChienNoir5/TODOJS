import "./styles.css";

const onClickAdd = () => {
  const addText = document.getElementById("addText");
  const inputText = addText.value;
  if (inputText === "") {
    return;
  }
  addText.value = "";
  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  inCompletedList.removeChild(target);
};

const createIncompleteList = (text) => {
  const li = document.createElement("li");
  li.className = "list__item";

  const p = document.createElement("p");
  p.innerText = text;

  const inCompletedList = document.getElementById("inCompletedList");
  inCompletedList.appendChild(li);

  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    deleteFromIncompleteList(complateButton.parentNode);
    const addTarget = complateButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    p.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      completedList.removeChild(deleteTarget);

      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    const completedList = document.getElementById("completedList");
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    completedList.appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  li.appendChild(p);
  li.appendChild(complateButton);
  li.appendChild(deleteButton);
};

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => onClickAdd());
