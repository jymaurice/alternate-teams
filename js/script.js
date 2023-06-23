document.getElementById("name-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const names = [];
  for (let i = 1; i <= 10; i++) {
    names.push(document.getElementById(`name${i}`).value);
  }

  const shuffledNames = shuffle(names);

  const group1 = shuffledNames.slice(0, 5);
  const group2 = shuffledNames.slice(5, 10);

  displayGroups(group1, group2);
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function displayGroups(group1, group2) {
  const group1List = document.getElementById("group1");
  const group2List = document.getElementById("group2");

  group1List.innerHTML = "";
  group1.forEach(name => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = name;
    group1List.appendChild(listItem);
  });

  group2List.innerHTML = "";
  group2.forEach(name => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = name;
    group2List.appendChild(listItem);
  });

  document.getElementById("group-container").style.display = "block";
}