---
title: "ExtendableMessageEvent: origin-Eigenschaft"
short-title: origin
slug: Web/API/ExtendableMessageEvent/origin
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`origin`** -Eigenschaft des [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)-Interfaces gibt den Ursprung des [`Client`](/de/docs/Web/API/Client) zurück, der die Nachricht gesendet hat.

## Wert

Ein String.

## Beispiele

Wenn der folgende Code innerhalb eines Service Workers verwendet wird, um auf Push-Nachrichten zu antworten, indem die über [`PushMessageData`](/de/docs/Web/API/PushMessageData) empfangenen Daten über eine [Channel-Nachricht](/de/docs/Web/API/Channel_Messaging_API) an den Hauptkontext gesendet werden, wird das Ereignisobjekt von `onmessage` ein `ExtendableMessageEvent` sein.

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
  console.log(e.origin);
  port = e.ports[0];
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispiel für Service Worker Code](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Channel Messaging](/de/docs/Web/API/Channel_Messaging_API)
