---
title: "ExtendableMessageEvent: lastEventId-Eigenschaft"
short-title: lastEventId
slug: Web/API/ExtendableMessageEvent/lastEventId
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`lastEventID`** schreibgeschützte Eigenschaft des [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)-Interfaces stellt bei [Server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events) die ID des letzten Ereignisses der Ereignisquelle dar. Dies ist ein leerer String.

## Wert

Ein String.

## Beispiele

Wenn der folgende Code in einem Service Worker verwendet wird, um auf Push-Nachrichten zu antworten, indem die über [`PushMessageData`](/de/docs/Web/API/PushMessageData) empfangenen Daten über eine [Channel Message](/de/docs/Web/API/Channel_Messaging_API) an den Hauptkontext gesendet werden, wird das Ereignisobjekt von `onmessage` ein `ExtendableMessageEvent` sein.

```js
let port;

self.addEventListener("push", (e) => {
  const obj = e.data.json();

  if (obj.action === "subscribe" || obj.action === "unsubscribe") {
    port.postMessage(obj);
  } else if (obj.action === "init" || obj.action === "chatMsg") {
    port.postMessage(obj);
  }
});

self.onmessage = (e) => {
  console.log(e.lastEventId);
  port = e.ports[0];
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Channel Messaging](/de/docs/Web/API/Channel_Messaging_API)
