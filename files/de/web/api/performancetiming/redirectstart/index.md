---
title: "PerformanceTiming: redirectStart-Eigenschaft"
short-title: redirectStart
slug: Web/API/PerformanceTiming/redirectStart
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Schnittstelle.

Die veraltete
**`PerformanceTiming.redirectStart`**
Nur-Lese-Eigenschaft gibt ein `unsigned long long` zurück, das den Moment in Millisekunden seit dem UNIX-Epoch darstellt, an dem die erste HTTP-Weiterleitung beginnt. Wenn es keine Weiterleitung gibt oder wenn eine der Weiterleitungen nicht vom gleichen Ursprung ist, ist der zurückgegebene Wert
`0`.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der sie gehört.
