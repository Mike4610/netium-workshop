import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="An example website made for the 'Jornadas' NetiUM 2023"
          key="desc"
        />
        <meta property="og:title" content="A social title for our cool page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
