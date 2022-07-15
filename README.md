# yarn-singleton-bug-repro

Attempting to reproduce a bug where sometimes Yarn provides different instances of prosemirror-model to different workspace packages in a monorepo. This bug manifests itself as instanceof checks failing across workspace boundaries, and prosemirror-model's `RangeError: Can not convert <paragraph> to a Fragment (looks like multiple versions of prosemirror-model were loaded)`.

Run the tests with `yarn start`. If the console logs are all `true`, there is no bug.
