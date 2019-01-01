module.exports = {
  publicRuntimeConfig: {
    WP_API_URL: 'http://localhost:8080/wp-json',
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      });
    }
    return config;
  },
};
