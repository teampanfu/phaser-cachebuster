declare namespace Phaser.Loader {
    interface LoaderPlugin extends Phaser.Events.EventEmitter {
        /**
         * The query parameter to append to the URL.
         */
        cacheBuster: string | number | null;
    }
}