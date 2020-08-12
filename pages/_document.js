import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "../includes/Footer";

class BaseDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}

export default BaseDocument;
