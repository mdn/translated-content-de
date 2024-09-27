---
title: "PerformanceTiming: fetchStart-Eigenschaft"
short-title: fetchStart
slug: Web/API/PerformanceTiming/fetchStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete
**`PerformanceTiming.fetchStart`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Zeitpunkt darstellt,
seit der UNIX-Epoche in Millisekunden, zu dem der Browser bereit ist, das Dokument unter Verwendung einer
HTTP-Anfrage abzurufen. Dieser Moment ist _vor_ der Überprüfung auf einen Anwendungscache.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der sie gehört.
