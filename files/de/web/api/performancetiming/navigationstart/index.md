---
title: "PerformanceTiming: navigationStart-Eigenschaft"
short-title: navigationStart
slug: Web/API/PerformanceTiming/navigationStart
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet.
> Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete
**`PerformanceTiming.navigationStart`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Moment darstellt,
in Millisekunden seit dem UNIX-Epoch, unmittelbar nachdem die Aufforderung zum Entladen
des vorherigen Dokuments im selben Browsing-Kontext beendet wurde. Wenn es kein vorheriges Dokument gibt,
wird dieser Wert derselbe sein wie [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart).

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle, zu der sie gehört.
