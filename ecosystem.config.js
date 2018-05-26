module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    {
      name      : 'mandragora-element',
      script    : './server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'kraken',
      host : '185.228.233.71',
      ref  : 'origin/deploy',
      repo : 'https://github.com/AntonGoldobin/Mandragora-Element.git',
      path : '/home/kraken/apps/mandragora',
      'post-deploy' : 'yarn install && yarn run build && cp dist/static/css/*.css dist/mandragora.css && pm2 reload ecosystem.config.js --env production'
    }
  }
};
