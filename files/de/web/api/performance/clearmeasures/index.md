---
title: "Performance: clearMeasures() Methode"
short-title: clearMeasures()
slug: Web/API/Performance/clearMeasures
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`clearMeasures()`**-Methode entfernt alle oder spezifische [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekte aus der Leistungszeitachse des Browsers.

## Syntax

```js-nolint
clearMeasures()
clearMeasures(name)
```

### Parameter

- `name` {{optional_inline}}
  - : Ein String, der den [`name`](/de/docs/Web/API/PerformanceEntry/name) des [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekts repräsentiert. Wenn dieses Argument weggelassen wird, werden alle Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"measure"` entfernt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Entfernen von Measures

Um alle Leistungs-Maße oder nur spezifische Einträge zu bereinigen, verwenden Sie die `clearMeasures()`-Methode wie folgt:

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
