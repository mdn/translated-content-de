---
title: "PerformanceTiming: Eigenschaft fetchStart"
short-title: fetchStart
slug: Web/API/PerformanceTiming/fetchStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}}
> Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft
**`PerformanceTiming.fetchStart`**
gibt einen `unsigned long long` zurück, der den Moment darstellt,
in Millisekunden seit der UNIX-Epoche, zu dem der Browser bereit ist, das Dokument mithilfe
einer HTTP-Anfrage abzurufen. Dieser Moment liegt _vor_ der Überprüfung eines Anwendungscaches.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("PerformanceTiming")}} Schnittstelle, zu der sie gehört.
