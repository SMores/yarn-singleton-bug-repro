import { Schema } from 'prosemirror-model'
import { EditorState } from 'prosemirror-state'
import { isInstanceOfPMNode, isInstanceOfPMEditorState } from 'yarn-singleton-bug-repro-library'

const schema = new Schema({
  nodes: {
    doc: {},
    text: {}
  }
})

console.log(isInstanceOfPMNode(schema.nodes.doc.createAndFill()))
console.log(isInstanceOfPMEditorState(EditorState.create({ schema })))
