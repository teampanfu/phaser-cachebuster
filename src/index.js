let cacheBuster = ''

export default class CacheBustedLoaderPlugin extends Phaser.Loader.LoaderPlugin {
    constructor(scene) {
        super(scene)
    }

    get cacheBuster() {
        return cacheBuster
    }

    set cacheBuster(version) {
        cacheBuster = version
    }

    addFile(file) {
        if (!Array.isArray(file)) {
            file = [file]
        }

        if (cacheBuster) {
            file.forEach(item => {
                item.url += '?v=' + cacheBuster
            })
        }

        super.addFile(file)
    }
}

Phaser.Plugins.PluginCache.register('Loader', CacheBustedLoaderPlugin, 'load')