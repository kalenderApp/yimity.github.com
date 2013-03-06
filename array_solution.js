/*
  自己写的函数，实现了按顺序获取并打印，使用了闭包和两个数组。
  如果不需要考虑顺序问题的话，只需要一个数组，闭包也都不需要。
  不知道效率如何。没有测试。
  
  只是测试页面 http://coolshell.cn/t.html
  
  这是问题 http://weibo.com/1401880315/zm4Yv2ZPO
*/

function array_solution2(){
  var arr = [], temp = [];
  for (var i = 0; i < total; i++) {
    (function(j){
      xss_rpc_call2(j, function(result){
        arr[j] = result;
        temp.push(result);
        if (temp.length == total) {
          var n = 0;
          while(arr.length){
            display_result ("coolshell_array", n++ +"," + arr.shift());
          }  
        }
      })
    })(i);
 }
}
