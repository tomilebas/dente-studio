import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { C, F } from '../lib/constants'

const DIAS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do']
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const HORARIOS_SEMANA = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00']
const HORARIOS_SABADO = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30']
const OCUPADOS = new Set(['09:30', '10:30', '14:00', '16:00', '17:00'])

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)
const CheckIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

export default function CalendarioMock() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [diaSeleccionado, setDiaSeleccionado] = useState(null)
  const [horario, setHorario] = useState(null)
  const [confirmado, setConfirmado] = useState(false)
  const [especialista, setEspecialista] = useState('Dra. Valentina Ríos')

  const primerDia = new Date(year, month, 1).getDay()
  const primerDiaLun = (primerDia + 6) % 7
  const diasEnMes = new Date(year, month + 1, 0).getDate()

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
    reset()
  }
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
    reset()
  }
  const reset = () => { setDiaSeleccionado(null); setHorario(null); setConfirmado(false) }

  const cells = []
  for (let i = 0; i < primerDiaLun; i++) cells.push(null)
  for (let d = 1; d <= diasEnMes; d++) cells.push(d)

  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate())

  const getDateObj = (d) => new Date(year, month, d)
  const isPast = (d) => d && getDateObj(d) < todayStart
  const isSunday = (d) => d && getDateObj(d).getDay() === 0
  const isSaturday = (d) => d && getDateObj(d).getDay() === 6
  const isSelectable = (d) => d && !isPast(d) && !isSunday(d)
  const isToday = (d) => d && year === today.getFullYear() && month === today.getMonth() && d === today.getDate()

  const horarios = diaSeleccionado ? (isSaturday(diaSeleccionado) ? HORARIOS_SABADO : HORARIOS_SEMANA) : []

  const handleConfirmar = () => {
    if (diaSeleccionado && horario) setConfirmado(true)
  }

  const formatFecha = (d) => {
    const date = getDateObj(d)
    const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
    return `${dias[date.getDay()]} ${d} de ${MESES[month].toLowerCase()}`
  }

  const navBtnStyle = {
    background: 'none', border: 'none', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '32px', height: '32px', borderRadius: '8px',
    color: C.musgo, transition: 'background-color 0.15s',
    padding: 0,
  }

  if (confirmado) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          backgroundColor: C.blanco, borderRadius: '16px',
          border: `1px solid ${C.grisCla}`,
          boxShadow: '0 20px 60px rgba(46,64,54,0.08)',
          padding: '4rem 2rem',
          textAlign: 'center',
          maxWidth: '860px', margin: '0 auto',
          minHeight: '460px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.25rem',
        }}
      >
        <div style={{
          width: '72px', height: '72px', borderRadius: '50%',
          backgroundColor: `${C.arcilla}15`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: C.arcilla, marginBottom: '0.5rem',
        }}>
          <CheckIcon />
        </div>
        <h3 style={{ fontFamily: F.serif, fontSize: '2rem', fontStyle: 'italic', fontWeight: 400, color: C.musgo }}>
          Turno reservado
        </h3>
        <p style={{ fontFamily: F.sans, fontSize: '0.95rem', color: C.gris, lineHeight: 1.7 }}>
          {formatFecha(diaSeleccionado)} a las <strong style={{ color: C.musgo }}>{horario}</strong><br />
          con <strong style={{ color: C.musgo }}>{especialista}</strong>
        </p>
        <p style={{ fontFamily: F.sans, fontSize: '0.8rem', color: `${C.gris}99`, marginTop: '0.25rem' }}>
          Recibirás una confirmación por WhatsApp
        </p>
        <button
          onClick={() => { reset(); setYear(today.getFullYear()); setMonth(today.getMonth()) }}
          style={{
            marginTop: '1rem',
            fontFamily: F.sans, fontSize: '0.8rem', fontWeight: 600,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            backgroundColor: 'transparent', color: C.arcilla,
            border: `1.5px solid ${C.arcilla}`,
            padding: '0.65rem 1.5rem', borderRadius: '8px', cursor: 'pointer',
            transition: 'background-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = C.arcilla; e.currentTarget.style.color = C.blanco }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.arcilla }}
        >
          Reservar otro turno
        </button>
      </motion.div>
    )
  }

  return (
    <div style={{
      backgroundColor: C.blanco,
      borderRadius: '16px',
      border: `1px solid ${C.grisCla}`,
      boxShadow: '0 20px 60px rgba(46,64,54,0.08)',
      overflow: 'hidden',
      maxWidth: '860px',
      margin: '0 auto',
    }}>
      {/* Especialista selector */}
      <div style={{
        borderBottom: `1px solid ${C.grisCla}`,
        padding: '1.25rem 2rem',
        display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap',
      }}>
        <span style={{ fontFamily: F.sans, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gris }}>
          Especialista
        </span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['Dra. Valentina Ríos', 'Dr. Martín Ferré'].map(esp => (
            <button
              key={esp}
              onClick={() => setEspecialista(esp)}
              style={{
                fontFamily: F.sans, fontSize: '0.8rem', fontWeight: 500,
                padding: '0.4rem 1rem', borderRadius: '20px', cursor: 'pointer',
                border: `1.5px solid ${especialista === esp ? C.arcilla : C.grisCla}`,
                backgroundColor: especialista === esp ? `${C.arcilla}12` : 'transparent',
                color: especialista === esp ? C.arcilla : C.gris,
                transition: 'all 0.15s',
              }}
            >
              {esp}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', minHeight: '420px' }}>
        {/* Calendar panel */}
        <div style={{ flex: '0 0 55%', padding: '2rem', borderRight: `1px solid ${C.grisCla}` }}>
          {/* Month nav */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
            <button style={navBtnStyle} onClick={prevMonth}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = `${C.musgo}10`}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
              <ChevronLeft />
            </button>
            <span style={{ fontFamily: F.sans, fontSize: '0.95rem', fontWeight: 600, color: C.musgo }}>
              {MESES[month]} {year}
            </span>
            <button style={navBtnStyle} onClick={nextMonth}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = `${C.musgo}10`}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
              <ChevronRight />
            </button>
          </div>

          {/* Day headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '0.5rem' }}>
            {DIAS.map(d => (
              <div key={d} style={{ fontFamily: F.sans, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em', color: `${C.gris}99`, textAlign: 'center', paddingBottom: '0.5rem' }}>
                {d}
              </div>
            ))}
          </div>

          {/* Day grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '3px' }}>
            {cells.map((d, i) => {
              const selectable = isSelectable(d)
              const selected = d === diaSeleccionado
              const past = isPast(d)
              const sun = isSunday(d)
              const todayMark = isToday(d)

              return (
                <button
                  key={i}
                  onClick={() => { if (selectable) { setDiaSeleccionado(d); setHorario(null) } }}
                  disabled={!selectable}
                  style={{
                    fontFamily: F.sans, fontSize: '0.82rem', fontWeight: selected ? 600 : 400,
                    aspectRatio: '1',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '8px', border: 'none',
                    cursor: selectable ? 'pointer' : 'default',
                    backgroundColor: selected ? C.arcilla : todayMark ? `${C.arcilla}18` : 'transparent',
                    color: selected ? C.blanco : past || sun ? `${C.gris}40` : todayMark ? C.arcilla : C.musgo,
                    transition: 'background-color 0.15s, color 0.15s',
                    position: 'relative',
                  }}
                  onMouseEnter={e => { if (selectable && !selected) e.currentTarget.style.backgroundColor = `${C.arcilla}12` }}
                  onMouseLeave={e => { if (!selected) e.currentTarget.style.backgroundColor = todayMark ? `${C.arcilla}18` : 'transparent' }}
                >
                  {d || ''}
                </button>
              )
            })}
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
            {[
              { color: C.arcilla, label: 'Seleccionado' },
              { color: `${C.gris}40`, label: 'No disponible' },
            ].map(({ color, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: color }} />
                <span style={{ fontFamily: F.sans, fontSize: '0.68rem', color: C.gris }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Time slot panel — always visible */}
        <div style={{ flex: '0 0 45%', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <AnimatePresence mode="wait">
            {!diaSeleccionado ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: `${C.arcilla}12`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.arcilla} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <p style={{ fontFamily: F.sans, fontSize: '0.85rem', color: C.gris, textAlign: 'center', lineHeight: 1.6 }}>
                  Seleccioná un día<br />para ver los horarios
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="slots"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
              >
                <p style={{ fontFamily: F.sans, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.arcilla, marginBottom: '0.5rem' }}>
                  Horarios disponibles
                </p>
                <p style={{ fontFamily: F.sans, fontSize: '0.85rem', color: C.gris, marginBottom: '1.25rem', textTransform: 'capitalize' }}>
                  {formatFecha(diaSeleccionado)}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', flex: 1, alignContent: 'start' }}>
                  {horarios.map(h => {
                    const ocupado = OCUPADOS.has(h)
                    const seleccionado = h === horario
                    return (
                      <button
                        key={h}
                        onClick={() => !ocupado && setHorario(h)}
                        disabled={ocupado}
                        style={{
                          fontFamily: F.sans, fontSize: '0.82rem', fontWeight: 500,
                          padding: '0.6rem',
                          borderRadius: '8px',
                          border: `1.5px solid ${seleccionado ? C.arcilla : C.grisCla}`,
                          backgroundColor: seleccionado ? C.arcilla : ocupado ? C.crema : 'transparent',
                          color: seleccionado ? C.blanco : ocupado ? `${C.gris}50` : C.musgo,
                          cursor: ocupado ? 'default' : 'pointer',
                          transition: 'all 0.15s',
                          textDecoration: ocupado ? 'line-through' : 'none',
                        }}
                        onMouseEnter={e => { if (!ocupado && !seleccionado) e.currentTarget.style.borderColor = C.arcilla }}
                        onMouseLeave={e => { if (!seleccionado) e.currentTarget.style.borderColor = C.grisCla }}
                      >
                        {h}
                      </button>
                    )
                  })}
                </div>

                <button
                  onClick={handleConfirmar}
                  disabled={!horario}
                  style={{
                    marginTop: '1.5rem',
                    fontFamily: F.sans, fontSize: '0.85rem', fontWeight: 600,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    backgroundColor: horario ? C.musgo : C.grisCla,
                    color: horario ? C.blanco : C.gris,
                    padding: '0.9rem', borderRadius: '8px',
                    border: 'none', cursor: horario ? 'pointer' : 'default',
                    transition: 'background-color 0.2s',
                    width: '100%',
                  }}
                  onMouseEnter={e => { if (horario) e.currentTarget.style.backgroundColor = '#1d2b23' }}
                  onMouseLeave={e => { if (horario) e.currentTarget.style.backgroundColor = C.musgo }}
                >
                  Confirmar turno
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
