//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const infiList = document.getElementById("infi-list");

  // Function to add items to the list
	let b=1;
  function addItems(count) {
    for (let i = 1; i <= count; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${b}`;
		b++;
      infiList.appendChild(listItem);
    }
  }

  // Add 10 items by default
  addItems(10);

  // Event listener for scrolling
  infiList.addEventListener("scroll", function () {
    // Check if the user has reached the end of the list
    if (
      infiList.scrollTop + infiList.clientHeight >=
      infiList.scrollHeight - 10
    ) {
      // Add 2 more items
      addItems(2);
    }
  });
});
