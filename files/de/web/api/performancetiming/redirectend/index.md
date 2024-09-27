---
title: "PerformanceTiming: redirectEnd-Eigenschaft"
short-title: redirectEnd
slug: Web/API/PerformanceTiming/redirectEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die veraltete,
schreibgeschützte Eigenschaft **`PerformanceTiming.redirectEnd`**
gibt einen `unsigned long long` zurück, der den Zeitpunkt repräsentiert,
in Millisekunden seit der UNIX-Epoche, an dem die letzte HTTP-Umleitung abgeschlossen ist, also wenn
das letzte Byte der HTTP-Antwort empfangen wurde. Wenn es keine Umleitung gibt oder eine
der Umleitungen nicht vom gleichen Ursprung ist, ist der zurückgegebene Wert `0`.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`Performance`](/de/docs/Web/API/Performance) Interface, zu dem es gehört.
