var express=('express');
var app=express();

app.get('/',function(req,res){
	res.send('Hello World');
});

app.listen(8080,function(){
	console.log('Running in 8080 port!');	
});