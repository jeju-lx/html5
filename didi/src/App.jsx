import {useState} from 'react';

function App() {
  const [did_time, set_did_time] = useState("");
  const [did_time2, set_did_time1] = useState("");

  function getdate()
  {
    const date = new Date();
    return date.toLocaleDateString('ko-KR') + ' ' + date.toLocaleTimeString('ko-KR');
    }

    function checkTime()
    {
      let current_time = getdate()
      set_did_time(current_time)
    }
  
    function checkTime2()
    {
      let current_time = getdate()
      set_did_time1(current_time)
    }
  
 
  return (
    <>
    <div className="center_div">
      <div>
    <button onClick={checkTime}>출/퇴근</button>
    </div>
    <div>
      {did_time}
      </div>
      <div>
       <button onClick={checkTime2}>차 문잠궜나?</button>
    </div>
    <div>
      {did_time2}
      </div>
      </div>
    </>
  )
}

export default App
