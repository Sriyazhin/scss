import './App.css';
import logo from './assets/images/logo.jpg';

function App() {
  return (
    <div>
    <div className='maindiv'>
      <div className='Logo'>
        <img className='forimage' src={logo} alt='logoimage' />
      </div>
      <div className='forlinks'>
        <div className='boxtwo'>
          Home
        </div>
        <div className='boxthree'>
          About Us
        </div>
        <div className='boxfour'>
          React
        </div>
        <div className='boxfive'>
          Angular
        </div>
        <div className='boxsix'>
          Contact Us 
        </div>
      </div>
    </div>


    <div className='subdiv'>
      <div className='red'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <div>
      <button className='buttonone'>Click</button>
    </div>
    <div className='blue'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <div>
      <button className='buttontwo'>Click</button>
    </div>
    <div className='green'>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <div>
      <button className='buttonthree'>Click</button>
    </div>
    </div>
    </div>
    
  );
}

export default App;
