---
title: "FetchEvent: resultingClientId-Eigenschaft"
short-title: resultingClientId
slug: Web/API/FetchEvent/resultingClientId
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`resultingClientId`**-Eigenschaft des
[`FetchEvent`](/de/docs/Web/API/FetchEvent)-Interfaces ist die [`id`](/de/docs/Web/API/Client/id) des
[`client`](/de/docs/Web/API/Client), der bei einer Seitennavigation den vorherigen Client ersetzt.

Zum Beispiel ist beim Navigieren von Seite A zu Seite B `resultingClientId` die ID des Clients, die mit Seite B verknüpft ist.

Wenn es sich bei der Fetch-Anfrage um eine Subressourcenanfrage handelt oder das
[`destination`](/de/docs/Web/API/Request/destination) der Anfrage `report` ist, wird `resultingClientId` ein leerer String sein.

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
