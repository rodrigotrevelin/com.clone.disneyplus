import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteIcon = process.env.NEXT_PUBLIC_SITE_ICON;
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;

export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="description" content={siteDescription} />
          <meta charSet="UTF-8" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:image" content={siteIcon} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;600;800&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <div id='modal' />
          <NextScript />
        </body>
      </Html>
    );
  }
}
