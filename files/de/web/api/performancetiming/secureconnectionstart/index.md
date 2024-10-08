---
title: "PerformanceTiming: secureConnectionStart-Eigenschaft"
short-title: secureConnectionStart
slug: Web/API/PerformanceTiming/secureConnectionStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft
**`PerformanceTiming.secureConnectionStart`**
gibt ein `unsigned long long` zurück, das den Moment darstellt,
in Millisekunden seit der UNIX-Epoche, an dem der sichere Verbindungshandshake beginnt. Wenn
keine solche Verbindung angefordert wird, gibt sie `0` zurück.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der sie gehört.
