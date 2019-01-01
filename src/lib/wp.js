import WPAPI from 'wpapi';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { WP_API_URL } = publicRuntimeConfig;

export default new WPAPI({ endpoint: WP_API_URL });
