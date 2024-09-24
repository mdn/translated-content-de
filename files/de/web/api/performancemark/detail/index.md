---
title: "PerformanceMark: Eigenschaft detail"
short-title: detail
slug: Web/API/PerformanceMark/detail
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`detail`**-Eigenschaft gibt beliebige Metadaten zurück, die beim Erstellen der Markierung enthalten waren (entweder beim Verwenden von {{domxref("Performance.mark", "performance.mark()")}} oder des {{domxref("PerformanceMark.PerformanceMark", "PerformanceMark()")}}-Konstruktors).

## Wert

Gibt den Wert zurück, auf den sie gesetzt ist (aus `markOptions` von {{domxref("Performance.mark", "performance.mark()")}} oder des {{domxref("PerformanceMark.PerformanceMark", "PerformanceMark()")}}-Konstruktors).

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
