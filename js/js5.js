var btnTinhTong = document.getElementById("btnTinhTong");
btnTinhTong.onclick = function () {
  let num = document.getElementById("num").value;
  let result =
    Number(num.substring(0, num.length - 1)) +
    Number(num.substring(num.length - 1, num.length));
  document.getElementById("total").innerHTML = "Tổng 2 ký số là: " + result;
};
