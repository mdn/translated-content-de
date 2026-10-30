---
title: "Performance: Methode toJSON()"
short-title: toJSON()
slug: Web/API/Performance/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die Methode **`toJSON()`** der Schnittstelle [`Performance`](/de/docs/Web/API/Performance) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `Performance`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `Performance`-Objekt auftritt.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`timeOrigin`](/de/docs/Web/API/Performance/timeOrigin)
- [`timing`](/de/docs/Web/API/Performance/timing)
- [`navigation`](/de/docs/Web/API/Performance/navigation)
- [`interactionCount`](/de/docs/Web/API/Performance/interactionCount)

Der Wert jeder Eigenschaft wird unverändert kopiert. Wenn das zurückgegebene Objekt an {{jsxref("JSON.stringify()")}} übergeben wird, werden die Eigenschaften `timing` und `navigation` zusätzlich mit [`PerformanceTiming.toJSON()`](/de/docs/Web/API/PerformanceTiming/toJSON) beziehungsweise [`PerformanceNavigation.toJSON()`](/de/docs/Web/API/PerformanceNavigation/toJSON) serialisiert.

Das zurückgegebene Objekt enthält die Eigenschaft [`eventCounts`](/de/docs/Web/API/Performance/eventCounts) nicht, da [`EventCounts`](/de/docs/Web/API/EventCounts) keine `toJSON()`-Operation bereitstellt.

> [!NOTE]
> In einem Fensterkontext enthält das zurückgegebene Objekt [`interactionCount`](/de/docs/Web/API/Performance/interactionCount) sowie die veralteten Eigenschaften [`performance.timing`](/de/docs/Web/API/Performance/timing) und [`performance.navigation`](/de/docs/Web/API/Performance/navigation). Diese Eigenschaften sind in Workern nicht verfügbar. Um ein JSON-serialisierbares einfaches Objekt zu erhalten, das einen [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Eintrag repräsentiert, rufen Sie stattdessen [`PerformanceNavigationTiming.toJSON()`](/de/docs/Web/API/PerformanceNavigationTiming/toJSON) auf.

## Beispiele

### toJSON() direkt aufrufen

Wenn `toJSON()` direkt auf `performance` aufgerufen wird, gibt die Methode ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const json = performance.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.timeOrigin); // Same value as performance.timeOrigin
```

### Als JSON-String serialisieren

In diesem Beispiel wird das `Performance`-Objekt mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(performance));
```

Dadurch würde ein JSON-String wie der folgende protokolliert (zur besseren Lesbarkeit formatiert):

```json
{
  "timeOrigin": 1668077531367.4,
  "timing": {
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
  },
  "navigation": {
    "type": 0,
    "redirectCount": 0
  },
  "interactionCount": 0
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
