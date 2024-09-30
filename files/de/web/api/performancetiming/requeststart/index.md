---
title: "PerformanceTiming: requestStart-Eigenschaft"
short-title: requestStart
slug: Web/API/PerformanceTiming/requestStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ APIRef("PerformanceTiming") }} {{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft **`PerformanceTiming.requestStart`** gibt ein `unsigned long long` zurück, das den Moment in Millisekunden seit der UNIX-Epoche darstellt, zu dem der Browser die Anfrage gesendet hat, um das tatsächliche Dokument vom Server oder aus einem Cache zu erhalten. Wenn die Transportschicht nach Beginn der Anfrage fehlschlägt und die Verbindung wiederhergestellt wird, wird diese Eigenschaft auf die Zeit der neuen Anfrage gesetzt.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der es gehört.
