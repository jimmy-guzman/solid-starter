import { cleanup, render } from '@solidjs/testing-library'
import userEvent from '@testing-library/user-event'
import { afterEach } from 'vitest'

import type { JSX } from 'solid-js/jsx-runtime'

afterEach(() => {
  cleanup()
})

const customRender = (ui: () => JSX.Element, options = {}) => {
  return {
    user: userEvent.setup(),
    ...render(ui, {
      wrapper: ({ children }) => children,
      ...options,
    }),
  }
}

export * from '@solidjs/testing-library'

export { customRender as render }
