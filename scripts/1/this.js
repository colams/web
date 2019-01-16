require([],function(){
    alert(100);
    var obj = {
        bar: 1,
        foo: function () {
            document.write(this.bar);
            document.write("<br/>");
            
            //window.document.body.append(this.bar);
            // window.document.body.append("<br/>");
            // document.write(JSON.stringify(arguments.callee));
            // document.write("<br/>");
        }
    }
    
    var foo = obj.foo;
    var bar = 2;
    
    obj.foo();
    foo();
    
    
    var f = function () {
        console.log(this);
        console.log(this.x);
      }
      
      var x = 1;
      var obj = {
        f: f,
        x: 2,
      };
      
      // 单独执行
      f() ;// 1
      
      // obj 环境执行
      obj.f(); // 2
});