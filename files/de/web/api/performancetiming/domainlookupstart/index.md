---
title: "PerformanceTiming: domainLookupStart-Eigenschaft"
short-title: domainLookupStart
slug: Web/API/PerformanceTiming/domainLookupStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die veraltete
**`PerformanceTiming.domainLookupStart`**
schreibgeschützte Eigenschaft gibt einen `unsigned long long` zurück, der den Moment
in Millisekunden seit dem UNIX-Epoch repräsentiert, an dem die Domain-Suche beginnt. Wenn eine persistente
Verbindung verwendet wird oder die Informationen im Cache oder in einer lokalen Ressource gespeichert sind, wird der
Wert derselbe sein wie [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart).

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der sie gehört.
