import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { BCMSImageConfig } from '@becomes/cms-most/frontend';

BCMSImageConfig.cmsOrigin =
  process.env.NEXT_PUBLIC_BCMS_API_ORIGIN ||
  'https://becomes-starter-projects.yourbcms.com';
BCMSImageConfig.publicApiKeyId =
  process.env.NEXT_PUBLIC_BCMS_API_PUBLIC_KEY_ID || '629dcd4dbcf5017354af6fe8';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
