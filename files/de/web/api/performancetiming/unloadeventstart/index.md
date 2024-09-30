---
title: "PerformanceTiming: unloadEventStart-Eigenschaft"
short-title: unloadEventStart
slug: Web/API/PerformanceTiming/unloadEventStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft
**`PerformanceTiming.unloadEventStart`**
gibt ein `unsigned long long` zurück, das den Zeitpunkt darstellt,
in Millisekunden seit der UNIX-Epoche, zu dem das [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis ausgelöst wurde. Wenn
kein vorheriges Dokument vorhanden ist, oder wenn das vorherige Dokument, oder eine der benötigten
Weiterleitungen, nicht vom selben Ursprung ist, ist der zurückgegebene Wert `0`.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der sie gehört.
