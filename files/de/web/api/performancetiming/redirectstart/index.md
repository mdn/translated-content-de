---
title: "PerformanceTiming: redirectStart-Eigenschaft"
short-title: redirectStart
slug: Web/API/PerformanceTiming/redirectStart
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Eigenschaftsschnittstelle ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete
**`PerformanceTiming.redirectStart`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Moment
in Millisekunden seit dem UNIX-Epoch angibt, zu dem die erste HTTP-Weiterleitung beginnt. Wenn es keine
Weiterleitung gibt oder wenn eine der Weiterleitungen nicht von derselben Herkunft ist, wird der Wert
`0` zurückgegeben.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der sie gehört.
