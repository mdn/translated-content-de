---
title: "Performance: clearMeasures() Methode"
short-title: clearMeasures()
slug: Web/API/Performance/clearMeasures
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

Die **`clearMeasures()`** Methode entfernt alle oder spezifische {{domxref("PerformanceMeasure")}} Objekte aus der Performance-Zeitleiste des Browsers.

## Syntax

```js-nolint
clearMeasures()
clearMeasures(name)
```

### Parameter

- `name` {{optional_inline}}
  - : Ein String, der den {{domxref("PerformanceEntry.name", "name")}} des {{domxref("PerformanceMeasure")}} Objekts darstellt. Wenn dieses Argument weggelassen wird, werden alle Einträge mit einem {{domxref("PerformanceEntry.entryType","entryType")}} von "`measure`" entfernt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Entfernen von Messungen

Um alle Performance-Messungen oder nur bestimmte Einträge zu bereinigen, verwenden Sie die `clearMeasures()` Methode wie folgt:

```js
// Erstellen Sie eine Reihe von Messungen
performance.measure("from navigation");
performance.mark("a");
performance.measure("from mark a", "a");
performance.measure("from navigation");
performance.measure("from mark a", "a");
performance.mark("b");
performance.measure("between a and b", "a", "b");

performance.getEntriesByType("measure").length; // 5

// Löschen Sie nur die "from navigation" Messungseinträge
performance.clearMeasures("from navigation");
performance.getEntriesByType("measure").length; // 3

// Löschen Sie alle Messungseinträge
performance.clearMeasures();
performance.getEntriesByType("measure").length; // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("PerformanceMeasure")}}
