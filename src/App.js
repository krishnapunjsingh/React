import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
       <div className="box">
         <div className="inner-box">
           <center><h1 className="h1">Login</h1></center>
           <div className="email1">
             <input type="text" placeHolder="Enter your email" className="email"></input>
             <input type="password" placeHolder="Enter your Password" className="email"></input>
           <a href="#" className="forget">Forget password</a>
          </div>
          <button className="submit">Submit</button>
          <button className="signin">Sign in</button>
       </div>
       </div>
    </div>
  );
}

export default App;
