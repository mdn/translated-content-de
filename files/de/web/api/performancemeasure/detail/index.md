---
title: "PerformanceMeasure: detail-Eigenschaft"
short-title: detail
slug: Web/API/PerformanceMeasure/detail
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`detail`**-Eigenschaft gibt beliebige Metadaten zurück, die beim Erstellen der Markierung enthalten waren (wenn [`performance.measure()`](/de/docs/Web/API/Performance/measure) verwendet wird).

## Wert

Gibt den Wert zurück, auf den sie (aus `markOptions` von [`performance.measure()`](/de/docs/Web/API/Performance/measure)) gesetzt wurde.

## Beispiele

Das folgende Beispiel demonstriert die `detail`-Eigenschaft.

```js
performance.measure("dog", { detail: "labrador", start: 0, end: 12345 });

const dogEntries = performance.getEntriesByName("dog");

dogEntries[0].detail; // labrador
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
