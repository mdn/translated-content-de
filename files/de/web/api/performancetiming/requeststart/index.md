---
title: "PerformanceTiming: requestStart-Eigenschaft"
short-title: requestStart
slug: Web/API/PerformanceTiming/requestStart
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ APIRef("PerformanceTiming") }}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Schnittstelle.

Die veraltete, nur lesbare Eigenschaft
**`PerformanceTiming.requestStart`**
gibt einen `unsigned long long` zurück, der den Zeitpunkt darstellt, in Millisekunden seit dem UNIX-Epoch, an dem der Browser die Anfrage zum Abrufen des tatsächlichen Dokuments an den Server oder aus einem Cache gesendet hat. Wenn die Transportschicht nach dem Beginn der Anfrage fehlschlägt und die Verbindung neu geöffnet wird, wird diese Eigenschaft auf die Zeit gesetzt, die der neuen Anfrage entspricht.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der es gehört.
