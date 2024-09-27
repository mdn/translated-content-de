---
title: "Performance: clearMeasures() Methode"
short-title: clearMeasures()
slug: Web/API/Performance/clearMeasures
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Die **`clearMeasures()`**-Methode entfernt alle oder spezifische [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekte aus der Leistungstimeline des Browsers.

## Syntax

```js-nolint
clearMeasures()
clearMeasures(name)
```

### Parameter

- `name` {{optional_inline}}
  - : Ein Zeichenfolgenwert, der den [`name`](/de/docs/Web/API/PerformanceEntry/name) des [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekts darstellt. Wenn dieses Argument weggelassen wird, werden alle Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"measure"` entfernt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Entfernen von Maßnahmen

Um alle Performance-Maßnahmen oder nur bestimmte Einträge zu bereinigen, verwenden Sie die `clearMeasures()`-Methode wie folgt:

```js
// Create a bunch of measures
performance.measure("from navigation");
performance.mark("a");
performance.measure("from mark a", "a");
performance.measure("from navigation");
performance.measure("from mark a", "a");
performance.mark("b");
performance.measure("between a and b", "a", "b");

performance.getEntriesByType("measure").length; // 5

// Delete just the "from navigation" measure entries
performance.clearMeasures("from navigation");
performance.getEntriesByType("measure").length; // 3

// Delete all of the measure entries
performance.clearMeasures();
performance.getEntriesByType("measure").length; // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
