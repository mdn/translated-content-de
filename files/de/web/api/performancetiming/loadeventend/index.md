---
title: "PerformanceTiming: loadEventEnd-Eigenschaft"
short-title: loadEventEnd
slug: Web/API/PerformanceTiming/loadEventEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle mit der schreibgeschützten Eigenschaft [`PerformanceNavigationTiming.loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd).

Die veraltete
**`PerformanceTiming.loadEventEnd`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Moment darstellt,
in Millisekunden seit der UNIX-Epoche, zu dem der [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler
beendet wurde, das heißt, wenn das Ladeereignis abgeschlossen ist. Wenn dieses Ereignis noch nicht
gesendet oder noch nicht abgeschlossen ist, gibt es `0` zurück.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der es gehört.
