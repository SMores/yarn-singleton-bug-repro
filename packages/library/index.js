const { Node } = require('prosemirror-model')
const { EditorState } = require('prosemirror-state')

function isInstanceOfPMNode(object) {
  return object instanceof Node
}

function isInstanceOfPMEditorState(object) {
  return object instanceof EditorState
}

function canBeHydrated(schema, nodeJson) {
  try {
    Node.fromJSON(schema, nodeJson)
    return true
  } catch {
    return false
  }
}

module.exports = {
  isInstanceOfPMEditorState,
  isInstanceOfPMNode,
  canBeHydrated
}
