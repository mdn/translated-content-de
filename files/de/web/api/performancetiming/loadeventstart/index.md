---
title: "PerformanceTiming: loadEventStart-Eigenschaft"
short-title: loadEventStart
slug: Web/API/PerformanceTiming/loadEventStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle und deren [`PerformanceNavigationTiming.loadEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventStart)-Eigenschaft, die schreibgeschützt ist.

Die veraltete
**`PerformanceTiming.loadEventStart`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Zeitpunkt in Millisekunden seit der UNIX-Epoche darstellt, zu dem das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis für das aktuelle Dokument gesendet wurde. Wenn dieses Ereignis noch nicht gesendet wurde, wird `0` zurückgegeben.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der sie gehört.
