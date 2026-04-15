import { motion } from 'framer-motion'
import { EQUIPO, C, F, CONTAINER, SECTION_PAD } from '../lib/constants'

export default function Equipo() {
  return (
    <section id="equipo" style={{ backgroundColor: C.musgo, ...SECTION_PAD }}>
      <div style={CONTAINER}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: F.sans, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.arcilla, marginBottom: '1rem' }}>
            Quiénes somos
          </p>
          <h2 style={{ fontFamily: F.serif, fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontStyle: 'italic', fontWeight: 400, color: C.crema, lineHeight: 1.15 }}>
            Especialistas en<br />
            <span style={{ fontStyle: 'normal', fontWeight: 600 }}>tu bienestar</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {EQUIPO.map((m, i) => (
            <motion.div key={m.nombre}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }} viewport={{ once: true }}
              className="group"
            >
              <div style={{ borderRadius: '10px', overflow: 'hidden', aspectRatio: '3/4', marginBottom: '1.5rem' }}>
                <img src={m.foto} alt={m.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ paddingLeft: '1.25rem', borderLeft: `2px solid ${C.arcilla}` }}>
                <h3 style={{ fontFamily: F.sans, fontSize: '1.05rem', fontWeight: 700, color: C.crema, marginBottom: '0.25rem' }}>{m.nombre}</h3>
                <p style={{ fontFamily: F.sans, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.arcilla, marginBottom: '0.75rem' }}>{m.rol}</p>
                <p style={{ fontFamily: F.sans, fontSize: '0.85rem', color: 'rgba(242,240,233,0.55)', lineHeight: 1.65 }}>{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
