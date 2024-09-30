---
title: "ExtendableMessageEvent: source Eigenschaft"
short-title: source
slug: Web/API/ExtendableMessageEvent/source
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`source`**-Eigenschaft der [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)-Schnittstelle gibt eine Referenz auf das [`Client`](/de/docs/Web/API/Client)-Objekt zurück, von dem die Nachricht gesendet wurde.

## Wert

Ein [`Client`](/de/docs/Web/API/Client), [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) oder [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekt.

## Beispiele

Wenn der folgende Code in einem Service Worker verwendet wird, um auf Push-Nachrichten zu reagieren, indem die über [`PushMessageData`](/de/docs/Web/API/PushMessageData) empfangenen Daten über eine [Kanalnachricht](/de/docs/Web/API/Channel_Messaging_API) an den Hauptkontext gesendet werden, wird das Ereignisobjekt von `onmessage` ein `ExtendableMessageEvent` sein.

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Kanalnachrichten](/de/docs/Web/API/Channel_Messaging_API)
