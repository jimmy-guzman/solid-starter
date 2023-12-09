import { clsx } from 'clsx'
import { mergeProps } from 'solid-js'

import { externalLinks } from '@/config/externalLinks'

type Variant = 'primary' | 'secondary' | 'accent'

interface XLinkProps {
  className?: string
  to: keyof typeof externalLinks
  variant?: Variant
  /**
   * Wether or no to show link as a button
   */
  asButton?: boolean
}

/**
 * Pre-configured Abstraction of [daisyUI's Link](https://daisyui.com/components/link) for externals links
 * * Update `src/components/XLink.config.ts` to add more links
 * @example
 * <XLink to='tailwindcss'>tailwindcss</XLink> // https://tailwindcss.com
 */
export const XLink = (_props: XLinkProps) => {
  const props = mergeProps({ asButton: false }, _props)

  return (
    <a
      href={externalLinks[props.to]}
      target='_blank'
      rel='noreferrer'
      class={clsx(
        props.asButton
          ? [
              'dsy-btn',
              {
                'dsy-btn-primary': props.variant === 'primary',
                'dsy-btn-secondary': props.variant === 'secondary',
                'dsy-btn-accent': props.variant === 'accent',
              },
            ]
          : [
              'dsy-link',
              {
                'dsy-link-primary': props.variant === 'primary',
                'dsy-link-secondary': props.variant === 'secondary',
                'dsy-link-accent': props.variant === 'accent',
              },
            ],
        props.className
      )}
    >
      {props.to} <span class='icon-[lucide--external-link]' />
    </a>
  )
}
