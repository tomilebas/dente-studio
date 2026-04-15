import { motion } from 'framer-motion'
import { C, F, CONTAINER, SECTION_PAD } from '../lib/constants'

const HORARIOS = [
  { dia: 'Lun — Vie', horario: '08:00 — 20:00' },
  { dia: 'Sábado',    horario: '09:00 — 14:00' },
  { dia: 'Domingo',   horario: 'Cerrado' },
]

export default function Ubicacion() {
  return (
    <section style={{ backgroundColor: C.crema, ...SECTION_PAD }}>
      <div style={CONTAINER}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="grid-cols-1 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <p style={{ fontFamily: F.sans, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.arcilla, marginBottom: '1rem' }}>
              Dónde encontrarnos
            </p>
            <h2 style={{ fontFamily: F.serif, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontStyle: 'italic', fontWeight: 400, color: C.musgo, lineHeight: 1.2, marginBottom: '2.5rem' }}>
              En el corazón<br /><span style={{ fontStyle: 'normal', fontWeight: 600 }}>de Rosario</span>
            </h2>

            <div style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontFamily: F.sans, fontWeight: 700, fontSize: '1.1rem', color: C.musgo, marginBottom: '0.3rem' }}>Corrientes 1550, Piso 3</p>
              <p style={{ fontFamily: F.sans, fontSize: '0.9rem', color: C.gris }}>Rosario, Santa Fe, Argentina</p>
            </div>

            <div>
              <p style={{ fontFamily: F.sans, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gris, marginBottom: '1.25rem' }}>
                Horarios de atención
              </p>
              {HORARIOS.map(({ dia, horario }) => (
                <div key={dia} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 0', borderBottom: `1px solid rgba(0,0,0,0.07)` }}>
                  <span style={{ fontFamily: F.sans, fontWeight: 500, fontSize: '0.9rem', color: C.musgo }}>{dia}</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: horario === 'Cerrado' ? '#BBBBBB' : C.carbon }}>{horario}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '1/1', boxShadow: '0 20px 50px rgba(46,64,54,0.1)' }}>
              <iframe
                title="Ubicación Dente Studio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107160.06!2d-60.7376!3d-32.9442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b652de52781b3d%3A0x52c3d39c57c11ba8!2sRosario%2C+Santa+Fe!5e0!3m2!1ses!2sar!4v1"
                width="100%" height="100%"
                style={{ border: 0, display: 'block', filter: 'saturate(0.7)' }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
