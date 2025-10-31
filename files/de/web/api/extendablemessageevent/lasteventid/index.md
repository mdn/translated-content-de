---
title: "ExtendableMessageEvent: lastEventId-Eigenschaft"
short-title: lastEventId
slug: Web/API/ExtendableMessageEvent/lastEventId
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`lastEventID`**-Eigenschaft des [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)-Interfaces, die nur lesbar ist, repräsentiert bei [server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events) die letzte Ereignis-ID der Ereignisquelle. Dies ist ein leerer String.

## Wert

Ein String.

## Beispiele

Wenn der folgende Code in einem Service Worker verwendet wird, um auf Push-Nachrichten zu reagieren, indem die empfangenen Daten über [`PushMessageData`](/de/docs/Web/API/PushMessageData) an den Hauptkontext über eine [Channel-Nachricht](/de/docs/Web/API/Channel_Messaging_API) gesendet werden, ist das Ereignisobjekt von `onmessage` ein `ExtendableMessageEvent`.

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

- [Arbeiten mit Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispiel für Service Worker-Code](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Channel Messaging](/de/docs/Web/API/Channel_Messaging_API)
