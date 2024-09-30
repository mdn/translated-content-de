---
title: "PerformanceTiming: fetchStart-Eigenschaft"
short-title: fetchStart
slug: Web/API/PerformanceTiming/fetchStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft **`PerformanceTiming.fetchStart`** gibt ein `unsigned long long` zurück, das den Zeitpunkt darstellt, in Millisekunden seit dem UNIX-Epoch, zu dem der Browser bereit ist, das Dokument mittels einer HTTP-Anfrage abzurufen. Dieser Zeitpunkt liegt _vor_ der Überprüfung auf einen Anwendungs-Cache.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der sie gehört.
