var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    console.log(queryData.id);
    if(_url == '/'){
      title = 'welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err,data){
      var description = data;
    })
    var template = `
    <!DOCTYPE html>
    <html>
    <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
    </head>

    <body>
      <h1><a href="/">WEB</a></h1>
    <ol>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=Javascript">Javascript</a></li>
    </ol>
    <h2>${title}</h2>
    <strong> dptmftkdghk1블로그 </strong> <u>html공부</u> 1일차 web 1일차 복습중
    <p><a href="https://www.w3.org/TR/2011/WD-html5-20110405/" target="_blank" title="﻿html5 specification">HyperText Markup Language</a>is the computer language that facilitates website creation. The language, which has code words and syntax just like any other language, is relatively easy to comprehend and, as time goes on, increasingly powerful in what it allows someone to create. HTML continues to evolve to meet the demands and requirements of the Internet under the guise of the World Wide Web Consortium, the organization that designs and maintains the language; for instance, with the transition to Web 2.0.</p>
    <img src="tree.jpg" width="100%">
    <p> HyperText is the method by which Internet users navigate the web. By clicking on special text called hyperlinks, users are brought to new pages. The use of hyper means it is not linear, so users can go anywhere on the Internet simply by clicking on the available links. Markup is what HTML tags do to the text inside of them; they mark it as a specific type of text. For example, markup text could come in the form of boldface or italicized type to draw specific attention to a word or phrase.
    </p>
    </body>
    </html>
    `;
    //console.log(__dirname + url);
    //C:\Users\황예슬\Desktop\WEB\My-first-web-site\WEB/1.html
    //C:\Users\황예슬\Desktop\WEB\My-first-web-site\WEB/tree.jpg
    response.end(template);

});
app.listen(3000);
