---
title: "FetchEvent: resultingClientId-Eigenschaft"
short-title: resultingClientId
slug: Web/API/FetchEvent/resultingClientId
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte Eigenschaft **`resultingClientId`** des
{{domxref("FetchEvent")}}-Interfaces ist die {{domxref("Client.id", "ID")}} des
{{domxref("Client", "Clients")}}, der den vorherigen Client während einer Seitennavigation ersetzt.

Zum Beispiel, wenn von Seite A zu Seite B navigiert wird, ist `resultingClientId`
die ID des Clients, der mit Seite B assoziiert ist.

Handelt es sich bei der Fetch-Anfrage um eine Subressourcenanfrage oder ist das
[`destination`](/de/docs/Web/API/Request/destination) der Anfrage
`report`, wird `resultingClientId` ein leerer String sein.

## Wert

Ein String.

## Beispiele

```js
self.addEventListener("fetch", (event) => {
  console.log(event.resultingClientId);
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
