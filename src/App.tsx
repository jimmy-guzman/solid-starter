import { createSignal } from 'solid-js'

import solidLogo from './assets/solid.svg'
import tailwindcssLogo from './assets/tailwindcss.svg'
import typeScriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import { Logo } from './components/Logo'

const App = () => {
  const [count, setCount] = createSignal(0)

  return (
    <div class='container prose mx-auto p-4 text-center'>
      <div class='mb-8 flex items-center justify-center gap-8'>
        <Logo name='Vite' link='https://vitejs.dev' imgSrc={viteLogo} />
        <Logo name='Solid' link='https://docs.solidjs.com' imgSrc={solidLogo} />
        <Logo
          name='TypeScript'
          link='https://www.typescriptlang.org'
          imgSrc={typeScriptLogo}
        />
        <Logo
          name='tailwindcss'
          link='https://tailwindcss.com'
          imgSrc={tailwindcssLogo}
        />
      </div>
      <h1>Vite + Solid + TypeScript + tailwindcss</h1>
      <div>
        <button
          class='btn'
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Click on logos to learn more or visit the{' '}
        <a
          href='https://github.com/jimmy-guzman/solid-starter#solid-starter'
          target='_blank'
          rel='noreferrer'
        >
          repo
        </a>
      </p>
    </div>
  )
}

export default App
