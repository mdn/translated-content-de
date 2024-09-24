---
title: "ExtendableMessageEvent: ports-Eigenschaft"
short-title: ports
slug: Web/API/ExtendableMessageEvent/ports
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`ports`** schreibgeschützte Eigenschaft des
{{domxref("ExtendableMessageEvent")}}-Interfaces gibt das Array zurück, das die
{{domxref("MessagePort")}}-Objekte repräsentiert, die die Ports des zugehörigen Nachrichtenkanals darstellen (den Kanal, durch den die Nachricht gesendet wird).

## Wert

Ein Array von {{domxref("MessagePort")}}-Objekten.

## Beispiele

Wenn der folgende Code innerhalb eines Service Workers verwendet wird, um auf Push-Nachrichten zu reagieren, indem er die empfangenen Daten über {{domxref("PushMessageData")}} an den Hauptkontext über eine [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API) sendet, wird das Ereignisobjekt von `onmessage` ein `ExtendableMessageEvent` sein.

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
- [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API)
