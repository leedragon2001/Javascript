var exchangeRate = 23500;
var btnConvert = document.getElementById("btnConvert");

btnConvert.onclick = function () {
  let usd = Number(document.getElementById("usd").value);
  let vnd = usd * exchangeRate;
  let formattedVND = new Intl.NumberFormat("vn-VN").format(vnd);
  document.getElementById("total").innerHTML =
    "Số tiền VND tương đương là: " + formattedVND;
};
