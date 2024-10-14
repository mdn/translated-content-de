---
title: "Performance: clearMarks() Methode"
short-title: clearMarks()
slug: Web/API/Performance/clearMarks
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`clearMarks()`** Methode entfernt alle oder spezifische [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) Objekte aus der Performance-Timeline des Browsers.

## Syntax

```js-nolint
clearMarks()
clearMarks(name)
```

### Parameter

- `name` {{optional_inline}}
  - : Ein Zeichenkettenwert, der den [`name`](/de/docs/Web/API/PerformanceEntry/name) des [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) Objekts repräsentiert. Wenn dieses Argument weggelassen wird, werden alle Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"mark"` entfernt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Entfernen von Markierungen

Um alle Performance-Markierungen oder nur spezifische Einträge zu bereinigen, verwenden Sie die `clearMarks()` Methode wie folgt:

```js
// Create a bunch of marks
performance.mark("login-started");
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");
performance.mark("video-loaded");
performance.mark("video-loaded");

performance.getEntriesByType("mark").length; // 6

// Delete just the "login-started" mark entries
performance.clearMarks("login-started");
performance.getEntriesByType("mark").length; // 4

// Delete all of the mark entries
performance.clearMarks();
performance.getEntriesByType("mark").length; // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
