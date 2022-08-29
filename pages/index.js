import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fry Blog</title>
        <link rel='shortcut icon' href='favicon.ico' />
      </Head>
      <div>
        <h1 className='text-4xl'>Hello There!!!!</h1>
      </div>
    </>
  );
}
