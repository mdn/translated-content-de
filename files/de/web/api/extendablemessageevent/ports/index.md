---
title: "ExtendableMessageEvent: ports-Eigenschaft"
short-title: ports
slug: Web/API/ExtendableMessageEvent/ports
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`ports`** schreibgeschützte Eigenschaft des
[`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)-Interfaces gibt das Array zurück, das die
[`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte enthält, die die Ports des assoziierten Nachrichtenkanals darstellen
(der Kanal, über den die Nachricht gesendet wird.)

## Wert

Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten.

## Beispiele

Wenn der folgende Code in einem Service Worker verwendet wird, um auf Push-Nachrichten zu antworten, indem die empfangenen Daten über [`PushMessageData`](/de/docs/Web/API/PushMessageData) an den Hauptkontext über eine [Kanalnachricht](/de/docs/Web/API/Channel_Messaging_API) gesendet werden, ist das Ereignisobjekt von `onmessage` ein `ExtendableMessageEvent`.

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Kanalnachrichten](/de/docs/Web/API/Channel_Messaging_API)
