---
title: "Performance: Methode getEntries()"
short-title: getEntries()
slug: Web/API/Performance/getEntries
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}

Die **`getEntries()`**-Methode gibt ein Array aller {{domxref("PerformanceEntry")}}-Objekte zurück, die derzeit in der Performance-Timeline vorhanden sind.

Wenn Sie nur an Performance-Einträgen bestimmter Typen oder mit bestimmten Namen interessiert sind, sehen Sie sich {{domxref("Performance.getEntriesByType", "getEntriesByType()")}} und {{domxref("Performance.getEntriesByName", "getEntriesByName()")}} an.

> [!NOTE]
> Diese Methode benachrichtigt Sie nicht über neue Performance-Einträge; Sie erhalten nur Einträge, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline vorhanden sind.
> Um Benachrichtigungen über Einträge zu erhalten, sobald diese verfügbar werden, verwenden Sie einen {{domxref("PerformanceObserver")}}.

Die folgenden Eintragstypen werden von dieser Methode überhaupt nicht unterstützt und werden nicht zurückgegeben, selbst wenn Einträge dieser Typen vorhanden sein könnten:

- `"element"` ({{domxref("PerformanceElementTiming")}})
- `"event"` ({{domxref("PerformanceEventTiming")}})
- `"largest-contentful-paint"` ({{domxref("LargestContentfulPaint")}})
- `"layout-shift"` ({{domxref("LayoutShift")}})
- `"longtask"` ({{domxref("PerformanceLongTaskTiming")}})

Um auf Einträge dieser Typen zuzugreifen, müssen Sie stattdessen einen {{domxref("PerformanceObserver")}} verwenden.

## Syntax

```js-nolint
getEntries()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Array")}} von {{domxref("PerformanceEntry")}}-Objekten. Die Elemente werden in chronologischer Reihenfolge basierend auf den {{domxref("PerformanceEntry.startTime","startTime")}} der Einträge sein.

## Beispiele

### Loggen aller Performance-Markierungen und -Messungen

Angenommen, Sie haben Ihre eigenen {{domxref("PerformanceMark")}}- und {{domxref("PerformanceMeasure")}}-Objekte an geeigneten Stellen in Ihrem Code erstellt, könnten Sie alle im Konsolenprotokoll wie folgt festhalten:

```js
// Beispiel für Markierungen/Messungen
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

- {{domxref("Performance.getEntriesByType()")}}
- {{domxref("Performance.getEntriesByName()")}}
