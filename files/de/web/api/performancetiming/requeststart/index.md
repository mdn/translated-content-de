---
title: "PerformanceTiming: requestStart-Eigenschaft"
short-title: requestStart
slug: Web/API/PerformanceTiming/requestStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ APIRef("PerformanceTiming") }} {{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die veraltete
**`PerformanceTiming.requestStart`**
schreibgeschützte Eigenschaft gibt einen `unsigned long long` zurück, der den Zeitpunkt in Millisekunden seit der UNIX-Epoche darstellt, zu dem der Browser die Anforderung gesendet hat, um das tatsächliche Dokument vom Server oder einem Cache zu erhalten. Wenn die Transportschicht nach dem Start der Anforderung fehlschlägt und die Verbindung erneut geöffnet wird, wird diese Eigenschaft auf die Zeit der neuen Anforderung gesetzt.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der es gehört.
