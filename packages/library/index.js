import { Node } from 'prosemirror-model'
import { EditorState } from 'prosemirror-state'

export function isInstanceOfPMNode(object) {
  return object instanceof Node
}

export function isInstanceOfPMEditorState(object) {
  return object instanceof EditorState
}
