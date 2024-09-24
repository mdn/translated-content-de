---
title: "PerformanceTiming: requestStart-Eigenschaft"
short-title: requestStart
slug: Web/API/PerformanceTiming/requestStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ APIRef("PerformanceTiming") }} {{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}}
> Schnittstelle.

Die veraltete
**`PerformanceTiming.requestStart`**
schreibgeschützte Eigenschaft gibt einen `unsigned long long` zurück, der den Zeitpunkt
in Millisekunden seit der UNIX-Epoche darstellt, zu dem der Browser die Anfrage gesendet hat, um das
tatsächliche Dokument vom Server oder aus einem Cache zu erhalten. Wenn die Transportschicht nach dem
Start der Anfrage fehlschlägt und die Verbindung wiederhergestellt wird, wird diese Eigenschaft auf die
Zeit der neuen Anfrage gesetzt.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("PerformanceTiming")}} Schnittstelle, zu der es gehört.
