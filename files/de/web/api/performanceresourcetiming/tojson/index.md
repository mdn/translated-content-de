---
title: "PerformanceResourceTiming: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceResourceTiming/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die Methode **`toJSON()`** der Schnittstelle [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceResourceTiming`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PerformanceResourceTiming`-Objekt verarbeitet wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`name`](/de/docs/Web/API/PerformanceEntry/name)
- [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)
- [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime)
- [`duration`](/de/docs/Web/API/PerformanceEntry/duration)
- [`navigationId`](/de/docs/Web/API/PerformanceEntry/navigationId)
- [`initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType)
- [`deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType)
- [`nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol)
- [`renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus)
- [`contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType)
- [`contentEncoding`](/de/docs/Web/API/PerformanceResourceTiming/contentEncoding)
- [`workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart)
- [`redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart)
- [`redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd)
- [`fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart)
- [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart)
- [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd)
- [`connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart)
- [`secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart)
- [`connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd)
- [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart)
- [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart)
- [`firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart)
- [`finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart)
- [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd)
- [`workerRouterEvaluationStart`](/de/docs/Web/API/PerformanceResourceTiming/workerRouterEvaluationStart)
- [`workerCacheLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/workerCacheLookupStart)
- [`workerMatchedRouterSource`](/de/docs/Web/API/PerformanceResourceTiming/workerMatchedRouterSource)
- [`workerFinalRouterSource`](/de/docs/Web/API/PerformanceResourceTiming/workerFinalRouterSource)
- [`transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize)
- [`encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize)
- [`decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize)
- [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus)
- [`serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming)

Der Wert jeder Eigenschaft wird unverändert übernommen. Wenn das zurückgegebene Objekt an {{jsxref("JSON.stringify()")}} übergeben wird, werden die Objekte im `serverTiming`-Array zusätzlich mit [`PerformanceServerTiming.toJSON()`](/de/docs/Web/API/PerformanceServerTiming/toJSON) serialisiert.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `PerformanceResourceTiming`-Objekt ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.initiatorType); // Same value as entry.initiatorType
  });
});

observer.observe({ type: "resource", buffered: true });
```

### In eine JSON-Zeichenfolge serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(entry));
```

Dadurch würde eine JSON-Zeichenfolge wie die folgende protokolliert (zur besseren Lesbarkeit formatiert):

```json
{
  "name": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/31px-Commons-logo.svg.png",
  "entryType": "resource",
  "startTime": 111.25,
  "duration": 11.5,
  "navigationId": 2463,
  "initiatorType": "img",
  "deliveryType": "cache",
  "nextHopProtocol": "h2",
  "renderBlockingStatus": "non-blocking",
  "contentType": "image/png",
  "contentEncoding": "",
  "workerStart": 0,
  "redirectStart": 0,
  "redirectEnd": 0,
  "fetchStart": 111.25,
  "domainLookupStart": 111.25,
  "domainLookupEnd": 111.25,
  "connectStart": 111.25,
  "secureConnectionStart": 111.25,
  "connectEnd": 111.25,
  "requestStart": 117.25,
  "responseStart": 120.25,
  "firstInterimResponseStart": 0,
  "finalResponseHeadersStart": 120.25,
  "responseEnd": 122.75,
  "transferSize": 0,
  "encodedBodySize": 880,
  "decodedBodySize": 880,
  "responseStatus": 200,
  "serverTiming": [
    {
      "name": "cache",
      "duration": 0.25,
      "description": "hit-front"
    },
    {
      "name": "host",
      "duration": 0.5,
      "description": "cp3061"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
