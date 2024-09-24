---
title: "PerformanceTiming: domContentLoadedEventStart-Eigenschaft"
short-title: domContentLoadedEventStart
slug: Web/API/PerformanceTiming/domContentLoadedEventStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}}
> Schnittstelle.

Die veraltete, schreibgeschützte
**`PerformanceTiming.domContentLoadedEventStart`**
Eigenschaft gibt ein `unsigned long long` zurück, das den Moment in Millisekunden seit der UNIX-Epoche darstellt, unmittelbar bevor der Parser das
{{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} Event gesendet hat, also direkt nachdem alle Skripte, die unmittelbar nach dem Parsen ausgeführt werden müssen, ausgeführt wurden.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die {{domxref("PerformanceTiming")}} Schnittstelle, zu der es gehört.
