---
title: "FetchEvent: replacesClientId-Eigenschaft"
short-title: replacesClientId
slug: Web/API/FetchEvent/replacesClientId
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`replacesClientId`** schreibgeschützte Eigenschaft der
{{domxref("FetchEvent")}}-Schnittstelle ist die {{domxref("Client.id", "ID")}} des
{{domxref("Client", "Clients")}}, der während einer Seiten-Navigation ersetzt wird.

Zum Beispiel ist beim Navigieren von Seite A zu Seite B `replacesClientId` die
ID des mit Seite A verbundenen Clients. Es kann ein leerer String sein, wenn von
`about:blank` zu einer anderen Seite navigiert wird, da der Client von `about:blank`
wiederverwendet wird, anstatt ersetzt zu werden.

Zusätzlich wird `replacesClientId` ein leerer String sein, wenn der Abruf keine Navigation ist. Dies könnte verwendet werden, um auf einen Client zuzugreifen/Kommunikation mit einem Client zu führen, der unmittelbar vor einer Navigation ersetzt wird.

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
