import './App.css';
import './styles.css'
import { Rating } from './components/Rating';
import { ThankYou } from './components/ThankYou';
import { useState } from 'react'

function App() {

  const [submit, setSubmit] = useState({value: 0, isSubmitted: false});
  return (
    <div className="wrapper">
      {submit.isSubmitted ? <ThankYou value={submit.value}/> : <Rating submit={submit} setSubmit={setSubmit} />}
    </div>
  );
}

export default App;
