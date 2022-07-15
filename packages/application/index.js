import { Schema } from 'prosemirror-model'
import { EditorState } from 'prosemirror-state'
import { isInstanceOfPMNode, isInstanceOfPMEditorState, canBeHydrated } from 'yarn-singleton-bug-repro-library'

const schema = new Schema({
  nodes: {
    doc: {},
    text: {}
  }
})

console.log(isInstanceOfPMNode(schema.nodes.doc.createAndFill()))
console.log(isInstanceOfPMEditorState(EditorState.create({ schema })))
console.log(canBeHydrated(schema, schema.nodes.doc.createAndFill().toJSON()))
