function createPromise() {
  const delay = Math.random() * 1000 + 2000; // 2–3 sec

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay / 1000);
    }, delay);
  });
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    const tbody = document.getElementById("output");
    tbody.innerHTML = "";

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

    const totalTime = Math.max(...results);

    const totalRow = document.createElement("tr");

    const col1 = document.createElement("td");
    col1.textContent = "Total";

    const col2 = document.createElement("td");
    col2.textContent = totalTime.toFixed(3);

    totalRow.appendChild(col1);
    totalRow.appendChild(col2);
    tbody.appendChild(totalRow);
  });