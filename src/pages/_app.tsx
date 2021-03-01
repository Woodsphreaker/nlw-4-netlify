import GlobalStyles from '../../styles/globalStyles'
import ContextProvider from '../context/RootProvider'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}

export default MyApp
