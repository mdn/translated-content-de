---
title: "PerformanceTiming: Eigenschaft loadEventStart"
short-title: loadEventStart
slug: Web/API/PerformanceTiming/loadEventStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) als veraltet markiert. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle und deren schreibgeschützte Eigenschaft [`PerformanceNavigationTiming.loadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventStart).

Die veraltete,
schreibgeschützte Eigenschaft **`PerformanceTiming.loadEventStart`**
gibt ein `unsigned long long` zurück, welches den Moment darstellt (in Millisekunden seit dem UNIX-Epoch), in dem das [`load`](/de/docs/Web/API/Window/load_event) Ereignis für das aktuelle Dokument gesendet wurde. Falls dieses Ereignis noch nicht gesendet wurde, wird `0` zurückgegeben.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der es gehört.
