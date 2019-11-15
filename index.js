"use strict";
/**
 * typescript中的数据类型有
 * undefined
 * number
 * string
 * boolean
 * array
 * null
 * enum 枚举类型
 * any 任意类型
 * void 空类型
 * tuple 元祖类型
 */
// var a:string = 'helo typescript'
// console.log(a);
// var age:number = 1123
// console.log(age);
// var bol:boolean = !!'1'
// console.log(bol);
// enum en{a,b,c}
// enum person{
//     a = 1,
//     b = 2,
//     c = 3,
// }
// console.log(en,en.b,en['a']);
// console.log(person,person.c,person['a']);
// 函数--------------start--------------
// var fn = fun(18)
// function fun(age:number):string{
//     return `今年${age}`
// }
// console.log(fn,fun(19));
// 定义参数非必填
// var fn = fun2(18)
// function fun2(age:number,name?:string):string{
//     return `今年${age},名字叫${name ? name : '马克思'}`
// }
// console.log(fn,fun2(19,'恩格斯'));
// 定义默认参数
// var fn = fun3(18)
// function fun3(age:number,name?:string,friend:string = '托马斯'):string{
//     return `今年${age},名字叫${name ? name : '马克思'},朋友是${friend}`
// }
// console.log(fn,fun3(19,'恩格斯'));
// 定义有剩余参数
// function fun5(...surplus:any[]):string{
//     return `${surplus}+${typeof surplus[2]}`
// }
// console.log(fun5('19','恩格斯',1,'2','true'));
//三种函数的声明方式------------------start-----------------
// 函数声明
// function add(a:number,b:number):number{
//     return a+b;
// }
// console.log(add(1,1))
// 函数表达式
// let add2 = function(a:number,b:number):number{
//     return a+b
// }
// console.log(add2(2,3));
// 箭头函数
// let add3 = (a:number,b:number):number => a+b
// console.log(add3(10,10));
// 函数作用域------------------start-----------------
// function zxfn(){
//     var name = '刘德华'
//     console.log(name);
// }
// zxfn()
// console.log(name);//undefined
// var yangzi:string = '李德华'
// function zxfn(){
//     var yangzi:string = '刘德华'
//     console.log(yangzi);
// }
// zxfn()
// console.log(yangzi);//undefined
// 引用类型-数组
// 声明数组的方法: 声明数组跟声明一个普通变量时一样的,都是通过val let const 关键字实现的
// 指定类型的数组,只能赋值同一类型的数组
// 字面量赋值方式
// let arr:number[] = [1,23,4]//声明一个数值类型的数组
// console.log(arr);
// let arr2:Array<string> = ['你','好'] //声明一个字符串类型的数组
// console.log(arr2);
// let arr3:Array<boolean> = [true,false] //声明一个布尔类型的数组
// console.log(arr3);
// 构造函数赋值方式
// let arr1:number[] = new Array()
// let arr2:number[] = new Array(1,2,3)
// let arr3:Array<string> = new Array('你','好')
// let arr4:Array<boolean> = new Array(true,false)
// console.log(arr1,arr2,arr3,arr4);
// 元祖!! 一种特殊的数组声明方式
// let a : [string,number,boolean] = ['王雄师',123,true]
// console.log(a);
// 引用类型的字符串  typescript 中存在两种类型的字符串
// 字符串的两种类型  他们原型上存在的方法都是一样的
// 基本类型: 用引号括起来的一串字符串
// 引用类型: 用new实例化的String类型字符串 必须是用new实例化创建的字符串
// let str:string = '基本类型字符串'
// let str2:String = new String('引用类型字符串')
// let str3:String = '字符串'
// console.log(str,str2,str3);
// 引用类型:日期对象
// 不传递任何参数 必须是首写字母大写的
// let d:Date = new Date()
// let d2:Date = new Date(1000000)
// let d3:Date = new Date(`2018/09/06 05:40:09`)
// // let d5:Date = new Date(year,month,day,hours,minutes,seconds,ms);
// /**
//  *  year 表示年份，4位数字。
//     month表示月份，数值是0(1月)~11(12月)之间的整数。
//     day 表示日期。数值是1~31之间的整数。
//     hours 表示小时，数值是0-23之间的整数。
//     minutes 表示分钟数，数值是0~59之间的整数。
//     seconds 表示秒数，数值是0~59之间的整数。
//     ms 表示毫秒数，数值是0~999之间的整数。
//  */
// console.log(d);
// console.log(d2);
// console.log(d3);
// 引用类型: 正则表达式
// let reg:RegExp = new RegExp('1234')
// // let reg2:RegExp = new RegExp('jspang','123123')
// let reg3:RegExp = /jspang/
// let reg4:RegExp = /jspang/gi
// console.log(reg,reg3,reg4);
// regexp中的常用方法有两个: test()和exec() 用于测试字符串是否匹配
// 面向对象编程: 类的声明和使用------------------start-----------------
// 类是对象具体事务的一个抽象,对象是类的具体表现
// class CuteGirl{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name = name;
//         this.age = age
//     }
//     say(){
//         console.log('小哥哥好');
//     }
// }
// let girl:CuteGirl = new CuteGirl('波老师',20)
// console.log(girl);
// girl.say()
// 面向对象编程: 修饰符------------------start-----------------
/**
 * public:公有修饰符, 可以在类内或者类外使用public修饰符的属性或者行为,默认修饰符
 * protected:受保护的修饰符,可以本类和子类中使用protected的属性或者行为
 * private:私有修饰符,只可以在类内使用private修饰的属性和行为
 */
// class CuteGirl{
//     public name:string;
//     protected sex:string;
//     private age:number;
//     public constructor(name:string,sex:string,age:number){
//         this.name = name;
//         this.sex = sex;
//         this.age = age;
//     }
//     public say(){
//         console.log(`你好,${this.name}`)
//     }
//     protected getSex(){
//         console.log(this.sex);
//     }
// }
// let girl:CuteGirl = new CuteGirl('迪丽热巴','女',21)
// console.log(girl.sex);
// console.log(girl.name);
// console.log(girl.age);
// girl.say()
// girl.getSex()
// 只读属性修饰符
// 使用readonly修饰符将属性设置为只读, 注意: 只读属性必须在声明时或者构造函数里被初始化.
// class Man{
//     public readonly sex:string = '男'
// }
// let man:Man = new Man()
// man.sex = '女'
// console.log(man.sex);
// 面向对象编程: 继承和重写------------------start-----------------
// 继承: 允许我们创建一个类(子类),从已有的类(父类)上继承所有的属性和方法, 子类可以新建父类中没有的属性和方法
// class Person{
//     public name:string
//     public age:number
//     public skill:string
//     constructor(name:string,age:number,skill:string){
//         this.name = name;
//         this.age = age;
//         this.skill = skill;
//     }
//     public interest(){
//         console.log('帮助地球人');
//     }
// }
// let superMan:Person = new Person('超人',500,'超能力')
// superMan.interest()
// // typescript不支持多重继承
// class kinglion extends Person{
//     public looks:string = '帅气'
//     public ability(){
//         console.log('超级有钱');
//     }
// }
// let lion = new kinglion('王雄师',22,'会挣钱')
// console.log(lion);
// lion.ability()
// lion.interest()
// 类方法的重写
// 重写就是在子类中重写父类的方法
// class Person{
//     public name:string
//     public age:number
//     public skill:string
//     constructor(name:string,age:number,skill:string){
//         this.name = name;
//         this.age = age;
//         this.skill = skill;
//     }
//     public interest(){
//         console.log('帮助地球人');
//     }
// }
// let superMan:Person = new Person('超人',500,'超能力')
// superMan.interest()
// // typescript不支持多重继承
// // 先是继承了父类的方法,然后通过super关键字调用了父类的方法,实现了技能的增加
// class kinglion extends Person{
//     public looks:string = '帅气'
//     public ability(){
//         console.log('超级有钱');
//     }
//     public interest(){
//         super.interest()
//         console.log('super重写');
//     }
// }
// let lion = new kinglion('王雄师',22,'会挣钱')
// console.log(lion);
// lion.ability()
// lion.interest()
// 面向对象编程: 接口------------------start-----------------
// 在面向对象的语言中, 术语interface经常被用来定义一个包含数据和逻辑代码但是用来签名定义了行为的抽象
// interface Husband {
//     sex:string
//     interest:string //兴趣
//     maibaobao?:Boolean //参数可选的 加个?
// }
// let myhusband:Husband = {
//     sex:'男',
//     interest:'看书,挣钱',
//     maibaobao:true
// }
// console.log(myhusband);
// 规范函数类型接口
// interface SeachMan{
//     (source:string,subString:string):boolean
// }
// let mySeachMan:SeachMan
// mySeachMan = function(source:string,subString:string):boolean{
//     let flag = source.search(subString)
//     return (flag != -1)
// }
// console.log(mySeachMan('高富帅','帅'));
// 面向对象编程: 命名空间------------------start-----------------
// 命名空间的使用: 又称内部模块, 被用于组织有些具有内在联系的特性和对象.
var handsomeGuy;
(function (handsomeGuy) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '刘德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是帅哥刘德华');
        };
        return Dehua;
    }());
    handsomeGuy.Dehua = Dehua;
})(handsomeGuy || (handsomeGuy = {}));
var bajie;
(function (bajie) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '马德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是二师兄马德华');
        };
        return Dehua;
    }());
    bajie.Dehua = Dehua;
})(bajie || (bajie = {}));
var dehua1 = new handsomeGuy.Dehua();
var dehua2 = new bajie.Dehua();
dehua1.talk();
dehua2.talk();
