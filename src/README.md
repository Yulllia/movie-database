# @firebase/auth

This is the Firebase Authentication component of the Firebase JS SDK.

**This package is not intended for direct usage, and should only be used via the officially supported [firebase](https://www.npmjs.com/package/firebase) package.**

## Testing

The modular Auth SDK has both unit tests and integration tests, along with a
host of npm scripts to run these tests. The most important commands are:

| Command | Description |
| ------- | ----------- |
| `yarn test` | This will run lint, unit tests, and integration tests against the live environment|
| `yarn test:<platform>` | Runs all browser tests, unit and integration |
| `yarn test:<platform>:unit` | Runs only \<platform> unit tests |
| `yarn test:<platform>:unit:debug` | Runs \<platform> unit tests, auto-watching for file system changes |
| `yarn test:<platform>:integration` | Runs only integration tests against the live environment |
| `yarn test:<platform>:integration:local` | Runs all headless \<platform> integration tests against the emulator (more below) |

Where \<platform> is "browser" or "node". There are also cordova tests, but they
are not broken into such granular details. Check out `package.json` for more.
