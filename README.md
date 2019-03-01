AngularJS1 Component Use Binding Value in Controller Demo
=========================================================

注意：在一个component的controller中，第一时间拿不到bindings从外面拿过来的值，只能在下一个轮回中拿到。

```
npm install
npm run demo
```

在浏览器console中显示：

```
this.message:  undefined
setTimeout this.message:  Hello
```
