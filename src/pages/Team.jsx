export default function Team() {
  const people = [
    { name:'Mr Ahmed D Kargbo', role:'President' },
    { name:'Mr Frank Bangura', role:'Vice President' },
    { name:'Alhaji Muctarr Jalloh', role:'Treasurer' },
    { name:'Mr Idriss Cont Kamara', role:'Public Relations Officer' },
    { name:'Mr Mohamed L Turay', role:'Welfare Officer' },
    { name:'Mr Kanja Jalloh', role:'Organizer' },
    { name:'Mr Ibrahim Kamara', role:'Deputy PRO' },
    { name:'Mrs Makalay Turay', role:'Women\'s Affairs Officer' },
    { name:'Mrs Alice Kuyateh', role:'Member' },
    { name:'Mrs Abie Kamara', role:'Deputy Organizer' },
    { name:'Alhaji Mohamed M Turay', role:'Secretary General' }
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
