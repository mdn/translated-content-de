---
title: "PerformanceTiming: redirectStart-Eigenschaft"
short-title: redirectStart
slug: Web/API/PerformanceTiming/redirectStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte benutzen Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete
**`PerformanceTiming.redirectStart`**
Nur-Lese-Eigenschaft gibt einen `unsigned long long` zurück, der den Zeitpunkt in Millisekunden seit der UNIX-Epoche darstellt, zu dem die erste HTTP-Umleitung beginnt. Wenn es keine Umleitung gibt oder eine der Umleitungen nicht vom gleichen Ursprung stammt, wird der Wert `0` zurückgegeben.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der sie gehört.
