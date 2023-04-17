var btnTinhTien = document.getElementById("btnTinhTien");
btnTinhTien.onclick = function () {
  var salary = Number(document.getElementById("salary").value);
  var workdays = Number(document.getElementById("workdays").value);
  var total = salary * workdays;
  var result = "Tổng lương: " + total;
  document.getElementById("total").innerHTML = result;
};
