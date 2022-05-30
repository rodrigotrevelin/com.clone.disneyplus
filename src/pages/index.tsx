import Head from 'next/head';
import { Default } from '../core/view/default';

export default function Home() {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>

      </Head>

      <Default />
    </>
  );
}
