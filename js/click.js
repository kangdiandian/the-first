//点击事件
document.querySelector(".myBtn").addEventListener("click", function(){
  document.querySelector(".demo").innerHTML = "Hello World";
  // innerText 只有IE能用，作用修改标签文本内容；火狐使用textContent
  // innerHTML 都能用  推荐使用
});
//鼠标经过事件
document.getElementById("moveBtn").addEventListener("mouseover", mouseOver);
function mouseOver() {
  document.querySelectorAll(".demo")[0].innerHTML += "鼠标经过我了<br/>";
};
//鼠标离开事件
document.getElementById("moveBtn").addEventListener("mouseout", mouseOut);
function mouseOut() {
  document.querySelectorAll(".demo")[0].innerHTML += "鼠标离开我了<br/>";
};
function clickDemo(event) {
  console.log(event);
};
//事件监听 addEventListener()
