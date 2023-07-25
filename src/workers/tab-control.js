const connected = []

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('connect', event => {
  event.source.addEventListener('message', (messageEvent) => {

    if (!messageEvent?.data || typeof messageEvent.data !== 'string') {
      console.warn('Invalid message')
      return
    }
    const sessionId = messageEvent.data

    const position = connected.indexOf(sessionId)
    const isNewTab = position === -1

    if (isNewTab) {
      connected.push(sessionId)
    }

    const numberTab = isNewTab ? connected.length : position + 1

    event.source.postMessage({ sessionId, numberTab })

  }, false);

  event.source.start();
}, false);


///rq we rqw er
