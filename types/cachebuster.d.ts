declare namespace Phaser.Loader {
    interface LoaderPlugin extends Phaser.Events.EventEmitter {
        /**
         * The string that will be appended as query parameter to all loaded files.
         * This can be for example a version number or a timestamp.
         */
        cacheBuster: string | number | null;
    }
}