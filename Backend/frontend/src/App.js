// Custom CSS
import './App.css';

// import components
import CarSubmit from './components/carSubmit';
import CarList from './components/carList';

function App() {

  return (
    <div className="App">
        {/* Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous">
        </link>
      {/* Main heading /*/}
      <h1> Cars MERN Crud App </h1>
      {/* Components */}
      <CarSubmit />
      <CarList />
    </div>
  );
}

export default App;
