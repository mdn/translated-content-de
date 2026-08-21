---
title: "PerformanceTiming: unloadEventStart-Eigenschaft"
short-title: unloadEventStart
slug: Web/API/PerformanceTiming/unloadEventStart
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft
**`PerformanceTiming.unloadEventStart`**
gibt ein `unsigned long long` zurück, das den Zeitpunkt in Millisekunden seit der UNIX-Epoche darstellt, zu dem das [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignis ausgelöst wurde. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder einer der erforderlichen Weiterleitungen nicht von derselben Herkunft ist, wird der Wert `0` zurückgegeben.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der es gehört.
