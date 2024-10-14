---
title: "PerformanceResourceTiming: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceResourceTiming/toJSON
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`toJSON()`**-Methode der Schnittstelle [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekts darstellt.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Darstellung des `PerformanceResourceTiming`-Objekts zurück.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "resource", buffered: true });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "name": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/31px-Commons-logo.svg.png",
  "entryType": "resource",
  "startTime": 110.80000001192093,
  "duration": 11.599999994039536,
  "initiatorType": "img",
  "nextHopProtocol": "h2",
  "renderBlockingStatus": "non-blocking",
  "workerStart": 0,
  "redirectStart": 0,
  "redirectEnd": 0,
  "fetchStart": 110.80000001192093,
  "domainLookupStart": 110.80000001192093,
  "domainLookupEnd": 110.80000001192093,
  "connectStart": 110.80000001192093,
  "connectEnd": 110.80000001192093,
  "secureConnectionStart": 110.80000001192093,
  "requestStart": 117.30000001192093,
  "responseStart": 120.40000000596046,
  "responseStatus": 200,
  "responseEnd": 122.40000000596046,
  "transferSize": 0,
  "encodedBodySize": 880,
  "decodedBodySize": 880,
  "serverTiming": [
    {
      "name": "cache",
      "duration": 0,
      "description": "hit-front"
    },
    {
      "name": "host",
      "duration": 0,
      "description": "cp3061"
    }
  ]
}
```

Um einen JSON-String zu erhalten, können Sie direkt [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
