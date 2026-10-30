---
title: "PerformanceLongTaskTiming: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceLongTaskTiming/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Methode **`toJSON()`** der Schnittstelle [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `PerformanceLongTaskTiming`-Objekt repräsentiert.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PerformanceLongTaskTiming`-Objekt verarbeitet wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein einfaches, JSON-serialisierbares Objekt mit den folgenden Eigenschaften:

- [`name`](/de/docs/Web/API/PerformanceEntry/name)
- [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)
- [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime)
- [`duration`](/de/docs/Web/API/PerformanceEntry/duration)
- [`navigationId`](/de/docs/Web/API/PerformanceEntry/navigationId)
- [`attribution`](/de/docs/Web/API/PerformanceLongTaskTiming/attribution)

Der Wert jeder Eigenschaft wird unverändert kopiert. Wenn das zurückgegebene Objekt an {{jsxref("JSON.stringify()")}} übergeben wird, werden die Objekte im Array `attribution` mithilfe von [`TaskAttributionTiming.toJSON()`](/de/docs/Web/API/TaskAttributionTiming/toJSON) weiter serialisiert.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `PerformanceLongTaskTiming`-Objekt ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.duration); // Same value as entry.duration
  });
});

observer.observe({ type: "longtask", buffered: true });
```

### In einen JSON-String serialisieren

Innerhalb des Callbacks aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(entry));
```

Dabei würde ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "name": "self",
  "entryType": "longtask",
  "startTime": 183.5,
  "duration": 60,
  "navigationId": 2463,
  "attribution": [
    {
      "name": "unknown",
      "entryType": "taskattribution",
      "startTime": 0,
      "duration": 0,
      "navigationId": 2463,
      "containerType": "window",
      "containerSrc": "",
      "containerId": "",
      "containerName": ""
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
