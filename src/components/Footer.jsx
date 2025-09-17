export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex', justifyContent:'space-between', gap:16, flexWrap:'wrap'}}>
        <div>© {new Date().getFullYear()} Nonprofit Name</div>
        <div>Built with <span className="badge">React</span> <span className="badge">Vite</span></div>
      </div>
    </footer>
  )
}
