---
title: "PerformanceTiming: loadEventEnd-Eigenschaft"
short-title: loadEventEnd
slug: Web/API/PerformanceTiming/loadEventEnd
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die schreibgeschützte Eigenschaft [`PerformanceNavigationTiming.loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) des [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Interface.

Die veraltete
**`PerformanceTiming.loadEventEnd`**
schreibgeschützte Eigenschaft gibt einen `unsigned long long` zurück, der den Moment darstellt,
in Millisekunden seit der UNIX-Epoche, wann der [`load`](/de/docs/Web/API/Window/load_event) Ereignishandler
beendet wurde, das heißt, wann das Ladeereignis abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet oder abgeschlossen wurde, wird `0` zurückgegeben.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der es gehört.
