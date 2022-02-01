import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }

    img.desktop-icon,
    img.mobile-icon {
      height: 65px !important;
      width: auto !important;
    }

    .dgtl-background {
      background: linear-gradient(to right, #273f99 0%, #2152bd 100%);
    }

    .swap-title {
      width: 100%;
      text-align: left;
    }

    .phising_display_none {
      display: none;
    }
  }
`

export default GlobalStyle
