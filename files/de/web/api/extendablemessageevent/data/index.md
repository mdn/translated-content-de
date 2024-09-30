---
title: "ExtendableMessageEvent: data-Eigenschaft"
short-title: data
slug: Web/API/ExtendableMessageEvent/data
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`data`** schreibgeschützte Eigenschaft des [`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent)-Interface gibt die Daten des Ereignisses zurück. Diese können von jedem Datentyp sein.

## Wert

Jeder Datentyp.

## Beispiele

Wenn der folgende Code in einem Service Worker verwendet wird, um auf Push-Nachrichten zu reagieren, indem die empfangenen Daten über [`PushMessageData`](/de/docs/Web/API/PushMessageData) über eine [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API) an den Hauptkontext gesendet werden, wird das Ereignisobjekt von `onmessage` ein `ExtendableMessageEvent` sein.

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
  console.log(e.data);
  port = e.ports[0];
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker einfaches Codebeispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API)
