---
title: "Performance: getEntries() Methode"
short-title: getEntries()
slug: Web/API/Performance/getEntries
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}

Die Methode **`getEntries()`** gibt ein Array aller [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte zurück, die derzeit in der Performance-Zeitleiste vorhanden sind.

Wenn Sie nur an Performance-Einträgen bestimmter Typen oder mit bestimmten Namen interessiert sind, siehe [`getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) und [`getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName).

> [!NOTE]
> Diese Methode benachrichtigt Sie nicht über neue Performance-Einträge; Sie erhalten nur die Einträge, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste vorhanden sind.
> Um Benachrichtigungen über Einträge zu erhalten, sobald diese verfügbar werden, verwenden Sie einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

Die folgenden Eintragstypen werden von dieser Methode überhaupt nicht unterstützt und werden nicht zurückgegeben, selbst wenn Einträge für diese Typen existieren könnten:

- `"element"` ([`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming))
- `"event"` ([`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming))
- `"largest-contentful-paint"` ([`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint))
- `"layout-shift"` ([`LayoutShift`](/de/docs/Web/API/LayoutShift))
- `"longtask"` ([`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming))

Um auf Einträge dieser Typen zuzugreifen, müssen Sie stattdessen einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwenden.

## Syntax

```js-nolint
getEntries()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten. Die Elemente werden in chronologischer Reihenfolge basierend auf der [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) der Einträge sein.

## Beispiele

### Protokollierung aller Performance-Marker und -Messungen

Angenommen, Sie haben Ihre eigenen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)- und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekte an geeigneten Stellen in Ihrem Code erstellt, dann könnten Sie alle im Konsolenprotokoll wie folgt ausgeben:

```js
// Example markers/measures
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");
performance.mark("video-loaded");
performance.measure("login-duration", "login-started", "login-finished");

const entries = performance.getEntries();

entries.forEach((entry) => {
  if (entry.entryType === "mark") {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  }
  if (entry.entryType === "measure") {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType)
- [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName)
