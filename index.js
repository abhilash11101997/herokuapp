const express = require('express')
const bodyParser =require('body-parser')
const request =require('request')
const app =express()

app.set('port',(process.env.PORT || 5000))


app.use(body-parser.urlencoded({extended:false}))
app.use(body-parser.json())

app.get('/',function (req,res){
	res.send('hello youtube!')
})

app.get('/webhook/',function(req,res){
	if(req.query['hub.verify_token'] === 'ironman'){
		res.send(req.query['hub challenge'])
}
res.send('No entry')
})


app.listen(app.get('port'),function(){
	console.log('running on port',app.get('port'))
})