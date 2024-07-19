
import './App.css'

import ClockSlogan from './Components/ClockSlogan'
import ClockTime from './Components/ClockTime'
import ClockHeading from './Components/Clockheading'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return <center className="Whole">
    <ClockHeading />
    <ClockSlogan />
    <ClockTime />
  </center>
}

export default App;
