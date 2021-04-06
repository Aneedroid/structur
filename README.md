# Structur

Generate components for your front end application in a jiffy.

## Why?

I got tired of creating a number of files for a single react component in almost all of my projects.

I noticed that to use the other libraries in an existing project would be hard as it assumes a certain directory structure. I wanted to create a library which was not strictly opinionated on how the components are structured.

I wanted a module which would help me generate components which was not specific to a particular front-end library.

## Installation

```sh
npm install structur
```

## Usage

To generate components, `structur` requires a config file (structur.json) and a folder (templates) containing templates for your component related files.

You can either create these manually on your own or

Use
```
structur init
```

to generate a config file and a templates folder with default values.

Then use

```
structur create <component_name>
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
npm link structur
```

Once `linking` is done, you should be able to test out the library.

Make sure you `unlink` before switching branches and/or removing any node modules from the package itself.

```sh
npm unlink --no-save structur
cd ..
npm unlink
```

Make sure the order is maintained to avoid problems with `linking and unlinking`.


## License

MIT

