import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.pancakeswap.finance/contact-us',
        href: '#',
      },
      {
        label: t('Brand'),
        href: 'https://docs.pancakeswap.finance/brand',
        href: '#',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/pancakeswap',
        href: '#',
      },
      {
        label: t('Community'),
        href: 'https://docs.pancakeswap.finance/contact-us/telegram',
        href: '#',
      },
      {
        label: t('CAKE token'),
        href: 'https://docs.pancakeswap.finance/tokenomics/cake',
        href: '#',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://pancakeswap.creator-spring.com/',
        href: '#',
        isHighlighted: true,
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.pancakeswap.finance/contact-us/customer-support',
        href: '#',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.pancakeswap.finance/help/troubleshooting',
        href: '#',
      },
      {
        label: t('Guides'),
        href: 'https://docs.pancakeswap.finance/get-started',
        href: '#',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
        href: '#',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.pancakeswap.finance',
        href: '#',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.pancakeswap.finance/code/bug-bounty',
        href: '#',
      },
      {
        label: t('Audits'),
        href: 'https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
        href: '#',
      },
      {
        label: t('Careers'),
        href: 'https://docs.pancakeswap.finance/hiring/become-a-chef',
        href: '#',
      },
    ],
  },
]
