import clsx from 'clsx'

interface LogoProps {
  imgSrc: string
  link: string
  name: 'Solid' | 'tailwindcss' | 'TypeScript' | 'Vite'
}

const classes = {
  Vite: 'hover:drop-shadow-[0_0_2em_#646CFF]',
  Solid:
    'hover:drop-shadow-[0_0_2em_#76B3E1] animate-[spin_20s_linear_infinite]',
  TypeScript: 'hover:drop-shadow-[0_0_2em_#3178C6]',
  tailwindcss: 'hover:drop-shadow-[0_0_2em_#06B6D4]',
}

export const Logo = (props: LogoProps) => {
  return (
    <a href={props.link} target='_blank' rel='noreferrer'>
      <img
        src={props.imgSrc}
        class={clsx('h-24 transition duration-300', classes[props.name])}
        alt={`${props.name} logo`}
      />
    </a>
  )
}
