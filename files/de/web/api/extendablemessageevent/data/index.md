---
title: "ExtendableMessageEvent: data-Eigenschaft"
short-title: data
slug: Web/API/ExtendableMessageEvent/data
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`data`**-Eigenschaft des nur lesbaren Interfaces
[`ExtendableMessageEvent`](/de/docs/Web/API/ExtendableMessageEvent) gibt die Daten des Ereignisses zurück. Diese können jeden beliebigen Datentyp haben.

## Wert

Jeder Datentyp.

## Beispiele

Wenn der folgende Code innerhalb eines Service Workers verwendet wird, um auf Push-Nachrichten zu reagieren, indem die über [`PushMessageData`](/de/docs/Web/API/PushMessageData) empfangenen Daten über eine [Kanalnachricht](/de/docs/Web/API/Channel_Messaging_API) an den Hauptkontext gesendet werden, wird das Ereignisobjekt von `onmessage` ein `ExtendableMessageEvent` sein.

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Kanalnachrichten](/de/docs/Web/API/Channel_Messaging_API)
