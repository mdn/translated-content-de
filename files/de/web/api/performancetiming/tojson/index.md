---
title: "PerformanceTiming: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceTiming/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle ist in der [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) als veraltet eingestuft. Verwenden Sie stattdessen die Schnittstelle [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming).

Die Methode **`toJSON()`** der Schnittstelle [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) gibt ein JSON-serialisierbares, einfaches Objekt zurück, das das `PerformanceTiming`-Objekt repräsentiert.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PerformanceTiming`-Objekt verarbeitet wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares, einfaches Objekt mit den folgenden Eigenschaften:

- [`connectStart`](/de/docs/Web/API/PerformanceTiming/connectStart)
- [`navigationStart`](/de/docs/Web/API/PerformanceTiming/navigationStart)
- [`secureConnectionStart`](/de/docs/Web/API/PerformanceTiming/secureConnectionStart)
- [`fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart)
- [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventStart)
- [`responseStart`](/de/docs/Web/API/PerformanceTiming/responseStart)
- [`domInteractive`](/de/docs/Web/API/PerformanceTiming/domInteractive)
- [`domainLookupEnd`](/de/docs/Web/API/PerformanceTiming/domainLookupEnd)
- [`responseEnd`](/de/docs/Web/API/PerformanceTiming/responseEnd)
- [`redirectStart`](/de/docs/Web/API/PerformanceTiming/redirectStart)
- [`requestStart`](/de/docs/Web/API/PerformanceTiming/requestStart)
- [`unloadEventEnd`](/de/docs/Web/API/PerformanceTiming/unloadEventEnd)
- [`unloadEventStart`](/de/docs/Web/API/PerformanceTiming/unloadEventStart)
- [`domLoading`](/de/docs/Web/API/PerformanceTiming/domLoading)
- [`domComplete`](/de/docs/Web/API/PerformanceTiming/domComplete)
- [`domainLookupStart`](/de/docs/Web/API/PerformanceTiming/domainLookupStart)
- [`loadEventStart`](/de/docs/Web/API/PerformanceTiming/loadEventStart)
- [`domContentLoadedEventEnd`](/de/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd)
- [`loadEventEnd`](/de/docs/Web/API/PerformanceTiming/loadEventEnd)
- [`redirectEnd`](/de/docs/Web/API/PerformanceTiming/redirectEnd)
- [`connectEnd`](/de/docs/Web/API/PerformanceTiming/connectEnd)

Der Wert jeder Eigenschaft wird unverändert übernommen.

## Beispiele

### toJSON() direkt aufrufen

Wenn Sie `toJSON()` direkt für `performance.timing` aufrufen, wird ein einfaches Objekt zurückgegeben. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const json = performance.timing.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.navigationStart); // Same value as performance.timing.navigationStart
```

### In einen JSON-String serialisieren

In diesem Beispiel wird das `PerformanceTiming`-Objekt mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(performance.timing));
```

Dies würde einen JSON-String wie den folgenden ausgeben (zur besseren Lesbarkeit formatiert):

```json
{
  "connectStart": 1668077531372,
  "navigationStart": 1668077531367,
  "secureConnectionStart": 0,
  "fetchStart": 1668077531372,
  "domContentLoadedEventStart": 1668077531580,
  "responseStart": 1668077531372,
  "domInteractive": 1668077531524,
  "domainLookupEnd": 1668077531372,
  "responseEnd": 1668077531500,
  "redirectStart": 0,
  "requestStart": 1668077531372,
  "unloadEventEnd": 0,
  "unloadEventStart": 0,
  "domLoading": 1668077531512,
  "domComplete": 1668077531585,
  "domainLookupStart": 1668077531372,
  "loadEventStart": 1668077531585,
  "domContentLoadedEventEnd": 1668077531580,
  "loadEventEnd": 1668077531585,
  "redirectEnd": 0,
  "connectEnd": 1668077531372
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
