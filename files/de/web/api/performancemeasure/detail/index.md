---
title: "PerformanceMeasure: detail-Eigenschaft"
short-title: detail
slug: Web/API/PerformanceMeasure/detail
l10n:
  sourceCommit: e9cb9feda05ce0f1dc08aada71c0a2265baeeaff
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`detail`** gibt beliebige Metadaten zurück, die beim Erstellen der Messung (mit [`performance.measure()`](/de/docs/Web/API/Performance/measure)) angegeben wurden.

## Wert

Gibt den Wert zurück, der über `measureOptions` von [`performance.measure()`](/de/docs/Web/API/Performance/measure) festgelegt wurde.

## Beispiele

Das folgende Beispiel zeigt die Eigenschaft `detail`.

```js
performance.measure("dog", { detail: "labrador", start: 0, end: 12345 });

const dogEntries = performance.getEntriesByName("dog");

dogEntries[0].detail; // labrador
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
