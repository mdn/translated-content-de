---
title: "PerformanceTiming: connectStart-Eigenschaft"
short-title: connectStart
slug: Web/API/PerformanceTiming/connectStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft
**`PerformanceTiming.connectStart`**
gibt ein `unsigned long long` zurück, das den Moment in Millisekunden seit dem UNIX-Epoch darstellt, an dem die Anforderung zur Öffnung einer Verbindung an das Netzwerk gesendet wird. Wenn die Transportschicht einen Fehler meldet und die Verbindungsherstellung erneut gestartet wird, wird die Zeit des letzten Verbindungsaufbaus angegeben. Wenn eine persistente Verbindung verwendet wird, ist der Wert derselbe wie
[`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart).

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der es gehört.
