---
title: "PerformanceTiming: navigationStart-Eigenschaft"
short-title: navigationStart
slug: Web/API/PerformanceTiming/navigationStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 Specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet.
> Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) Schnittstelle.

Die veraltete
**`PerformanceTiming.navigationStart`**
schreibgeschützte Eigenschaft gibt eine `unsigned long long`-Zahl zurück, die den Moment darstellt,
in Millisekunden seit der UNIX-Epoche, unmittelbar nachdem die Unload-Eingabeaufforderung beim
vorherigen Dokument im selben Browsing-Kontext beendet wurde. Wenn es kein vorheriges Dokument gibt,
ist dieser Wert derselbe wie [`PerformanceTiming.fetchStart`](/de/docs/Web/API/PerformanceTiming/fetchStart).

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming) Schnittstelle, zu der es gehört.
