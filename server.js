var express = require('express');
var app = express();
var fs = require('fs');  
var bodyParser = require('body-parser')
var path = require('path');


app.use(bodyParser.urlencoded({ extended: false}))//extended为false表示使用querystring来解析数据，这是URL-encoded解析器  
app.use(bodyParser.json())//添加json解析器  

app.use(express.static(path.join(__dirname, './www')));
var server = app.listen(3000, function () {
});



app.post('/map', function (req, res) {
  // console.log(req.query);
  console.log(JSON.stringify(req.body.mapData));
  // console.log(JSON.parse(req.body));
  // res.send(req.query)
	fs.writeFile('./map.txt',JSON.stringify(req.body.mapData), function(err) {  
		if (err) {  
        	throw err;  
	 	}  
	 	console.log('Saved.');  
	})

});
