import logo from './logo.svg';
import './App.css';
import { FormCreate } from './components/FormCreate';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import FormList from './components/FormList';

store.subscribe(()=>console.log(store.getState()));


function App() {
  return (
    <>
      {/* <FormCreate /> */}
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={FormList} />
          </Switch>
        </BrowserRouter>
      </Provider>
    
    </>
  );
}

export default App;
