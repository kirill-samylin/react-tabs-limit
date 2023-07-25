import {tabControlWorker} from "../workers";
import {getSessionId} from "../utils/getSessionId";
import {useCallback, useLayoutEffect, useState} from "react";

const sessionId = getSessionId()

export type WorkerMessage = { sessionId: string, numberTab: number }
export function useFirstTabControl() {
  const [position, setPosition] = useState<number>(0);

  const onMessage = useCallback(
    (eventMessage: MessageEvent<WorkerMessage>) => {
      if (eventMessage.data.sessionId === sessionId) {
        setPosition(eventMessage.data.numberTab)
      }
    },
    [],
  );

  useLayoutEffect(() => {
    tabControlWorker.port.addEventListener('message', onMessage, false);
    tabControlWorker.port.start()
    tabControlWorker.port.postMessage(sessionId);
  }, [onMessage])

  return position < 2
}
