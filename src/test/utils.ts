import { cleanup, render } from '@solidjs/testing-library'
import { userEvent } from '@testing-library/user-event'
import { type JSX } from 'solid-js/jsx-runtime'
import { afterEach } from 'vitest'

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

export { renderHook, screen, within } from '@solidjs/testing-library'

export { customRender as render }
