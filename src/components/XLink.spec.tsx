import { render, screen } from '@/test/utils'

import { XLink } from './XLink'

describe('XLink', () => {
  it.each([
    'Vite',
    'SolidJS',
    'TypeScript',
    'tailwindcss',
    'GitHub',
    'Deploy',
  ] as const)('should render %s link', async (to) => {
    const { unmount } = render(() => <XLink to={to} />)

    expect(await screen.findByRole('link', { name: to })).toBeInTheDocument()

    unmount()
  })
})
