export default function Team() {
  const people = [
    { name:'Fatima K.', role:'Executive Director' },
    { name:'Jonas M.', role:'Programs Lead' },
    { name:'Priya S.', role:'Operations' },
    { name:'Board', role:'Governance & Strategy' },
  ]
  return (
    <main className="section">
      <div className="container grid">
        <h1 style={{gridColumn:'span 12'}}>Team & Board</h1>
        {people.map((p,i)=> (
          <div className="card" key={i}>
            <h3>{p.name}</h3>
            <p className="help">{p.role}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
