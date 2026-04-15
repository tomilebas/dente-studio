import { motion } from 'framer-motion'
import { C, F, CONTAINER, WA_URL } from '../lib/constants'

const fadeUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }

export default function Hero() {
  return (
    <section style={{ backgroundColor: C.crema, minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative circle */}
      <div style={{
        position: 'absolute', right: '-8vw', top: '50%', transform: 'translateY(-50%)',
        width: 'clamp(300px, 55vw, 750px)', height: 'clamp(300px, 55vw, 750px)',
        borderRadius: '50%', backgroundColor: C.musgo, opacity: 0.06, pointerEvents: 'none',
      }} />

      <div style={{ ...CONTAINER, width: '100%', paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
          className="grid-cols-1 md:grid-cols-2">

          {/* Left — copy */}
          <div>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontFamily: F.sans, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.arcilla, marginBottom: '1.25rem' }}>
              Odontología de alta gama — Rosario
            </motion.p>

            <motion.h1 {...fadeUp} transition={{ duration: 0.7, delay: 0.3 }}
              style={{ fontFamily: F.serif, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.1, color: C.musgo, marginBottom: '1.5rem', fontSize: 'clamp(3rem, 5.5vw, 5.5rem)' }}>
              Tu sonrisa,<br />
              <span style={{ fontStyle: 'normal', fontWeight: 600 }}>rediseñada.</span>
            </motion.h1>

            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }}
              style={{ fontFamily: F.sans, fontSize: '1rem', lineHeight: 1.8, color: C.gris, maxWidth: '420px', marginBottom: '2.5rem' }}>
              Implantes, ortodoncia invisible y carillas de porcelana. Tratamientos de primer nivel en un ambiente que no se parece a ninguna clínica que hayas conocido.
            </motion.p>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.5 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#reservar" style={{
                fontFamily: F.sans, fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                backgroundColor: C.arcilla, color: C.blanco,
                padding: '0.9rem 2.25rem', borderRadius: '8px', textDecoration: 'none',
                transition: 'background-color 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#b04a2a'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = C.arcilla; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Reservar turno
              </a>
              <a href="#servicios" style={{
                fontFamily: F.sans, fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                backgroundColor: 'transparent', color: C.musgo,
                padding: '0.9rem 2.25rem', borderRadius: '8px', textDecoration: 'none',
                border: `1.5px solid ${C.musgo}`, opacity: 0.7,
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0.7}
              >
                Ver tratamientos
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.65 }}
              style={{ display: 'flex', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
              {[['12+', 'Años de experiencia'], ['2.400+', 'Pacientes tratados'], ['100%', 'Satisfacción']].map(([num, label]) => (
                <div key={label}>
                  <p style={{ fontFamily: F.serif, fontSize: '1.8rem', fontWeight: 600, color: C.musgo, lineHeight: 1 }}>{num}</p>
                  <p style={{ fontFamily: F.sans, fontSize: '0.72rem', color: C.gris, marginTop: '0.25rem', letterSpacing: '0.03em' }}>{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            style={{ position: 'relative' }} className="hidden md:block">
            <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/5', boxShadow: '0 40px 80px rgba(46,64,54,0.15)' }}>
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=85"
                alt="Clínica Dente Studio"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Floating card */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}
              style={{
                position: 'absolute', bottom: '-1.5rem', left: '-2rem',
                backgroundColor: C.blanco, borderRadius: '10px',
                padding: '1rem 1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
              }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: C.arcilla, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: C.blanco, fontSize: '1rem' }}>✓</span>
              </div>
              <div>
                <p style={{ fontFamily: F.sans, fontWeight: 700, fontSize: '0.875rem', color: C.musgo }}>Turno disponible hoy</p>
                <p style={{ fontFamily: F.sans, fontSize: '0.72rem', color: C.gris }}>Agendá en menos de 2 minutos</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
