---
title: "PerformanceTiming: loadEventStart Eigenschaft"
short-title: loadEventStart
slug: Web/API/PerformanceTiming/loadEventStart
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle mit der schreibgeschützten Eigenschaft [`PerformanceNavigationTiming.loadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventStart).

Die veraltete
**`PerformanceTiming.loadEventStart`**
schreibgeschützte Eigenschaft gibt einen `unsigned long long` zurück, der den Moment darstellt, in Millisekunden seit dem UNIX-Epoch, als das [`load`](/de/docs/Web/API/Window/load_event) Ereignis für das aktuelle Dokument gesendet wurde. Wenn dieses Ereignis noch nicht gesendet wurde, gibt es `0` zurück.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der sie gehört.
