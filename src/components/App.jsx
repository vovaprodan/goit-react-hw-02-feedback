import Section from '../components/Section/Section '

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section good={3} neutral={2} bad={2}/>
    </div>
  );
};
