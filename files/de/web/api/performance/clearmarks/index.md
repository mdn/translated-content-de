---
title: "Performance: clearMarks() Methode"
short-title: clearMarks()
slug: Web/API/Performance/clearMarks
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

Die **`clearMarks()`** Methode entfernt alle oder spezifische {{domxref("PerformanceMark")}} Objekte aus der Performance-Timeline des Browsers.

## Syntax

```js-nolint
clearMarks()
clearMarks(name)
```

### Parameter

- `name` {{optional_inline}}
  - : Ein String, der den {{domxref("PerformanceEntry.name", "Namen")}} des {{domxref("PerformanceMark")}} Objekts darstellt. Wenn dieses Argument weggelassen wird, werden alle Einträge mit einem {{domxref("PerformanceEntry.entryType","Eintragstyp")}} von "`mark`" entfernt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Entfernen von Markierungen

Um alle Performance-Markierungen oder nur bestimmte Einträge zu bereinigen, verwenden Sie die `clearMarks()` Methode wie folgt:

```js
// Erstellen Sie mehrere Markierungen
performance.mark("login-started");
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");
performance.mark("video-loaded");
performance.mark("video-loaded");

performance.getEntriesByType("mark").length; // 6

// Löschen Sie nur die "login-started" Markierungseinträge
performance.clearMarks("login-started");
performance.getEntriesByType("mark").length; // 4

// Löschen Sie alle Markierungseinträge
performance.clearMarks();
performance.getEntriesByType("mark").length; // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("PerformanceMark")}}
