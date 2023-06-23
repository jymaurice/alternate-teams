(function() {
  document.getElementById("name-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const names = Array.from({ length: 10 }, (_, i) => document.getElementById(`name${i + 1}`).value);
    const shuffledNames = shuffle(names);
    const goalkeeper = document.getElementById("goalkeeper").value;
    const playersPerGroup = parseInt(document.getElementById("players-per-group").value, 10);

    const group1 = shuffledNames.slice(0, playersPerGroup);
    const group2 = shuffledNames.slice(playersPerGroup, playersPerGroup * 2);

    const group1WithGoalkeeper = [goalkeeper, ...group1];
    const group2WithGoalkeeper = [goalkeeper, ...group2];

    displayGroups(group1WithGoalkeeper, group2WithGoalkeeper);
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
    group1.forEach((name) => {
      const listItem = createListItem(name);
      group1List.appendChild(listItem);
    });

    group2List.innerHTML = "";
    group2.forEach((name) => {
      const listItem = createListItem(name);
      group2List.appendChild(listItem);
    });

    document.getElementById("group-container").style.display = "block";
  }

  function createListItem(name) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = name;
    return listItem;
  }
})();
