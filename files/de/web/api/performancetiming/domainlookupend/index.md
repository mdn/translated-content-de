---
title: "PerformanceTiming: domainLookupEnd-Eigenschaft"
short-title: domainLookupEnd
slug: Web/API/PerformanceTiming/domainLookupEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft
**`PerformanceTiming.domainLookupEnd`**
gibt einen `unsigned long long` zurück, der den Zeitpunkt in Millisekunden seit der UNIX-Epoche darstellt, an dem die Domain-Suche abgeschlossen ist. Wenn eine persistente Verbindung verwendet wird oder die Informationen in einem Cache oder einer lokalen Ressource gespeichert sind, entspricht der Wert dem von [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart).

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der sie gehört.
