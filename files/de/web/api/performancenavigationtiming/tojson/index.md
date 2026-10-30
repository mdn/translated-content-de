---
title: "PerformanceNavigationTiming: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceNavigationTiming/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}

Die Methode **`toJSON()`** der Schnittstelle [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceNavigationTiming`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PerformanceNavigationTiming`-Objekt gefunden wird.

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
- [`unloadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventStart)
- [`unloadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd)
- [`domInteractive`](/de/docs/Web/API/PerformanceNavigationTiming/domInteractive)
- [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart)
- [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd)
- [`domComplete`](/de/docs/Web/API/PerformanceNavigationTiming/domComplete)
- [`loadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventStart)
- [`loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd)
- [`type`](/de/docs/Web/API/PerformanceNavigationTiming/type)
- [`redirectCount`](/de/docs/Web/API/PerformanceNavigationTiming/redirectCount)
- [`activationStart`](/de/docs/Web/API/PerformanceNavigationTiming/activationStart)
- [`criticalCHRestart`](/de/docs/Web/API/PerformanceNavigationTiming/criticalCHRestart)
- [`notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
- [`confidence`](/de/docs/Web/API/PerformanceNavigationTiming/confidence)

Der Wert jeder Eigenschaft wird unverändert übernommen. Wenn das zurückgegebene Objekt an {{jsxref("JSON.stringify()")}} übergeben wird, werden die Objekte im Array `serverTiming` sowie die Eigenschaften `notRestoredReasons` und `confidence` zusätzlich mit [`PerformanceServerTiming.toJSON()`](/de/docs/Web/API/PerformanceServerTiming/toJSON), [`NotRestoredReasons.toJSON()`](/de/docs/Web/API/NotRestoredReasons/toJSON) beziehungsweise [`PerformanceTimingConfidence.toJSON()`](/de/docs/Web/API/PerformanceTimingConfidence/toJSON) serialisiert, sofern sie nicht `null` sind.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `PerformanceNavigationTiming`-Objekt ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Seine Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.type); // Same value as entry.type
  });
});

observer.observe({ entryTypes: ["navigation"] });
```

### In einen JSON-String serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(entry));
```

Dadurch würde ein JSON-String wie der folgende protokolliert (zur besseren Lesbarkeit formatiert):

```json
{
  "name": "https://en.wikipedia.org/wiki/Main_Page",
  "entryType": "navigation",
  "startTime": 0,
  "duration": 228.25,
  "navigationId": 2463,
  "initiatorType": "navigation",
  "deliveryType": "",
  "nextHopProtocol": "h2",
  "renderBlockingStatus": "blocking",
  "contentType": "text/html",
  "contentEncoding": "gzip",
  "workerStart": 0,
  "redirectStart": 4.25,
  "redirectEnd": 71.25,
  "fetchStart": 71.25,
  "domainLookupStart": 71.25,
  "domainLookupEnd": 71.25,
  "connectStart": 71.25,
  "secureConnectionStart": 71.25,
  "connectEnd": 71.25,
  "requestStart": 74.25,
  "responseStart": 103.25,
  "firstInterimResponseStart": 0,
  "finalResponseHeadersStart": 103.25,
  "responseEnd": 105.25,
  "transferSize": 19464,
  "encodedBodySize": 19164,
  "decodedBodySize": 83352,
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
      "description": "cp3062"
    }
  ],
  "unloadEventStart": 0,
  "unloadEventEnd": 0,
  "domInteractive": 178.25,
  "domContentLoadedEventStart": 179.25,
  "domContentLoadedEventEnd": 179.25,
  "domComplete": 228.25,
  "loadEventStart": 228.25,
  "loadEventEnd": 228.25,
  "type": "navigate",
  "redirectCount": 1,
  "activationStart": 0,
  "criticalCHRestart": 0,
  "notRestoredReasons": null,
  "confidence": {
    "randomizedTriggerRate": 0.4994798,
    "value": "high"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
