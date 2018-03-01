/**
 * 字符串反转输出
 * @param {*} str 
 */
function reverseString(str) {
  str = str
    .split("")
    .reverse()
    .join("");
  return str;
}

/**
 * 回文算法
 * @param {*} str 
 */
function palindrome(str) {
  str = str.replace(/[^a-zA-Z\d]/g, "");
  return str.toLowerCase() == str
      .split("")
      .reverse()
      .join("")
      .toLowerCase();
}

/**
 * 返回提供的句子中最长的单词的长度
 * @param {*} str 
 */
function findLongestWord(str) {
  str = str.split(" ");
  let len = str[0].length;
  for (let i = 0; i < str.length; i++) {
    if (len <= str[i].length) {
      len = str[i].length;
    }
  }
  return len;
}

/**
 * 返回一个字符串,确保字符串的每个单词首字母都大写，其余部分小写
 * @param {*} str 
 */
function titleCase(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] =
      str[i].substring(0, 1).toUpperCase() + str[i].substring(1).toLowerCase();
  }
  str = str.join(" ");
  return str;
}

/**
 * 在右边的大数组中包含了4个小数组，请分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新的数组。
 * @param {*} arr 
 */
function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (max <= arr[i][j]) {
        max = arr[i][j];
      }
    }
    newArr.push(max);
  }
  return newArr;
}

/**
 * 把一个数组arr按照指定的数组大小size分割成若干个数组块
 * @param {*} arr 
 * @param {*} size 
 */
function chunk(arr, size) {
  var index = 0;
  var newArray = [];

  while (index < arr.length) {
    newArray.push(arr.slice(index, (index += size)));
  }

  return newArray;
}

/**
 * 删除数组中的所有假值
 * @param {*} arr 
 */
function bouncer(arr) {
  return arr.filter(params => Boolean(params));
}

/**
 * 去除数组中任意多个值
 * @param {*} arr 
 */
function destroyer(arr) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    //将待摧毁的值放入一个数组中，赋值给变量args
    args.push(arguments[i]);
  }
  var newArr = arr.filter(function(item) {
    //两个数组去重；
    return args.indexOf(item) === -1;
  });
  return newArr;
}