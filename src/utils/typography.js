import Typography from 'typography'
import Alton from 'typography-theme-alton'

Object.assign(Alton, {
    baseFontSize: '18px',
    headerFontFamily: ['Lato', 'Helvetica', 'sans-serif'],
    bodyFontFamily: ['Lora', 'Georgia', 'serif'],
    // we load fonts ourselves
    googleFonts: [],
    overrideThemeStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
        h1: {
            fontFamily: ['Playfair Display', 'Georgia', 'serif'].join(','),
        },
        'a.gatsby-resp-image-link': {
            boxShadow: `none`,
        },
    })
})

const typography = new Typography(Alton)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
