---
title: "Leistung: `getEntries()`-Methode"
short-title: getEntries()
slug: Web/API/Performance/getEntries
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`getEntries()`**-Methode gibt ein Array aller [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte zurück, die derzeit in der Leistungschronologie vorhanden sind.

Wenn Sie nur an Leistungsdatensätzen bestimmter Typen oder mit bestimmten Namen interessiert sind, siehe [`getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) und [`getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName).

> [!NOTE]
> Diese Methode benachrichtigt Sie nicht über neue Leistungsdatensätze; Sie erhalten nur Datensätze, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungschronologie vorhanden sind.
> Um Benachrichtigungen über Datensätze zu erhalten, sobald sie verfügbar werden, verwenden Sie einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

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

Ein {{jsxref("Array")}} von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten. Die Elemente sind in chronologischer Reihenfolge basierend auf der [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) der Einträge angeordnet.

## Beispiele

### Protokollierung aller Leistungsmarker und -messungen

Angenommen, Sie haben Ihre eigenen [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)- und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekte an geeigneten Stellen in Ihrem Code erstellt, möchten Sie möglicherweise alle an die Konsole protokollieren, wie folgt:

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
