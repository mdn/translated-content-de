---
title: "PerformanceTiming: Eigenschaft loadEventStart"
short-title: loadEventStart
slug: Web/API/PerformanceTiming/loadEventStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}}
> Schnittstelle mit der schreibgeschützten Eigenschaft {{domxref("PerformanceNavigationTiming.loadEventStart")}}.

Die veraltete
**`PerformanceTiming.loadEventStart`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Moment darstellt,
in Millisekunden seit der UNIX-Epoche, als das {{domxref("Window/load_event", "load")}} Ereignis für das
aktuelle Dokument gesendet wurde. Wenn dieses Ereignis noch nicht gesendet wurde, gibt es `0` zurück.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle {{domxref("PerformanceTiming")}}, zu der sie gehört.
