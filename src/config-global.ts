import packageJson from '../package.json';

// ----------------------------------------------------------------------

export type ConfigValue = {
  appName: string;
  appVersion: string;
  apiKey: string;
  clientId: string
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  appName: 'KORZO AI',
  appVersion: packageJson.version,
  apiKey: import.meta.env.VITE_API_KEY,
  clientId: import.meta.env.VITE_CLIENT_ID,
};
