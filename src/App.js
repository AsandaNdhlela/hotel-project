
import './App.css';


function App() {
  return (
    <div className="landing-page">

      <div className="card">
        <div className="card-info">

          <div className="left-img">

          </div>

          <div className="form">
            <form action="/action_page.php">
              <div className="heading"> Web Development Login</div>

              <div className="form-details">
                <input type="text" className="details" placeholder="Full name" required />
                <input type="email" className="details" placeholder="Email" required />
                <input type="password" className="details" placeholder="Password" required />
              </div>

              <div >
                <input id="login-btn" type="submit" value="Login" />
              </div>
            </form>
          </div>


        </div>
      </div>


    </div>
  );
}

export default App;
