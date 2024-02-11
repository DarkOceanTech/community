import { Html, Head, Main, NextScript } from 'next/document'
 
const Document = () => {
  return (
    <Html lang="en">
      <Head>
      <link
      rel="icon"
      type="image/png"
      href="https://websitecodefiles.blob.core.windows.net/media/dark-ocean-tech-favicon-32x32.png"
    />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;