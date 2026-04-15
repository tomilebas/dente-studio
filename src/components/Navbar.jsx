import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS, CONTAINER, C, F } from '../lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: scrolled ? 'rgba(242,240,233,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? `1px solid ${C.grisCla}` : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <nav style={{ ...CONTAINER, paddingTop: '1.25rem', paddingBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: F.serif, fontSize: '1.4rem', fontWeight: 600, color: C.musgo, letterSpacing: '0.02em' }}>
            Dente
          </span>
          <span style={{ fontFamily: F.serif, fontSize: '1.4rem', fontWeight: 400, fontStyle: 'italic', color: C.arcilla }}>
            {' '}Studio
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2.5rem', alignItems: 'center' }} className="hidden md:flex">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} style={{
                fontFamily: F.sans, fontSize: '0.8rem', fontWeight: 500,
                letterSpacing: '0.05em', textTransform: 'uppercase',
                color: C.musgo, textDecoration: 'none', opacity: 0.7,
                transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0.7}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#reservar" className="hidden md:block" style={{
          fontFamily: F.sans, fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          backgroundColor: C.arcilla, color: C.blanco,
          padding: '0.6rem 1.4rem', borderRadius: '6px', textDecoration: 'none',
          transition: 'background-color 0.2s, transform 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#b04a2a'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = C.arcilla; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Reservar turno
        </a>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
          aria-label="Menú"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1.5px', backgroundColor: C.musgo,
              transition: 'all 0.3s',
              transform: i === 0 && menuOpen ? 'rotate(45deg) translateY(6.5px)' : i === 2 && menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : '',
              opacity: i === 1 && menuOpen ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: C.crema, borderTop: `1px solid ${C.grisCla}`, overflow: 'hidden' }}>
            <div style={{ paddingLeft: 'clamp(1.5rem, 5vw, 5rem)', paddingRight: 'clamp(1.5rem, 5vw, 5rem)', paddingTop: '1.5rem', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: F.sans, fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', color: C.musgo, textDecoration: 'none', opacity: 0.8 }}>
                  {link.label}
                </a>
              ))}
              <a href="#reservar" onClick={() => setMenuOpen(false)} style={{
                fontFamily: F.sans, fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                backgroundColor: C.arcilla, color: C.blanco,
                padding: '0.9rem 1.5rem', borderRadius: '8px', textDecoration: 'none', textAlign: 'center', marginTop: '0.5rem',
              }}>
                Reservar turno
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
