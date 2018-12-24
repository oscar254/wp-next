import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()],
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <GlobalStyle />
      </html>
    );
  }
}
