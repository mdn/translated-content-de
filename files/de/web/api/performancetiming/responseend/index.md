---
title: "PerformanceTiming: responseEnd-Eigenschaft"
short-title: responseEnd
slug: Web/API/PerformanceTiming/responseEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft
**`PerformanceTiming.responseEnd`**
gibt einen `unsigned long long` zurück, der den Moment darstellt, in Millisekunden seit der UNIX-Epoche, als der Browser das letzte Byte der Antwort erhielt, oder wenn die Verbindung geschlossen wird, falls dies zuerst geschah, vom Server, aus einem Cache oder aus einer lokalen Ressource.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der sie gehört.
