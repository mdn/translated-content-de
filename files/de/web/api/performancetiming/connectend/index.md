---
title: "PerformanceTiming: connectEnd-Eigenschaft"
short-title: connectEnd
slug: Web/API/PerformanceTiming/connectEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft **`PerformanceTiming.connectEnd`** gibt einen `unsigned long long` zurück, der den Moment darstellt, in Millisekunden seit dem UNIX-Epoch, zu dem die Verbindung im Netzwerk geöffnet wird. Wenn die Transportschicht einen Fehler meldet und der Verbindungsaufbau erneut gestartet wird, wird die letzte Zeit des Verbindungsaufbaus angegeben. Wenn eine persistente Verbindung verwendet wird, entspricht der Wert dem von [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart). Eine Verbindung wird als geöffnet betrachtet, wenn alle sicheren Verbindungshandshakes oder SOCKS-Authentifizierungen abgeschlossen sind.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der es gehört.
