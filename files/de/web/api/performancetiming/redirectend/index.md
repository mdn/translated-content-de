---
title: "PerformanceTiming: Eigenschaft redirectEnd"
short-title: redirectEnd
slug: Web/API/PerformanceTiming/redirectEnd
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Eigenschaftsschnittstelle ist im [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft **`PerformanceTiming.redirectEnd`** gibt ein `unsigned long long` zurück, das den Zeitpunkt in Millisekunden seit der UNIX-Epoche darstellt, zu dem die letzte HTTP-Weiterleitung abgeschlossen ist, also wenn das letzte Byte der HTTP-Antwort empfangen wurde. Wenn es keine Weiterleitung gibt, oder wenn eine der Weiterleitungen nicht vom gleichen Ursprung ist, wird der Wert `0` zurückgegeben.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Performance`](/de/docs/Web/API/Performance)-Schnittstelle, zu der es gehört.
