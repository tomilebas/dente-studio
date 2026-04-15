import { motion } from 'framer-motion'
import { TESTIMONIOS, C, F, CONTAINER, SECTION_PAD } from '../lib/constants'

function Stars({ n }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} style={{ color: C.arcilla, fontSize: '0.9rem' }}>★</span>
      ))}
    </div>
  )
}

export default function Testimonios() {
  return (
    <section style={{ backgroundColor: C.crema, ...SECTION_PAD }}>
      <div style={CONTAINER}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <p style={{ fontFamily: F.sans, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.arcilla, marginBottom: '1rem' }}>
            Lo que dicen nuestros pacientes
          </p>
          <h2 style={{ fontFamily: F.serif, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontStyle: 'italic', fontWeight: 400, color: C.musgo, lineHeight: 1.2 }}>
            Resultados que<br />
            <span style={{ fontStyle: 'normal', fontWeight: 600 }}>cambian vidas</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {TESTIMONIOS.map((t, i) => (
            <motion.div key={t.nombre}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
              style={{
                backgroundColor: C.blanco, borderRadius: '12px',
                padding: '2rem', border: `1px solid ${C.grisCla}`,
              }}
            >
              <Stars n={t.estrellas} />
              <p style={{ fontFamily: F.serif, fontSize: '1.05rem', fontStyle: 'italic', color: C.musgo, lineHeight: 1.7, marginBottom: '1.5rem' }}>
                "{t.texto}"
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontFamily: F.sans, fontSize: '0.875rem', fontWeight: 700, color: C.musgo }}>{t.nombre}</p>
                <span style={{ fontFamily: F.sans, fontSize: '0.7rem', color: C.arcilla, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {t.servicio}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
