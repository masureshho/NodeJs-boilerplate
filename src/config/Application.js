import ExpressConfig  from './Express';
import { logger } from '../common/logger';
import { default as config } from 'config';

export default class Application {
  constructor()  {
    this.express = new ExpressConfig();
    const port = config.get('ports.http');
    // Start Webserver
    this.server = this.express.app.listen(port, () => {
      logger.info(`
        ------------
        Server Started!

        Http: http://localhost:${port}
        Health: http://localhost:${port}/ping

        API Docs: http://localhost:${port}/docs
        API Spec: http://localhost:${port}/api-docs

        Environment: ${process.env.NODE_ENV || 'Default'}
        ------------
      `);
    });
  }
}