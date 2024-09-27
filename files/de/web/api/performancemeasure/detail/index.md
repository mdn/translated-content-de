---
title: "PerformanceMeasure: detail-Eigenschaft"
short-title: detail
slug: Web/API/PerformanceMeasure/detail
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`detail`**-Eigenschaft gibt beliebige Metadaten zurück, die beim Erstellen der Markierung einbezogen wurden (bei Verwendung von [`performance.measure()`](/de/docs/Web/API/Performance/measure)).

## Wert

Gibt den Wert zurück, der gesetzt wurde (aus `markOptions` von [`performance.measure()`](/de/docs/Web/API/Performance/measure)).

## Beispiele

Das folgende Beispiel zeigt die `detail`-Eigenschaft.

```js
performance.measure("dog", { detail: "labrador", start: 0, end: 12345 });

const dogEntries = performance.getEntriesByName("dog");

dogEntries[0].detail; // labrador
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
