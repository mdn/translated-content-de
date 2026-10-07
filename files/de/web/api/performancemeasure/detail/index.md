---
title: "PerformanceMeasure: detail-Eigenschaft"
short-title: detail
slug: Web/API/PerformanceMeasure/detail
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`detail`** gibt beliebige Metadaten zurück, die beim Erstellen des Markers einbezogen wurden (bei Verwendung von [`performance.measure()`](/de/docs/Web/API/Performance/measure)).

## Wert

Gibt den Wert zurück, auf den die Eigenschaft gesetzt wurde (über `markOptions` von [`performance.measure()`](/de/docs/Web/API/Performance/measure)).

## Beispiele

Das folgende Beispiel veranschaulicht die Eigenschaft `detail`.

```js
performance.measure("dog", { detail: "labrador", start: 0, end: 12345 });

const dogEntries = performance.getEntriesByName("dog");

dogEntries[0].detail; // labrador
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
