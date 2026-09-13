---
title: "PerformanceTiming: loadEventEnd-Eigenschaft"
short-title: loadEventEnd
slug: Web/API/PerformanceTiming/loadEventEnd
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle und deren schreibgeschützte Eigenschaft [`PerformanceNavigationTiming.loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd).

Die veraltete
**`PerformanceTiming.loadEventEnd`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Moment darstellt,
in Millisekunden seit dem UNIX-Epoch, in dem der [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler
abgeschlossen wurde, also wenn das Ladeereignis abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet oder abgeschlossen wurde, gibt sie `0` zurück.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der es gehört.
