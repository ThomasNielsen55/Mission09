import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (
    <div>
      <h1>welcome</h1>
      <p>
        This site has a big list of college basketball teams. Shown are the
        school names, mascot and location
      </p>
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div>
        <h1>
          -----------------------------------------------------------------------------
        </h1>
        <h2>School: {oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function ListTeams() {
  return (
    <div>
      {data.teams.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <ListTeams />
      <h1>
        -----------------------------------------------------------------------------
      </h1>
    </div>
  );
}

export default App;
