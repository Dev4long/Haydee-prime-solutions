import { useInView } from '../hooks/useInView.js'

export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView()

  const classes = [
    'reveal',
    `reveal-${direction}`,
    inView ? 'reveal-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classes} style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}>
      {children}
    </Tag>
  )
}
