---
title: "FetchEvent: clientId-Eigenschaft"
short-title: clientId
slug: Web/API/FetchEvent/clientId
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`clientId`**-Eigenschaft des [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Interfaces gibt die ID des [`Client`](/de/docs/Web/API/Client) zurück, den der aktuelle Service Worker steuert.

Die Methode [`Clients.get()`](/de/docs/Web/API/Clients/get) könnte dann mit dieser ID aufgerufen werden, um den zugehörigen Client abzurufen.

## Wert

Ein String, der die Client-ID repräsentiert.

## Beispiele

```js
self.addEventListener("fetch", (event) => {
  console.log(event.clientId);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
