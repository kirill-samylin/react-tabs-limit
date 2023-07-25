import { v4 as UUID } from 'uuid'

const nameSessionStorage = 'tabId'
export function getSessionId() {
  let sessionTabId =  sessionStorage.getItem(nameSessionStorage)
  if (!sessionTabId) {
    sessionTabId = UUID()
    sessionStorage.setItem(nameSessionStorage, sessionTabId)
  }
  return sessionTabId
}
