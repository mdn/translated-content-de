---
title: "ExtendableMessageEvent: source-Eigenschaft"
short-title: source
slug: Web/API/ExtendableMessageEvent/source
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`source`** schreibgeschützte Eigenschaft der [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)-Schnittstelle gibt eine Referenz auf das [`Client`](/de/docs/Web/API/Client)-Objekt zurück, von dem die Nachricht gesendet wurde.

## Wert

Ein [`Client`](/de/docs/Web/API/Client)-, [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)- oder [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt.

## Beispiele

Wenn der folgende Code innerhalb eines Service Workers verwendet wird, um auf Push-Nachrichten zu reagieren, indem die empfangenen Daten über [`PushMessageData`](/de/docs/Web/API/PushMessageData) an den Hauptkontext über eine [Channel-Messaging](/de/docs/Web/API/Channel_Messaging_API) gesendet werden, ist das Ereignisobjekt von `onmessage` ein `ExtendableMessageEvent`.

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
  console.log(e.source);
  port = e.ports[0];
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispiel für Service Worker Code](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Channel Messaging](/de/docs/Web/API/Channel_Messaging_API)
