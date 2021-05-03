export {
  setActivePinia,
  createPinia,
  Pinia,
  PiniaStorePlugin,
  PiniaPluginContext,
} from './rootStore'
export { defineStore } from './store'
export { PiniaPlugin } from './plugin'
export {
  StateTree,
  Store,
  StoreDefinition,
  GenericStore,
  GenericStoreDefinition,
  StoreWithGetters,
  StoreWithActions,
  StoreWithState,
  PiniaCustomProperties,
} from './types'

export {
  mapActions,
  mapStores,
  mapState,
  mapWritableState,
  mapGetters,
  MapStoresCustomization,
  setMapStoreSuffix,
} from './mapHelpers'

// TODO: remove in beta
export { createStore } from './deprecated'
