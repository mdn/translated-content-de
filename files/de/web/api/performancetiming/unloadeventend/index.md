---
title: "PerformanceTiming: Eigenschaft unloadEventEnd"
short-title: unloadEventEnd
slug: Web/API/PerformanceTiming/unloadEventEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}}
> Schnittstelle.

Die veraltete
**`PerformanceTiming.unloadEventEnd`**
Read-only-Eigenschaft gibt einen `unsigned long long` zurück, der den Zeitpunkt in Millisekunden seit dem UNIX-Epoch darstellt, an dem der {{domxref("Window/unload_event", "unload")}} Event-Handler abgeschlossen wird. Wenn es kein vorheriges Dokument gibt oder wenn das vorherige Dokument oder einer der erforderlichen Weiterleitungen nicht vom gleichen Ursprung ist, wird der Wert `0` zurückgegeben.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("PerformanceTiming")}} Interface, zu dem es gehört.
