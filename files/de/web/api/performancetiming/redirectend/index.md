---
title: "PerformanceTiming: Eigenschaft redirectEnd"
short-title: redirectEnd
slug: Web/API/PerformanceTiming/redirectEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}}
> Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft
**`PerformanceTiming.redirectEnd`**
gibt ein `unsigned long long` zurück, das den Zeitpunkt in Millisekunden seit dem UNIX-Epoch darstellt, an dem die letzte HTTP-Weiterleitung abgeschlossen ist, also wenn das letzte Byte der HTTP-Antwort empfangen wurde. Wenn es keine Weiterleitung gibt oder wenn eine der Weiterleitungen nicht vom gleichen Ursprung ist, wird der Wert `0` zurückgegeben.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die {{domxref("Performance")}} Schnittstelle, zu der sie gehört.
