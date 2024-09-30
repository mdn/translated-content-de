---
title: "PerformanceTiming: loadEventEnd-Eigenschaft"
short-title: loadEventEnd
slug: Web/API/PerformanceTiming/loadEventEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle und deren [`PerformanceNavigationTiming.loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) schreibgeschützte Eigenschaft.

Die veraltete
**`PerformanceTiming.loadEventEnd`**
schreibgeschützte Eigenschaft gibt einen `unsigned long long` zurück, der den Zeitpunkt
in Millisekunden seit der UNIX-Epoche darstellt, wann der [`load`](/de/docs/Web/API/Window/load_event) Ereignishandler
beendet wurde, also wann das Ladeereignis abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet oder noch nicht abgeschlossen wurde, gibt es `0` zurück.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der es gehört.
