var express=require('express');
var app=express();
var path=require('path');
var moment=require('moment');

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'),function(){
	console.log('Timestamp Node app is running on port', app.get('port'));	
});
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/:datestring',function(req,res){
	var myDate;
	if(/^\d{8,}$/.test(req.params.datestring)){
		myDate=moment(req.params.datestring,"X");
	}else{
		myDate=moment(req.params.datestring,"MMMM D, YYYY");
	}
	if(myDate.isValid()){
		res.json({
			"unix":myDate.format("X"),
			"natural":myDate.format("MMMM D, YYYY")
		})
	}else{
		res.json({
			"unix":null,
			"natural":null
		});

	}

});

