---
title: "PerformanceMark: detail Eigenschaft"
short-title: detail
slug: Web/API/PerformanceMark/detail
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`detail`** Eigenschaft gibt beliebige Metadaten zurück, die beim Erstellen der Markierung enthalten waren (entweder bei der Nutzung von [`performance.mark()`](/de/docs/Web/API/Performance/mark) oder des [`PerformanceMark()`](/de/docs/Web/API/PerformanceMark/PerformanceMark) Konstruktors).

## Wert

Gibt den Wert zurück, der festgelegt wurde (aus `markOptions` von [`performance.mark()`](/de/docs/Web/API/Performance/mark) oder dem [`PerformanceMark()`](/de/docs/Web/API/PerformanceMark/PerformanceMark) Konstruktor).

## Beispiele

Das folgende Beispiel demonstriert die `detail` Eigenschaft.

```js
performance.mark("dog", { detail: "labrador" });

const dogEntries = performance.getEntriesByName("dog");

dogEntries[0].detail; // labrador
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
