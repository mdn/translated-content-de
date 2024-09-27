---
title: "PerformanceMark: detail-Eigenschaft"
short-title: detail
slug: Web/API/PerformanceMark/detail
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`detail`**-Eigenschaft gibt beliebige Metadaten zurück, die beim Erstellen der Markierung eingefügt wurden (entweder bei der Verwendung von [`performance.mark()`](/de/docs/Web/API/Performance/mark) oder des [`PerformanceMark()`](/de/docs/Web/API/PerformanceMark/PerformanceMark)-Konstruktors).

## Wert

Gibt den Wert zurück, auf den sie gesetzt ist (aus `markOptions` von [`performance.mark()`](/de/docs/Web/API/Performance/mark) oder dem [`PerformanceMark()`](/de/docs/Web/API/PerformanceMark/PerformanceMark)-Konstruktor).

## Beispiele

Das folgende Beispiel zeigt die `detail`-Eigenschaft.

```js
performance.mark("dog", { detail: "labrador" });

const dogEntries = performance.getEntriesByName("dog");

dogEntries[0].detail; // labrador
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
