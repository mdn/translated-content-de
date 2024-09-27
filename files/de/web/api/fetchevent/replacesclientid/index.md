---
title: "FetchEvent: replacesClientId-Eigenschaft"
short-title: replacesClientId
slug: Web/API/FetchEvent/replacesClientId
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte Eigenschaft **`replacesClientId`** des [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Interfaces ist die [`id`](/de/docs/Web/API/Client/id) des [`client`](/de/docs/Web/API/Client), der während einer Seiten-Navigation ersetzt wird.

Zum Beispiel ist `replacesClientId` beim Navigieren von Seite A zu Seite B die ID des Clients, der mit Seite A verbunden ist. Es kann ein leerer String sein, wenn von `about:blank` zu einer anderen Seite navigiert wird, da der Client von `about:blank` wiederverwendet wird, anstatt ersetzt zu werden.

Zusätzlich wird `replacesClientId` ein leerer String sein, wenn der Fetch keine Navigation ist. Dies könnte verwendet werden, um auf einen Client zuzugreifen oder mit ihm zu kommunizieren, der unmittelbar vor einer Navigation ersetzt wird.

## Wert

Ein String.

## Beispiele

```js
self.addEventListener("fetch", (event) => {
  console.log(event.replacesClientId);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Workers verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
