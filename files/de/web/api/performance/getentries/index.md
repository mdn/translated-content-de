---
title: "Performance: getEntries()-Methode"
short-title: getEntries()
slug: Web/API/Performance/getEntries
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die Methode **`getEntries()`** gibt ein Array aller [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte zurück, die sich derzeit in der Performance-Timeline befinden.

Wenn Sie nur an Performance-Einträgen bestimmter Typen oder mit bestimmten Namen interessiert sind, lesen Sie die Dokumentation zu [`getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) und [`getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName).

> [!NOTE]
> Diese Methode benachrichtigt Sie nicht über neue Performance-Einträge. Sie erhalten nur Einträge, die sich zum Zeitpunkt des Methodenaufrufs in der Performance-Timeline befinden.
> Um über neue Einträge benachrichtigt zu werden, sobald sie verfügbar sind, verwenden Sie einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

Die folgenden Eintragstypen werden von dieser Methode nicht unterstützt und nicht zurückgegeben, selbst wenn Einträge dieser Typen vorhanden sind:

- `"container"` ([`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming))
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

Ein {{jsxref("Array")}} von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten. Die Elemente sind anhand des jeweiligen [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime)-Werts chronologisch geordnet.

## Beispiele

### Alle Performance-Marker und -Messungen in der Konsole ausgeben

Wenn Sie an geeigneten Stellen in Ihrem Code eigene [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)- und [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekte erstellt haben, können Sie sie alle wie folgt in der Konsole ausgeben:

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
