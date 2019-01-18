require.config({
    baseUrl: "scripts/",
    paths: {
        jquery: "lib/jquery",
        $templ: "lib/jquery-tmpl"
    }
});
require(["jquery","$templ"], function ($,$templ) {
    // alert(100);
    console.log($("body"));
    // console.log($templ);
    
    document.write(100);
    document.write("<br/>");
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

    var x = 1;

    var f = function () {
        console.log(this);
        console.log(this.x);
    }

    var obj = {
        x: 2,
        f: f,
    };

    // 单独执行
    f(this);// 1

    // obj 环境执行
    obj.f(); // 2
});