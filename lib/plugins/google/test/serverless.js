'use strict';

class Serverless {
  constructor() {
    this.providers = {};

    this.classes = {};
    this.classes.Error = Error;

    this.cli = {
      log: () => {},
    };
  }

  setProvider(name, provider) {
    this.providers[name] = provider;
  }

  getProvider(name) {
    return this.providers[name] ? this.providers[name] : false;
  }
}

module.exports = Serverless;
