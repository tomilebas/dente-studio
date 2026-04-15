import { C, F, CONTAINER, WA_URL } from '../lib/constants'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: C.musgo, paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
      <div style={{ ...CONTAINER, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', textAlign: 'center' }}>
        <div>
          <span style={{ fontFamily: F.serif, fontSize: '1.3rem', fontWeight: 600, color: C.crema }}>Dente</span>
          <span style={{ fontFamily: F.serif, fontSize: '1.3rem', fontWeight: 400, fontStyle: 'italic', color: C.arcilla }}> Studio</span>
        </div>
        <p style={{ fontFamily: F.sans, fontSize: '0.75rem', color: 'rgba(242,240,233,0.4)' }}>
          © 2025 Dente Studio — Rosario, Santa Fe
        </p>
        <p style={{ fontFamily: F.sans, fontSize: '0.65rem', color: 'rgba(242,240,233,0.2)', letterSpacing: '0.08em' }}>
          Diseñado por{' '}
          <span style={{ color: 'rgba(204,88,51,0.7)' }}>Deimos Studio</span>
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { label: 'Instagram', href: 'https://instagram.com' },
            { label: 'WhatsApp', href: WA_URL },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: F.sans, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(242,240,233,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = C.arcilla}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,240,233,0.4)'}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
