import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Dalhousie</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#academics">Academics</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {/* the text is taken from dalhousie university website and link of the website is https://www.dal.ca/ */}
        <section id="about">
          <h2>About Us</h2>
          <p>Welcome to Dalhousie University! Dalhousie University combines exceptional student experience, high-impact research, and a deep sense of social responsibility in Nova Scotia, Canada.</p>
        </section>
        <section id="academics">
          <h2>Our Programs</h2>
          <p>Interested in learning more about Dalhousie? Check out Dalhousie's viewbook to explore program options, academic requirements and more.</p>
        </section>
        <section id="admissions">
          <h2>Admissions</h2>
          <p>You're applying to an undergraduate program. Review admission requirements, important deadlines and more.</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>
For emergencies call 911 then Dal Security at 902-494-4109 (Halifax campuses) or 902-893-4190 (Truro campus)</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Dalhousie University. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
