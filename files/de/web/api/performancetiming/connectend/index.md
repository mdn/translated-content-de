---
title: "PerformanceTiming: connectEnd-Eigenschaft"
short-title: connectEnd
slug: Web/API/PerformanceTiming/connectEnd
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Schnittstelle.

Die veraltete
**`PerformanceTiming.connectEnd`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Moment in Millisekunden seit der UNIX-Epoche darstellt, in dem die Verbindung im Netzwerk geöffnet wird. Wenn die Transportschicht einen Fehler meldet und der Verbindungsaufbau erneut gestartet wird, wird die letzte Endzeit des Verbindungsaufbaus angegeben. Wenn eine persistente Verbindung verwendet wird, ist der Wert derselbe wie der von [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart). Eine Verbindung gilt als geöffnet, wenn alle sicheren Verbindungs-Handshakes oder SOCKS-Authentifizierungen abgeschlossen sind.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der es gehört.
