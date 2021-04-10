// Importing svelte store
import { writable } from 'svelte/store'
import { UnknownTheme } from '../../errors'

// Importing different themes
import DarkTheme from './themes/dark.theme'
import WhiteTheme from './themes/white.theme'

export default () => {
  // Default object
  let store = {
    // Default theme is Dark
    theme: DarkTheme(),

    // Themes list (and it's configurations)
    themes: [DarkTheme(), WhiteTheme()],
  }

  // Creating new store
  const { update, subscribe } = writable(store)

  // Returning our newly created store
  return {
    subscribe,

    // Function to change our theme
    changeTheme: (theme) => {
      return new Promise((resolve, reject) => {
        subscribe((store) => {
          if (store.themes.find((x) => x.id == theme)) {
            // Updating our store
            update((store) => {
              store.theme = store.themes.find((x) => x.id == theme)

              resolve(store)
            })
          } else {
            reject(UnknownTheme())
          }
        })
      })
    },
  }
}
