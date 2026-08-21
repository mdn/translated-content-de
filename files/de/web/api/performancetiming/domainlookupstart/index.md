---
title: "PerformanceTiming: domainLookupStart-Eigenschaft"
short-title: domainLookupStart
slug: Web/API/PerformanceTiming/domainLookupStart
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete
**`PerformanceTiming.domainLookupStart`**
schreibgeschützte Eigenschaft gibt einen `unsigned long long` zurück, der den Zeitpunkt in Millisekunden seit der UNIX-Epoche darstellt, an dem die Domain-Anfrage beginnt. Wenn eine persistente Verbindung verwendet wird, oder die Informationen im Cache oder in einer lokalen Ressource gespeichert sind, wird der Wert derselbe sein wie [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart).

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der sie gehört.
