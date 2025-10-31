---
title: "ExtendableMessageEvent: ports Eigenschaft"
short-title: ports
slug: Web/API/ExtendableMessageEvent/ports
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`ports`**-Eigenschaft des
[`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)-Interfaces gibt das Array zurück, das die
[`MessagePort`](/de/docs/Web/API/MessagePort)-Objekte enthält, die die Ports des zugehörigen Nachrichtenkanals darstellen (der Kanal, über den die Nachricht gesendet wird).

## Wert

Ein Array von [`MessagePort`](/de/docs/Web/API/MessagePort)-Objekten.

## Beispiele

Wenn der folgende Code innerhalb eines Service-Workers verwendet wird, um auf Push-Nachrichten zu reagieren, indem die empfangenen Daten über [`PushMessageData`](/de/docs/Web/API/PushMessageData) an den Hauptkontext über eine [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API)-Nachricht gesendet werden, ist das Ereignisobjekt von `onmessage` ein `ExtendableMessageEvent`.

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

- [Verwendung von Service-Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service-Worker einfaches Codebeispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API)
