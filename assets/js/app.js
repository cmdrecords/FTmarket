
let countVisitors;

document.addEventListener('DOMContentLoaded', () => {
    countVisitors = Number(localStorage.getItem("count"));
    countVisitors++;
    localStorage.setItem("count", countVisitors);
    console.log(countVisitors);
});
