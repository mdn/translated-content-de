---
title: "PerformanceTiming: domContentLoadedEventStart-Eigenschaft"
short-title: domContentLoadedEventStart
slug: Web/API/PerformanceTiming/domContentLoadedEventStart
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die veraltete
**`PerformanceTiming.domContentLoadedEventStart`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Moment darstellt,
in Millisekunden seit der UNIX-Epoche, direkt bevor der Parser das
[`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis gesendet hat, das heißt direkt nachdem alle Skripte, die
direkt nach dem Parsen ausgeführt werden müssen, ausgeführt worden sind.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der es gehört.
