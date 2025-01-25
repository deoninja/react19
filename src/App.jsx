
const Card = ({title}) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const App =() => {


  return (
    <>
    <h2>Functional Arrow Component</h2>

    <Card title='Star Wars' />
    <Card title='Avatar'/>
    <Card title='Lion King'/>
    </>
    
  )
}

export default App
