export default class CacheBustedLoaderPlugin extends Phaser.Loader.LoaderPlugin {
    constructor(scene) {
        super(scene)
        this.cacheBuster = null
    }

    addFile(file) {
        if (!Array.isArray(file)) {
            file = [file]
        }

        if (this.cacheBuster) {
            file.forEach(item => {
                item.url += '?v=' + this.cacheBuster
            })
        }

        super.addFile(file)
    }
}

Phaser.Plugins.PluginCache.register('Loader', CacheBustedLoaderPlugin, 'load')