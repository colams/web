var events = require("events");
var eventEmitter = new events.EventEmitter();


var connectHandler = function connected(){
    console.log('connect success');
    eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
 });
 
 eventEmitter.emit('connection');
 console.log("程序执行完毕。");
