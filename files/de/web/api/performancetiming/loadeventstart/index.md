---
title: "PerformanceTiming: loadEventStart-Eigenschaft"
short-title: loadEventStart
slug: Web/API/PerformanceTiming/loadEventStart
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle der [`PerformanceNavigationTiming.loadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventStart) schreibgeschützten Eigenschaft.

Die veraltete
**`PerformanceTiming.loadEventStart`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Moment
in Millisekunden seit der UNIX-Epoche darstellt, zu dem das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis für das
aktuelle Dokument gesendet wurde. Wenn dieses Ereignis noch nicht gesendet wurde, gibt es `0` zurück.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der sie gehört.
