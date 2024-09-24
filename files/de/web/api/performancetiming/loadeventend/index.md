---
title: "PerformanceTiming: loadEventEnd-Eigenschaft"
short-title: loadEventEnd
slug: Web/API/PerformanceTiming/loadEventEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die schreibgeschützte Eigenschaft {{domxref("PerformanceNavigationTiming.loadEventEnd")}} der {{domxref("PerformanceNavigationTiming")}}-Schnittstelle.

Die veraltete
**`PerformanceTiming.loadEventEnd`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Moment in Millisekunden seit der UNIX-Epoche darstellt, in dem der {{domxref("Window/load_event", "load")}}-Ereignishandler beendet wurde, also wenn das Ladeereignis abgeschlossen ist. Wenn dieses Ereignis noch nicht gesendet oder noch nicht abgeschlossen ist, gibt es `0` zurück.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("PerformanceTiming")}}-Schnittstelle, zu der es gehört.
