const sourceManager = {
  load(callback) {
    this.queue = new createjs.LoadQueue();
    this.queue.addEventListener('progress', callback);
    this.queue.loadManifest(this.manifest);

    return new Promise(resolve => {
      this.queue.addEventListener('complete', () => {
        this.queue.removeAllEventListeners();
        resolve();
      });
    });
  },
  getResult(name) {
    return this.queue.getResult(name);
  },
  manifest: [
    { id: 'bg', src: 'img/background.png' },
  ],
};

export default sourceManager;
