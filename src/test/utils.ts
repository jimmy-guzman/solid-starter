import { cleanup, render } from '@solidjs/testing-library'
import { afterEach } from 'vitest'

import type { JSX } from 'solid-js/jsx-runtime'

afterEach(() => {
  cleanup()
})

const customRender = (ui: () => JSX.Element, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  })

export * from '@solidjs/testing-library'
export { default as userEvent } from '@testing-library/user-event'

export { customRender as render }
