---
title: "PerformanceTiming: connectStart-Eigenschaft"
short-title: connectStart
slug: Web/API/PerformanceTiming/connectStart
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft **`PerformanceTiming.connectStart`** gibt ein `unsigned long long` zurück, das den Moment in Millisekunden seit dem UNIX-Epoch darstellt, in dem die Anfrage zur Eröffnung einer Verbindung an das Netzwerk gesendet wird. Wenn die Transportschicht einen Fehler meldet und der Verbindungsaufbau erneut gestartet wird, wird die letzte Startzeit des Verbindungsaufbaus angegeben. Wenn eine persistente Verbindung verwendet wird, ist der Wert derselbe wie [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart).

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der sie gehört.
