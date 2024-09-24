---
title: "PerformanceTiming: connectEnd-Eigenschaft"
short-title: connectEnd
slug: Web/API/PerformanceTiming/connectEnd
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}}
> Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft
**`PerformanceTiming.connectEnd`**
gibt einen `unsigned long long` zurück, der den Zeitpunkt in Millisekunden seit dem UNIX-Epoch darstellt, zu dem die Netzwerkverbindung geöffnet wird. Wenn die Transportschicht einen Fehler meldet und die Verbindung erneut hergestellt wird, wird die letzte Verbindungsherstellungszeit angegeben. Bei einer persistenten Verbindung ist der Wert derselbe wie bei {{domxref("PerformanceTiming.fetchStart")}}. Eine Verbindung gilt als geöffnet, wenn alle sicheren Verbindungshandshakes oder SOCKS-Authentifizierungen abgeschlossen sind.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("PerformanceTiming")}}-Schnittstelle, zu der es gehört.
