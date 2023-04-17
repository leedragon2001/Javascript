var btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function () {
  var length = Number(document.getElementById("length").value);
  var width = Number(document.getElementById("width").value);

  var chu_vi = (length + width) * 2;
  var dien_tich = length * width;
  var result = "Diện tích: " + dien_tich + " Chu vi: " + chu_vi;
  document.getElementById("total").innerHTML = result;
};
