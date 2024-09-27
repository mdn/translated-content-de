---
title: "PerformanceTiming: connectEnd-Eigenschaft"
short-title: connectEnd
slug: Web/API/PerformanceTiming/connectEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete
**`PerformanceTiming.connectEnd`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Zeitpunkt in Millisekunden seit dem UNIX-Epoch darstellt, zu dem die Netzwerkverbindung geöffnet wird. Wenn die Transportschicht einen Fehler meldet und der Verbindungsaufbau erneut gestartet wird, wird die letzte Verbindungsaufbau-Endzeit angegeben. Wenn eine persistente Verbindung verwendet wird, ist der Wert derselbe wie [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart). Eine Verbindung gilt als geöffnet, wenn alle sicheren Verbindungshandshakes oder SOCKS-Authentifizierungen abgeschlossen sind.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der sie gehört.
