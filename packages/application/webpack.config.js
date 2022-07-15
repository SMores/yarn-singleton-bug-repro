import pnpNodeExternals from 'pnp-node-externals'

export default {
  entry: './index.js',
  output: {
    filename: 'packed.cjs',
  },
  target: 'node',
  externalsPresets: { node: true },
  externals: [
    pnpNodeExternals(),
  ]
}
