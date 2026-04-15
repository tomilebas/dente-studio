import { motion } from 'framer-motion'
import { C, F, CONTAINER, SECTION_PAD, WA_URL } from '../lib/constants'
import CalendarioMock from './CalendarioMock'

const WA_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Reservar() {
  return (
    <section id="reservar" style={{ backgroundColor: C.blanco, ...SECTION_PAD }}>
      <div style={CONTAINER}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontFamily: F.sans, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: C.arcilla, marginBottom: '1rem' }}>
            Agendá online
          </p>
          <h2 style={{ fontFamily: F.serif, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontStyle: 'italic', fontWeight: 400, color: C.musgo, lineHeight: 1.15, marginBottom: '1rem' }}>
            Reservá tu turno<br />
            <span style={{ fontStyle: 'normal', fontWeight: 600 }}>en 2 minutos</span>
          </h2>
          <p style={{ fontFamily: F.sans, fontSize: '1rem', color: C.gris, maxWidth: '400px', margin: '0 auto', lineHeight: 1.7 }}>
            Sin esperas, sin llamadas. Elegí el tratamiento, el especialista y el horario que mejor te quede.
          </p>
        </motion.div>

        {/* Calendario interactivo */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
          <CalendarioMock />
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2.5rem' }}>
          <p style={{ fontFamily: F.sans, fontSize: '0.875rem', color: C.gris }}>
            ¿Preferís coordinar por WhatsApp?
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              backgroundColor: '#25D366', color: '#fff',
              fontFamily: F.sans, fontSize: '0.875rem', fontWeight: 600,
              padding: '0.85rem 2rem', borderRadius: '8px', textDecoration: 'none',
              transition: 'background-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1aad53'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#25D366'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            {WA_ICON} Escribinos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
