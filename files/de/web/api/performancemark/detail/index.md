---
title: "PerformanceMark: detail-Eigenschaft"
short-title: detail
slug: Web/API/PerformanceMark/detail
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`detail`**-Eigenschaft gibt Metadaten zurück, die beim Erstellen der Markierung eingebunden wurden (entweder beim Verwenden von [`performance.mark()`](/de/docs/Web/API/Performance/mark) oder dem [`PerformanceMark()`](/de/docs/Web/API/PerformanceMark/PerformanceMark)-Konstruktor).

## Wert

Gibt den Wert zurück, auf den sie gesetzt ist (aus `markOptions` von [`performance.mark()`](/de/docs/Web/API/Performance/mark) oder dem [`PerformanceMark()`](/de/docs/Web/API/PerformanceMark/PerformanceMark)-Konstruktor).

## Beispiele

Das folgende Beispiel demonstriert die `detail`-Eigenschaft.

```js
performance.mark("dog", { detail: "labrador" });

const dogEntries = performance.getEntriesByName("dog");

dogEntries[0].detail; // labrador
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
