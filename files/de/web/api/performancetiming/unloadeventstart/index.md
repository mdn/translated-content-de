---
title: "PerformanceTiming: unloadEventStart-Eigenschaft"
short-title: unloadEventStart
slug: Web/API/PerformanceTiming/unloadEventStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}} Schnittstelle.

Die veraltete
**`PerformanceTiming.unloadEventStart`**
nur-lesende Eigenschaft gibt ein `unsigned long long` zurück, das den Moment in Millisekunden seit der UNIX-Epoche darstellt, zu dem das {{domxref("Window/unload_event", "unload")}} Ereignis ausgelöst wurde. Wenn
kein vorheriges Dokument vorhanden ist, oder wenn das vorherige Dokument oder eine der erforderlichen
Weiterleitungen nicht vom selben Ursprung sind, wird der Wert `0` zurückgegeben.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("PerformanceTiming")}} Schnittstelle, zu der es gehört.
