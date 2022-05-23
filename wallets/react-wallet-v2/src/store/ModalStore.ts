import { ClientTypes, SessionTypes } from '@walletconnect/types'
import { proxy } from 'valtio'

/**
 * Types
 */
interface ModalData {
  proposal?: ClientTypes.EventArguments['session_proposal']
  requestEvent?: ClientTypes.EventArguments['session_request']
  requestSession?: SessionTypes.Struct
}

interface State {
  open: boolean
  view?:
    | 'SessionProposalModal'
    | 'SessionSignModal'
    | 'SessionSignTypedDataModal'
    | 'SessionSendTransactionModal'
    | 'SessionUnsuportedMethodModal'
    | 'SessionSignCosmosModal'
    | 'SessionSignSolanaModal'
  data?: ModalData
}

/**
 * State
 */
const state = proxy<State>({
  open: false
})

/**
 * Store / Actions
 */
const ModalStore = {
  state,

  open(view: State['view'], data: State['data']) {
    state.view = view
    state.data = data
    state.open = true
  },

  close() {
    state.open = false
  }
}

export default ModalStore
