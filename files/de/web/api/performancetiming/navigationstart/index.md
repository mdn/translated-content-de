---
title: "PerformanceTiming: navigationStart-Eigenschaft"
short-title: navigationStart
slug: Web/API/PerformanceTiming/navigationStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet.
> Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete, schreibgeschützte Eigenschaft **`PerformanceTiming.navigationStart`** gibt ein `unsigned long long` zurück, das den Moment in Millisekunden seit der UNIX-Epoche darstellt, unmittelbar nachdem der Ladevorgang für das vorherige Dokument im selben Browsing-Kontext beendet wird. Wenn kein vorheriges Dokument vorhanden ist, wird dieser Wert mit [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart) identisch sein.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der es gehört.
