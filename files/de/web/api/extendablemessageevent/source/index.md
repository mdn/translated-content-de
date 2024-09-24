---
title: "ExtendableMessageEvent: source Eigenschaft"
short-title: source
slug: Web/API/ExtendableMessageEvent/source
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`source`** schreibgeschützte Eigenschaft der
{{domxref("ExtendableMessageEvent")}} Schnittstelle gibt eine Referenz auf das
{{domxref("Client")}} Objekt zurück, von dem die Nachricht gesendet wurde.

## Wert

Ein {{domxref("Client")}}, {{domxref("ServiceWorker")}} oder {{domxref("MessagePort")}}
Objekt.

## Beispiele

Wenn der folgende Code innerhalb eines Service Workers verwendet wird, um auf Push-Nachrichten zu reagieren, indem er die empfangenen Daten über {{domxref("PushMessageData")}} an den Hauptkontext über eine [Channel-Nachricht](/de/docs/Web/API/Channel_Messaging_API) sendet, wird das Ereignisobjekt von `onmessage` ein `ExtendableMessageEvent` sein.

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Channel Messaging](/de/docs/Web/API/Channel_Messaging_API)
