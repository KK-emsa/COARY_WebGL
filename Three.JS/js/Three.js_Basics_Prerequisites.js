/* 1. 变量声明 */
// 使用 const 定义不可变变量，let 定义可变变量，避免使用 var
const name = "Alice"; 
let age = 30; 
age = 31; // 允许修改




/* 2. ES6 模块 */
// 使用 import 关键字加载模块（适用于浏览器环境）
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';




/* 3. DOM 操作 */
// 选择单个元素
const canvas = document.querySelector('#c'); 

// 选择多个元素
const buttons = document.querySelectorAll('.btn'); 




/* 4. 事件监听 */
// 使用 DOMContentLoaded 确保 HTML 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    console.log('页面加载完成');
});




/* 5. 闭包 */
// 闭包可以记住变量，即使函数外部调用仍然有效
function createCounter(start) {
    let count = start;
    return function () {
        return count++;
    };
}

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11




/* 6. this 关键字 */
// 在对象方法中，this 指向该对象
const obj = {
    name: "Alice",
    greet() {
        console.log(this.name);
    }
};
obj.greet(); // "Alice"

// 直接调用方法时，this 可能丢失
const callback = obj.greet;
callback(); // this 变为 undefined

// 解决方法：使用 bind 绑定 this
const boundCallback = obj.greet.bind(obj);
boundCallback(); // "Alice"




/* 7. 现代 JavaScript 语法 */
// 解构赋值
const dims = { width: 300, height: 150 };
const { width, height } = dims; 

// 遍历数组
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// 数组方法
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2); 

// 展开运算符
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; 

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; 

// 模板字符串
const username = "Bob";
console.log(`Hello, ${username}!`);

// 箭头函数
const square = x => x * x;
console.log(square(4)); 




/* 8. Promise & async/await */
// Promise 处理异步任务
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("数据加载完成"), 1000);
    });
}

// 使用 Promise
fetchData().then(data => console.log(data));

// 使用 async/await
async function loadData() {
    const data = await fetchData();
    console.log(data);
}
loadData();




/* 9. 代码风格 */
// 变量、函数使用小驼峰命名
const userName = "Alice"; 
function getUserInfo() {}

// 类使用大驼峰命名
class UserProfile {}




/* 10. Visual Studio Code + ESLint */
// ESLint 可自动检测错误
// 安装 ESLint：npm install eslint --save-dev
// 配置 .eslintrc.json，启用 no-undef 规则，检测未定义变量

// 变量未定义（ESLint 会报错）
console.log(undfinedVar); 

// 使用 let 但未修改，建议用 const
let x = 10; 




/* 11. 旧浏览器兼容性 */
// 使用 Babel 转换 ES6 代码
// 安装 Babel：npm install @babel/core @babel/preset-env --save-dev
// 配置 .babelrc
/*
{
    "presets": ["@babel/preset-env"]
}
*/
// 使用 CLI 转换代码：npx babel src --out-dir dist




/* 12. 现代 JavaScript 其他特性 */
// 类的使用
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

const alice = new Person("Alice", 25);
console.log(alice.greet()); 

// getter & setter
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get area() {
        return this._width * this._height;
    }

    set width(value) {
        if (value > 0) this._width = value;
    }
}

const rect = new Rectangle(10, 20);
console.log(rect.area); 

// rest 参数
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4)); 
