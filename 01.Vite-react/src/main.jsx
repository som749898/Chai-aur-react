import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

function MyApp() {
  return (<>
    <a href='https://www.google.com/' target='_blank' rel="noreferrer">visit to google</a>
  </>)
}


/*const ReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
    rel :"noreferrer"
  },
  children: "visit to google"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)*/



/*const ReactContainer = (<a href='https://www.google.com/' target='_blank' rel="noreferrer">visit to google</a>);

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactContainer
)*/




/*const variable = "  Learn cool new technology";

const ReactContainer = React.createElement(
  "a",
  {
    href: "https://www.google.com/",
    target: "_blank",
    rel :"noreferrer"
  },
  "go to google", variable
)

ReactDOM.createRoot(document.getElementById('root')).render(ReactContainer);
*/

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);