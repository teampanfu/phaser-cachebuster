# Cachebuster Plugin for Phaser 3

A simple Phaser Loader plugin that appends a query parameter to the URL of all loaded files to bypass the browser cache and deliver the latest version of the file.

## Getting the plugin: `npm` and `yarn`

[![npm](https://img.shields.io/npm/dt/@teampanfu/phaser-cachebuster?style=flat-square)](https://www.npmjs.com/package/@teampanfu/phaser-cachebuster)

The plugin is published on npm under `@teampanfu/phaser-cachebuster` and can be installed as follows:

```bash
# npm:
npm install @teampanfu/phaser-cachebuster --save

# yarn:
yarn add @teampanfu/phaser-cachebuster
```

You can then add it like this:

```js
// Assuming you use ES6 imports...
import CacheBustedLoader from '@teampanfu/phaser-cachebuster'
```

## Getting the plugin: Directly including it.

[![](https://data.jsdelivr.com/v1/package/npm/@teampanfu/phaser-cachebuster/badge)](https://www.jsdelivr.com/package/npm/@teampanfu/phaser-cachebuster)

Paste this into the `<head>` area of your HTML layout:

```html
<script src="//cdn.jsdelivr.net/npm/@teampanfu/phaser-cachebuster@latest/dist/cachebuster.min.js"></script>
```

## Usage

All you need to do is set the `cacheBuster` variable once. You can do this for example in the `preload` method:

```js
class Preload extends Phaser.Scene {
    preload() {
        this.load.cacheBuster = 'my-version';

        this.load.image('phaser', 'https://labs.phaser.io/assets/sprites/phaser.png');
    }
}
```

This would result in this URL: `https://labs.phaser.io/assets/sprites/phaser.png?v=my-version`

## Credits

* [Azerion's Phaser Cachebuster](https://github.com/azerion/phaser-cachebuster) for the base of the code.

## Contribute

If you find a bug or have a suggestion for a feature, feel free to create a new issue or open a pull request.

We are happy about every contribution!

## License

This package is open-source software licensed under the [MIT License](LICENSE).