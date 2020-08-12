import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Base Next Website</title>
        <meta
          name="description"
          content="This is a base nextjs template for website"
        ></meta>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
