---
title: "PerformanceTiming: unloadEventEnd-Eigenschaft"
short-title: unloadEventEnd
slug: Web/API/PerformanceTiming/unloadEventEnd
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Schnittstelle.

Die veraltete
**`PerformanceTiming.unloadEventEnd`**
schreibgeschützte Eigenschaft gibt einen `unsigned long long` zurück, der den Moment in Millisekunden seit der UNIX-Epoche darstellt, in dem der [`unload`](/de/docs/Web/API/Window/unload_event)-Eventhandler endet. Wenn es kein vorheriges Dokument gibt, oder wenn das vorherige Dokument oder eine der erforderlichen Weiterleitungen nicht vom gleichen Ursprung ist, wird der Wert `0` zurückgegeben.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der es gehört.
