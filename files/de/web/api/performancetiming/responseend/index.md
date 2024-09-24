---
title: "PerformanceTiming: responseEnd-Eigenschaft"
short-title: responseEnd
slug: Web/API/PerformanceTiming/responseEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}}
> Schnittstelle.

Die veraltete
**`PerformanceTiming.responseEnd`**
schreibgeschützte Eigenschaft gibt eine `unsigned long long` zurück, die den Zeitpunkt darstellt,
in Millisekunden seit der UNIX-Epoche, zu dem der Browser das letzte Byte der
Antwort empfangen hat, oder wenn die Verbindung geschlossen wurde, falls dies zuerst geschah, vom Server,
aus einem Cache oder aus einer lokalen Ressource.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("PerformanceTiming")}} Schnittstelle, zu der sie gehört.
