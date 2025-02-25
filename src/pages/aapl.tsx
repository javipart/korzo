
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { AAPLView } from 'src/sections/aapl/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`AAPL - ${CONFIG.appName}`}</title>
      </Helmet>

      <AAPLView />
    </>
  );
}
