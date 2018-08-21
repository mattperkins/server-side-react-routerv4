import 'babel-polyfill'
import express from 'express'
import * as React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './src/App'
import bodyParser from 'body-parser'

const app = express()
const PORT = process.env.PORT || 3000 

app.use(bodyParser.json())
app.use(express.static('build'))

app.get('*', (req, res) => {
 const context = {}
 const content = ReactDOMServer.renderToString(
  <StaticRouter location={req.url} context={context}>
   <App />
  </StaticRouter>
 )
 const html = `
 <html>
   <head>
    <body>
     <div id="root">
       ${content} 
     </div>
    </body> 
   </head> 
 </html> 
 `
 res.send(html) 
})

app.listen(PORT, () => {
console.log(`App running on ${PORT}`)
})