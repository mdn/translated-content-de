---
title: "PerformanceTiming: domContentLoadedEventStart-Eigenschaft"
short-title: domContentLoadedEventStart
slug: Web/API/PerformanceTiming/domContentLoadedEventStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete, nur lesbare Eigenschaft
**`PerformanceTiming.domContentLoadedEventStart`**
gibt ein `unsigned long long` zurück, das den Moment in Millisekunden seit dem UNIX-Epoch angibt, direkt bevor der Parser das
[`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis gesendet hat, also direkt nachdem alle Skripte, die nach dem Parsen ausgeführt werden müssen, ausgeführt wurden.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der es gehört.
