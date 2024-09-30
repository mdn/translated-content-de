---
title: "PerformanceNavigationTiming: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PerformanceNavigationTiming/toJSON
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`toJSON()`**-Methode der [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle ist ein [Serialisierer](/de/docs/Glossary/Serialization); sie gibt eine JSON-Repräsentation des [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Objekts ist.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel liefert der Aufruf von `entry.toJSON()` eine JSON-Repräsentation des `PerformanceNavigationTiming`-Objekts.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ entryTypes: ["navigation"] });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "name": "https://en.wikipedia.org/wiki/Main_Page",
  "entryType": "navigation",
  "startTime": 0,
  "duration": 227.60000002384186,
  "initiatorType": "navigation",
  "nextHopProtocol": "h2",
  "renderBlockingStatus": "blocking",
  "workerStart": 0,
  "redirectStart": 4,
  "redirectEnd": 71.40000000596046,
  "fetchStart": 71.40000000596046,
  "domainLookupStart": 71.40000000596046,
  "domainLookupEnd": 71.40000000596046,
  "connectStart": 71.40000000596046,
  "connectEnd": 71.40000000596046,
  "secureConnectionStart": 71.40000000596046,
  "requestStart": 73.7000000178814,
  "responseStart": 102.90000000596046,
  "responseEnd": 105.2000000178814,
  "transferSize": 19464,
  "encodedBodySize": 19164,
  "decodedBodySize": 83352,
  "serverTiming": [
    {
      "name": "cache",
      "duration": 0,
      "description": "hit-front"
    },
    {
      "name": "host",
      "duration": 0,
      "description": "cp3062"
    }
  ],
  "unloadEventStart": 0,
  "unloadEventEnd": 0,
  "domInteractive": 178.10000002384186,
  "domContentLoadedEventStart": 178.2000000178814,
  "domContentLoadedEventEnd": 178.2000000178814,
  "domComplete": 227.60000002384186,
  "loadEventStart": 227.60000002384186,
  "loadEventEnd": 227.60000002384186,
  "type": "navigate",
  "redirectCount": 1,
  "activationStart": 0
}
```

Um einen JSON-String zu erhalten, können Sie direkt [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
