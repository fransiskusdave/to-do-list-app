const addBtn = document.getElementById("add");
const inputField = document.querySelector(".new-task input");
const tasks = document.getElementById("tasks");

addBtn.addEventListener("click", () => {
  if (inputField.value.length == 0) {
    alert("Tolong Masukkan Kegiatan");
  } else {
    tasks.innerHTML += `
    <div class="task">
      <p>
        ${inputField.value}
      </p>
      <button class="delete">
      <i class="fa-solid fa-trash"></i>
      </button>
    </div>
    `;

    const delBtn = document.querySelectorAll(".delete");
    delBtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        this.parentNode.remove();
      });
    });

    const task = document.querySelectorAll(".task");
    task.forEach((e) => {
      e.addEventListener("click", function () {
        e.classList.toggle("completed");
      });
    });

    inputField.value = "";
  }
});
