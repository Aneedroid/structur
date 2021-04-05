# React-generate-components

Generate react components for your react app.

## Why?

I got tired of creating a number of files for a single react component in almost all of my projects.

## Installation

```sh
npm install react-generate-components
```

## Usage

To generate components, rgc requires a config file (rgc.json) and a folder (rgc-templates) containing templates for your component related files.

You can either create these manually on your own or

Use
```
rgc init
```

to generate a config file and a templates folder with default values.

Then use

```
create <component_name>
```

## Development
`src` folder contains the source code for the library.

Use the `demo` folder to test out the changes made.

First, use `npm link` to create a symlink in the global folder for the library.

```sh
npm link
```

Now from `demo` just run the following to use the library,

```sh
cd demo
npm link react-generate-components
```

Once `linking` is done, you should be able to test out the library.

Make sure you `unlink` before switching branches and/or removing any node modules from the package itself.

```sh
npm unlink --no-save react-generate-components
cd ..
npm unlink
```

Make sure the order is maintained to avoid problems with `linking and unlinking`.


## License

MIT

**Free Software, Hell Yeah!**
