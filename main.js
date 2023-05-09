let add = document.querySelector(".form");
let input = document.querySelector(".input");
if (localStorage.length > 1) {
  var tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.forEach((ele) => {
    let clone = document.createElement("div");
    clone.classList.add("tasks");
    document.querySelector(".secondcontainer").appendChild(clone);
    clone.innerHTML = `<p>${ele}</p>
  <button class = "delete">delete</button>`;
  });
} else {
  var tasks = [];
}

add.addEventListener("submit", (eo) => {
  eo.preventDefault();
  if (input.value !== "" && !tasks.includes(input.value)) {
    function task() {
      return input.value;
    }
    tasks.push(task());
    localStorage.setItem("tasks", JSON.stringify(tasks));
    let clone = document.createElement("div");
    clone.classList.add("tasks");
    document.querySelector(".secondcontainer").appendChild(clone);
    clone.innerHTML = `<p>${task()}</p>
    <button class = "delete">delete</button>`;
    add.reset();
  }
});
let container = document.querySelector(".secondcontainer");

container.addEventListener("click", (event) => {
  if (event.target.className === "delete") {
    tasks.splice(
      tasks.indexOf(event.target.parentElement.childNodes[0].textContent),
      1
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.target.parentElement.remove();
  }
});
///////
let lis = document.querySelectorAll("li");
//  defult background color
lis.forEach((li) => {
  if (window.localStorage.getItem("color") === li.getAttribute("data-type")) {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    add.style.backgroundColor = `rgb(${window.localStorage.getItem("color")})`;
    document.body.style.backgroundColor = `rgb(${window.localStorage.getItem(
      "color"
    )},0.3)`;
  }
});
//hover
lis.forEach((li) => {
  li.addEventListener("mouseover", () => {
    add.style.backgroundColor = `rgb(${li.getAttribute("data-type")})`;
  });
  li.addEventListener("mouseout", () => {
    lis.forEach((li) => {
      if (li.getAttribute("class") === "active") {
        add.style.backgroundColor = `rgb(${li.getAttribute("data-type")})`;
      }
    });
  });
});

//change background color
lis.forEach((li) => {
  li.addEventListener("click", () => {
    window.localStorage.setItem("color", li.getAttribute("data-type"));
    window.localStorage.getItem("color");
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    add.style.backgroundColor = `rgb(${window.localStorage.getItem("color")})`;
    document.body.style.backgroundColor = `rgb(${window.localStorage.getItem(
      "color"
    )},0.3)`;
  });
});
