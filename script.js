//your JS code here. If required.
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  const value = parseFloat(document.getElementById("ip").value);

  if (isNaN(value)) {
    alert("Please enter a valid number.");
    return;
  }

  // Initial promise
  new Promise(resolve => {
    setTimeout(() => {
      output.textContent = `Result: ${value}`;
      resolve(value);
    }, 2000);
  })
  .then(result => {
    return new Promise(resolve => {
      setTimeout(() => {
        const res = result * 2;
        output.textContent = `Result: ${res}`;
        resolve(res);
      }, 3000);
    });
  })
  .then(result => {
    return new Promise(resolve => {
      setTimeout(() => {
        const res = result - 3;
        output.textContent = `Result: ${res}`;
        resolve(res);
      }, 4000);
    });
  })
  .then(result => {
    return new Promise(resolve => {
      setTimeout(() => {
        const res = result / 2;
        output.textContent = `Result: ${res}`;
        resolve(res);
      }, 5000);
    });
  })
  .then(result => {
    return new Promise(resolve => {
      setTimeout(() => {
        const res = result + 10;
        output.textContent = `Final Result: ${res}`;
        resolve(res);
      }, 6000);
    });
  });
});
