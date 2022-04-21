export default class CacheBustedLoaderPlugin extends Phaser.Loader.LoaderPlugin {
    constructor(scene) {
        super(scene)
        this.cacheBuster = null
    }

    addFile(file) {
        if (this.cacheBuster) {
            file.url += '?v=' + this.cacheBuster
        }

        super.addFile(file)
    }
}

Phaser.Plugins.PluginCache.register('Loader', CacheBustedLoaderPlugin, 'load')