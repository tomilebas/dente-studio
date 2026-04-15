// Paleta Organic Tech
export const C = {
  crema:   '#F2F0E9',
  musgo:   '#2E4036',
  arcilla: '#CC5833',
  carbon:  '#1A1A1A',
  blanco:  '#FFFFFF',
  gris:    '#6B7280',
  grisCla: '#E8E4DE',
}

// Fuentes
export const F = {
  sans:  "'Plus Jakarta Sans', sans-serif",
  serif: "'Cormorant Garamond', serif",
}

// Layout — inline styles garantizados
export const CONTAINER = {
  maxWidth: '1280px',
  margin: '0 auto',
  paddingLeft:  'clamp(1.5rem, 5vw, 5rem)',
  paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
}

export const SECTION_PAD = {
  paddingTop:    'clamp(5rem, 8vw, 9rem)',
  paddingBottom: 'clamp(5rem, 8vw, 9rem)',
}

export const WA_URL = 'https://wa.me/5493412754328'

export const NAV_LINKS = [
  { label: 'Servicios',    href: '#servicios' },
  { label: 'El equipo',    href: '#equipo' },
  { label: 'Resultados',   href: '#resultados' },
  { label: 'Reservar',     href: '#reservar' },
]

export const SERVICIOS = [
  {
    id: '01',
    nombre: 'Implantes dentales',
    desc: 'Solución permanente para piezas perdidas. Titanio grado médico, resultado natural.',
    precio: 'Desde $180.000',
    icon: '⬡',
  },
  {
    id: '02',
    nombre: 'Ortodoncia invisible',
    desc: 'Alineadores transparentes a medida. Sin brackets, sin molestias visibles.',
    precio: 'Desde $250.000',
    icon: '◇',
  },
  {
    id: '03',
    nombre: 'Blanqueamiento láser',
    desc: 'Hasta 8 tonos más claro en una sola sesión. Resultado inmediato y duradero.',
    precio: 'Desde $60.000',
    icon: '○',
  },
  {
    id: '04',
    nombre: 'Carillas de porcelana',
    desc: 'Transformación total de la sonrisa. Finas, naturales y ultrarresistentes.',
    precio: 'Desde $90.000 c/u',
    icon: '△',
  },
  {
    id: '05',
    nombre: 'Rehabilitación oral',
    desc: 'Tratamiento integral. Recuperamos función y estética en casos complejos.',
    precio: 'A consultar',
    icon: '□',
  },
]

export const EQUIPO = [
  {
    nombre: 'Dra. Valentina Moretti',
    rol: 'Directora & Implantóloga',
    bio: 'Especialista en implantología de la UNR. Formación en Barcelona y Milán. 12 años de experiencia.',
    foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
  },
  {
    nombre: 'Dr. Matías Correa',
    rol: 'Especialista en Ortodoncia',
    bio: 'Ortodoncista certificado. Experto en sistemas Invisalign y Spark. Docente universitario.',
    foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
  },
  {
    nombre: 'Dra. Lucía Herrera',
    rol: 'Estética dental',
    bio: 'Especialista en carillas y blanqueamiento. Formación en la Universidad Austral.',
    foto: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80',
  },
]

export const TESTIMONIOS = [
  {
    nombre: 'Martina G.',
    texto: 'Me hice las carillas de porcelana y el resultado superó todas mis expectativas. La Dra. Moretti fue increíblemente detallista. Me explico cada paso y el resultado es perfectamente natural.',
    servicio: 'Carillas de porcelana',
    estrellas: 5,
  },
  {
    nombre: 'Rodrigo P.',
    texto: 'Venía postergando el implante hace años por miedo. Acá me lo hicieron en una sola sesión, sin dolor. Al mes ya estaba comiendo normalmente. No lo puedo creer todavía.',
    servicio: 'Implante dental',
    estrellas: 5,
  },
  {
    nombre: 'Florencia B.',
    texto: 'La ortodoncia invisible cambió mi vida. Nadie en el trabajo se enteró que la usaba. En 10 meses terminé el tratamiento y estoy encantada con mi sonrisa.',
    servicio: 'Ortodoncia invisible',
    estrellas: 5,
  },
]

export const ANTES_DESPUES = [
  {
    antes: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e66?w=500&q=80',
    despues: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80',
    tratamiento: 'Carillas de porcelana',
  },
  {
    antes: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80',
    despues: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80',
    tratamiento: 'Blanqueamiento láser',
  },
]
