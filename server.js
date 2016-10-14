var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = { 
'article-One' : {
    title: 'Article One | Anuj Agrawal',
    heading: 'Article One',
    date: 'oct 12 2016',
    content: ` <p>
                 this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
            </p>
            <p>
                 this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
            </p>
            <p>
                 this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
            </p>  `
    
},
'article-Two': {
    title: 'Article two | Anuj Agrawal',
    heading: 'Article two',
    date: 'oct 12 2016',
    content: ` <p>
                 this is the content for my second article.</p>`},
'article-Three':{title: 'Article three | Anuj Agrawal',
    heading: 'Article three',
    date: 'oct 12 2016',
    content: ` <p>
                 this is the content for my third article.</p>`}

};

function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
 var htmlTemplate = ` <html>
 <head>
    <title>
    ${title}
</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
<div class="container">
 <div>
    <a href="/">home</a>
</div>
<hr/>
<h3>
   ${heading}
</h3>
<div>
    ${date}
</div>
<div>
    ${content}
</div>
</div>
</body>
</html>
`;
return htmlTemplate;

}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter = 0;
app.get('/counter', function(req,res){
   counter = counter + 1; 
   res.send(counter.toString());
});


app.get('/:articleName',function(req,res){
    //articleName == articleOne
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var names=[];
app.get('/submit-name',function(req,res) { //url: /submit-name?name=xxxxx
    //get the name from the request
    var name=req.query.name;
    
    names.push(name);
    //JSON : javascript objrct notation
    res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
