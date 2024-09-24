---
title: "PerformanceMeasure: Detail-Eigenschaft"
short-title: Detail
slug: Web/API/PerformanceMeasure/detail
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`detail`**-Eigenschaft gibt beliebige Metadaten zurück, die beim Erstellen in der Markierung enthalten waren (bei Verwendung von {{domxref("Performance.measure","performance.measure()")}}).

## Wert

Gibt den Wert zurück, auf den er gesetzt wurde (aus `markOptions` von {{domxref("Performance.measure","performance.measure()")}}).

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
