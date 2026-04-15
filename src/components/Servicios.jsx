import { motion } from 'framer-motion'
import { SERVICIOS, C, F, CONTAINER, SECTION_PAD } from '../lib/constants'

export default function Servicios() {
  return (
    <section id="servicios" style={{ backgroundColor: C.blanco, ...SECTION_PAD }}>
      <div style={CONTAINER}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: F.sans, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.arcilla, marginBottom: '1rem' }}>
            Nuestros tratamientos
          </p>
          <h2 style={{ fontFamily: F.serif, fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontStyle: 'italic', fontWeight: 400, color: C.musgo, lineHeight: 1.15, maxWidth: '520px' }}>
            Cada sonrisa merece<br />
            <span style={{ fontStyle: 'normal', fontWeight: 600 }}>un tratamiento único</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {SERVICIOS.map((s, i) => (
            <motion.div key={s.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}
              style={{
                backgroundColor: C.crema, borderRadius: '12px',
                padding: '2rem', border: `1px solid ${C.grisCla}`,
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(46,64,54,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontFamily: F.serif, fontSize: '1.8rem', color: C.arcilla, opacity: 0.6 }}>{s.icon}</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: C.gris, opacity: 0.5 }}>{s.id}</span>
              </div>
              <h3 style={{ fontFamily: F.sans, fontSize: '1.05rem', fontWeight: 700, color: C.musgo, marginBottom: '0.6rem' }}>{s.nombre}</h3>
              <p style={{ fontFamily: F.sans, fontSize: '0.875rem', color: C.gris, lineHeight: 1.65, marginBottom: '1.25rem' }}>{s.desc}</p>
              <p style={{ fontFamily: F.sans, fontSize: '0.8rem', fontWeight: 600, color: C.arcilla }}>{s.precio}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}
          style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <a href="#reservar" style={{
            fontFamily: F.sans, fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
            backgroundColor: C.musgo, color: C.blanco,
            padding: '0.9rem 2.25rem', borderRadius: '8px', textDecoration: 'none',
            transition: 'background-color 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3d5448'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = C.musgo; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Consultar por mi caso
          </a>
        </motion.div>
      </div>
    </section>
  )
}
