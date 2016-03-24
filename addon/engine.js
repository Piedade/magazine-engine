import Engine from 'ember-engines/engine';
import Resolver from 'ember-engines/resolver';

export default Engine.extend({
  modulePrefix: 'magazine-engine',

  Resolver,

  dependencies: {
    services: [
      'blog-data',
      'session'
    ]
  }
});
