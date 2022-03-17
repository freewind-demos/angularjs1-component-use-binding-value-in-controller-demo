AngularJS1 Component Use Binding Value in Controller Demo
=========================================================

注意：在一个component的controller中，第一时间拿不到bindings从外面拿过来的值，只能在下一个轮回中拿到。
所以component提供了一些life-cycle方法，比如`$onInit`，如果我们需要使用bindings的值，可以把它们写在这个方法里。

```
npm install
npm start
```

在浏览器console中显示：

```
this.message:  undefined
$onInit this.message:  Hello
setTimeout this.message:  Hello
```

References
----------

- <https://stackoverflow.com/questions/38591685/why-are-my-component-bindings-undefined-in-its-controller>
