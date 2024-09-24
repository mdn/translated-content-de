---
title: "PerformanceTiming: Eigenschaft connectStart"
short-title: connectStart
slug: Web/API/PerformanceTiming/connectStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die Schnittstelle {{domxref("PerformanceNavigationTiming")}}.

Die veraltete, schreibgeschützte Eigenschaft **`PerformanceTiming.connectStart`** gibt ein `unsigned long long` zurück, das den Zeitpunkt in Millisekunden seit der UNIX-Epoche darstellt, an dem die Anfrage zum Öffnen einer Verbindung an das Netzwerk gesendet wird. Wenn die Transportschicht einen Fehler meldet und die Verbindungsherstellung erneut gestartet wird, wird die Zeit des letzten Verbindungsaufbaus angegeben. Bei Verwendung einer persistenten Verbindung wird der Wert derselbe sein wie {{domxref("PerformanceTiming.fetchStart")}}.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("PerformanceTiming")}}-Schnittstelle, zu der sie gehört.
