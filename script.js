// Function to create a promise with random delay (1–3 sec)
function createPromise() {
  const delay = Math.random() * 2000 + 1000; // 1000–3000 ms

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay / 1000); // convert to seconds
    }, delay);
  });
}

// Create 3 promises
const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

const startTime = performance.now();

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    const endTime = performance.now();
    const totalTime = (endTime - startTime) / 1000;

    const tbody = document.getElementById("output");

    // Remove loading row
    tbody.innerHTML = "";

    // Add rows for each promise
    results.forEach((time, index) => {
      const row = document.createElement("tr");

      const col1 = document.createElement("td");
      col1.textContent = `Promise ${index + 1}`;

      const col2 = document.createElement("td");
      col2.textContent = time.toFixed(3);

      row.appendChild(col1);
      row.appendChild(col2);
      tbody.appendChild(row);
    });

    // Add total row
    const totalRow = document.createElement("tr");

    const totalCol1 = document.createElement("td");
    totalCol1.textContent = "Total";

    const totalCol2 = document.createElement("td");
    totalCol2.textContent = totalTime.toFixed(3);

    totalRow.appendChild(totalCol1);
    totalRow.appendChild(totalCol2);
    tbody.appendChild(totalRow);
  })
  .catch((error) => {
    console.error("Error:", error);
  });