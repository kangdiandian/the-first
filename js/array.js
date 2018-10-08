var arr = [1, 2, 3, 4, 5];
// 生成二维数组
document.querySelector(".erwei>.to-click").addEventListener("click", build);
function build() {
  var arr1 = new Array();
  for(var i=0; i<10; i++) {
    arr1[i] = new Array(i);
    for(var j=0; j<10; j++) {
      arr1[i][j] = j;
    }
  }
  document.querySelector(".erwei>.result").innerHTML = arr1.toString();
};
// forEach迭代数组
document.querySelector(".foreach>.for-each").addEventListener("click", runForEach);
function runForEach() {
  var newArr = [];
  arr.forEach((item, index) => {
    item += 1;
    arr.push(item);
  });
  document.querySelectorAll(".foreach>.result")[0].innerHTML = arr;
};
// forEach()方法可使用call方法将array的this指向特定的对象或数组，完成数组和对象的迭代
//例 var obj = { 0: 1 } / var obj = 'str', Array.protoType.foreach.call(obj, function(item, index) {})
// 简写 [].forEach.call(obj, function(item, index) {})
// this 关键字，不传时，foreach中关键字指向window，传入时，指向传入
var obj = {
  printObj: function (a, b) {
    console.log(a, b);
  }
};
// function doThis() {
//   arr.forEach(function (item, index, a) {
//     this.printObj(index, item);
//   }, obj);
// };
// 使用箭头函数后，this关键字被指向window， 箭头函数没有this，箭头函数引用来的父级的变量，构成了一个闭包 https://cnodejs.org/topic/584a207a3ebad99b336b1ede
function doThis() {
  arr.forEach((item, index, a) => {
    this.printObj(index, item);
  });
};

// map方法迭代数组
document.querySelector(".map>.to-map").addEventListener("click", runMap);
function runMap() {
  var newArr = arr.map((item, index) => {
    return item + 2;
  });
  document.querySelectorAll(".map>.result")[0].innerHTML = newArr;
};

// filter方法迭代数组
document.querySelector(".filter>.to-filter").addEventListener("click", runFilter);
function runFilter() {
  var newArr = arr.filter((item) => {
    return item % 2 == 0;
  });
  document.querySelectorAll(".filter>.result")[0].innerHTML = newArr;
};

// indexOf filter 去重
function doFilter() {
  var arr2 = [2, 3, 4, 2, 3, 5];
  // var newArr = arr2.filter((item, index, self) => {
  //   // indexOf返回在元素数组中第一次出现的位置，后续出现的index和返回不符
  //   return self.indexOf(item) == index;
  // });
  // var newArr = arr2.filter(x => !!x);
  var newArr = [...new Set(arr2)];
  document.querySelectorAll(".filter>.result")[0].innerHTML = newArr;
};


// some
document.querySelector(".assert>.some").addEventListener("click", runSome);
function runSome() {
  var arrSome = [2, 3, 4];
  var assert = arrSome.some((item) => {
    return item % 2 == 0;
  });
  if (assert) {
    document.querySelectorAll(".assert>.result")[0].innerHTML = '有偶数，返回为true';
  }else{
    document.querySelectorAll(".assert>.result")[0].innerHTML = '无偶数，返回为false';
  }
};

// every
function doEvery() {
  var arrSome = [2, 3, 4];
  var assert = arrSome.every((item) => {
    return item % 2 == 0;
  });
  if (assert) {
    document.querySelectorAll(".assert>.result")[0].innerHTML = '全为偶数，返回为true';
  }else{
    document.querySelectorAll(".assert>.result")[0].innerHTML = '有奇数，返回为false';
  }
};


// reduce
document.querySelector(".reduce>.to-reduce").addEventListener("click", runReduce);
function runReduce() {
  var arrReduce = [3, 2, 1];
  var reduce = arrReduce.reduce((x, y) => {
    return x - y;
  });
  document.querySelectorAll(".reduce>.result")[0].innerHTML = reduce;
};

// reduceRight
function doReduceRight() {
  var arrReduce = [3, 2, 1];
  var reduce = arrReduce.reduceRight((x, y) => {
    return x - y;
  });
  document.querySelectorAll(".reduce>.result")[0].innerHTML = reduce;
};

// reduce 应用，返回数组中长度最长元素
function doReduce() {
  var arrReduce = ['aaa', 'q', '1234'];
  var maxLength = arrReduce.reduce(findMaxLength);
  document.querySelectorAll(".reduce>.result")[0].innerHTML = '最长元素为' + '' + maxLength;
};

function findMaxLength(x, y) {
  return x.length > y.length ? x : y;
};


// includes
document.querySelector(".includes>.to-includes").addEventListener("click", runIncludes);
function runIncludes() {
  var arrIncludes = [3, 2, 1];
  var includes = arrIncludes.includes('2');
  if (!includes) {
    document.querySelectorAll(".includes>.result")[0].innerHTML = '数字中包含数字2';
  }
};

// from
document.querySelector(".from>.to-from").addEventListener('click', runFrom);
function runFrom() {
  var newArr = Array.from('hello');
  document.querySelectorAll(".from>.result")[0].innerHTML = newArr;
};

// map回调函数为参数创建数组
function doFrom() {
  var arr = [1, 2, 3, 4];
  var newArr = Array.from(arr.map(f));
  document.querySelectorAll(".from>.result")[0].innerHTML = newArr;
};

var f = function (num) {
  return num + 1;
};

// find
document.querySelector(".find>.to-find").addEventListener('click', runFind);
function runFind() {
  var newArr = [1, 23, 18, 24];
  var aa = newArr.find(toFind);
  document.querySelectorAll(".find>.result")[0].innerHTML = aa;
};

function toFind(a) {
  return a > 18;
};

// indexOf lastIndexOf
// 当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
// 如果没有符合条件的元素返回 undefined
function toIndex() {
  var newArr = [1, 23, 18, '1'];
  document.querySelectorAll(".index-of>.result")[0].innerHTML = newArr.indexOf(1);
};

function toLastIndex() {
  var newArr = [1, 23, 18, 1];
  document.querySelectorAll(".index-of>.result")[0].innerHTML = newArr.lastIndexOf(1);
};

function indexNaN() {
  var newArr = [1, NaN, 18, 1];
  document.querySelectorAll(".index-of>.result")[0].innerHTML = newArr.indexOf(NaN);
};

function lastIndexNaN() {
  var newArr = [1, 'NaN', 18, 1];
  document.querySelectorAll(".index-of>.result")[0].innerHTML = newArr.lastIndexOf('NaN');
};



// Object()
function toObject() {
  var aa = this.isObject([]);
  console.log('aa=' + aa);
  document.querySelectorAll(".object>.result")[0].innerHTML = aa;
};

function isObject(value) {
  return value === Object(value);
};

function objectKey() {
  var o = {
    p1: 123,
    p2: 456
  };
  document.querySelectorAll(".object-keys>.result")[0].innerHTML = Object.keys(o);
}

// object.Assign
function objectAssign() {
  var target = {
    x: 0,
    y: 1
  };
  var source = {
    x: 1,
    z: 1,
    fn: {
      number: 1
    }
  };
  var newObject = Object.assign(target, source);
  document.querySelectorAll(".object-assign>.result")[0].innerHTML = newObject.x; // 同名属性会被覆盖
  newObject.fn.number = 3;  // 拷贝为对象引用
  document.querySelectorAll(".object-assign>.result")[0].innerHTML = source.fn.number;

  // var newObject = Object.assign([1, 2, 3], [5, 4]);  // 把数组当作对象来处理
  // document.querySelectorAll(".object-assign>.result")[0].innerHTML = newObject;
};

// function objectCreate() {
//   var parent = {
//     x: 1,
//     y: 1
//   };
//   var child = Object.create(parent, {
//     z : {                           // z会成为创建对象的属性
//         writable:true,
//         configurable:true,
//         value: "newAdd"
//     }
//   });
//   console.log(child);
//   document.querySelectorAll(".object-create>.result")[0].innerHTML = JSON.stringify(child);
// };

function objectHasOwnProperty() {
  var obj = {
    a: 1,
    b: 2
  };
  document.querySelectorAll(".object-hasOwnProperty>.result")[0].innerHTML = obj.hasOwnProperty('a');
}
