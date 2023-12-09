import { createSignal } from 'solid-js'

import { XLink } from './components/XLink'

const App = () => {
  const [count, setCount] = createSignal(0)

  return (
    <div class='md:container md:mx-auto'>
      <div class='dsy-hero min-h-screen'>
        <div class='dsy-hero-content flex-col gap-8 lg:flex-row-reverse'>
          <div class='flex gap-4 lg:grid'>
            <div class='text-center'>
              <span class='icon-[logos--vitejs] text-center text-5xl sm:text-8xl' />
            </div>
            <div class='text-center'>
              <span class='icon-[logos--solidjs-icon] animate-[spin_20s_linear_infinite] text-5xl sm:text-8xl' />
            </div>
            <div class='text-center'>
              <span class='icon-[logos--typescript-icon] text-center text-5xl sm:text-8xl' />
            </div>
            <div>
              <span class='icon-[logos--tailwindcss-icon] text-5xl sm:text-8xl' />
            </div>
          </div>
          <div class='flex flex-col gap-4'>
            <h1 class='inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-8xl font-bold text-transparent'>
              Solid Starter
            </h1>
            <p class='py-6'>
              🍱 Another opinionated <XLink to='SolidJS' /> Starter using{' '}
              <XLink to='Vite' />, <XLink to='TypeScript' /> and{' '}
              <XLink to='tailwindcss' />.
            </p>
            <div class='flex justify-center gap-2 sm:justify-end'>
              <button
                class='dsy-btn dsy-btn-neutral'
                onClick={() => {
                  setCount((prevCount) => prevCount + 1)
                }}
              >
                Count is {count()}
              </button>
              <XLink to='Deploy' variant='secondary' asButton />
              <XLink to='GitHub' variant='primary' asButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
