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

Die veraltete,
schreibgeschützte Eigenschaft **`PerformanceTiming.domainLookupEnd`** gibt ein `unsigned long long` zurück, das den Moment darstellt, in Millisekunden seit dem UNIX-Epochenbeginn, an dem die Domain-Abfrage abgeschlossen ist. Wenn eine persistente Verbindung genutzt wird oder die Informationen im Cache oder in einer lokalen Ressource gespeichert sind, wird der Wert derselbe sein wie [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart).

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Interface, zu dem es gehört.
