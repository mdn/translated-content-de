---
title: "PerformanceTiming: responseEnd-Eigenschaft"
short-title: responseEnd
slug: Web/API/PerformanceTiming/responseEnd
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete, nur-lesbare Eigenschaft **`PerformanceTiming.responseEnd`** gibt einen `unsigned long long`-Wert zurück, der den Zeitpunkt in Millisekunden seit dem UNIX-Zeitstempel darstellt, zu dem der Browser das letzte Byte der Antwort erhalten hat, oder wenn die Verbindung geschlossen wurde, falls dies zuerst geschah, vom Server, aus einem Cache oder einer lokalen Ressource.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der sie gehört.
