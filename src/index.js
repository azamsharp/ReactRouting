import registerServiceWorker from './registerServiceWorker';

//import React
import React from 'react';
import ReactDOM from 'react-dom';

//import Styles
import './App.css';

//import React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//import Components
import App from './App';
import PageOne from './components/pageOne';
import PageTwo from './components/pageTwo';
import BaseLayout from './components/baseLayout';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/page_one" component={PageOne} />
        <Route path="/page_two" component={PageTwo} />
        <Route path="/" component={App}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  ,
  document.getElementById('root'));
registerServiceWorker();
