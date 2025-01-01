import RoutingPage from './components/RoutePage';
import MyContextProvider from './contextApi/MyContextProvider';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <RoutingPage></RoutingPage>
      </MyContextProvider>
    </div>
  );
}

export default App;
