---
title: "PerformanceTiming: unloadEventEnd-Eigenschaft"
short-title: unloadEventEnd
slug: Web/API/PerformanceTiming/unloadEventEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft
**`PerformanceTiming.unloadEventEnd`** gibt ein `unsigned long long` zurück, das den Zeitpunkt in Millisekunden seit der UNIX-Epoche darstellt, wann der [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignishandler abgeschlossen ist. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder eine der erforderlichen Weiterleitungen nicht vom gleichen Ursprung ist, wird der Wert `0` zurückgegeben.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der es gehört.
