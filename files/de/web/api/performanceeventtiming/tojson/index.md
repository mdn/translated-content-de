---
title: "PerformanceEventTiming: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceEventTiming/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}

Die Methode **`toJSON()`** der Schnittstelle [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `PerformanceEventTiming`-Objekt repräsentiert.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PerformanceEventTiming`-Objekt vorkommt.

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
- [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId)
- [`processingStart`](/de/docs/Web/API/PerformanceEventTiming/processingStart)
- [`processingEnd`](/de/docs/Web/API/PerformanceEventTiming/processingEnd)
- [`cancelable`](/de/docs/Web/API/PerformanceEventTiming/cancelable)

Der Wert jeder Eigenschaft wird unverändert übernommen.

Das zurückgegebene Objekt enthält die Eigenschaft [`target`](/de/docs/Web/API/PerformanceEventTiming/target) nicht, da [`Node`](/de/docs/Web/API/Node) keine `toJSON()`-Operation bereitstellt.

## Beispiele

### toJSON() direkt aufrufen

In diesem Beispiel wird ein `PerformanceEventTiming`-Objekt abgerufen. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.processingStart); // Same value as entry.processingStart
  });
});

observer.observe({ type: "event", buffered: true });
```

### Als JSON-Zeichenfolge serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(entry));
```

Dadurch würde eine JSON-Zeichenfolge wie die folgende protokolliert (zur besseren Lesbarkeit formatiert):

```json
{
  "name": "dragover",
  "entryType": "event",
  "startTime": 67090751.5,
  "duration": 128,
  "navigationId": 2463,
  "interactionId": 0,
  "processingStart": 67090751.75,
  "processingEnd": 67090752.25,
  "cancelable": true
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
