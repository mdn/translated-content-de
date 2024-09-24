---
title: "PerformanceTiming: navigationStart-Eigenschaft"
short-title: navigationStart
slug: Web/API/PerformanceTiming/navigationStart
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet.
> Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}} Schnittstelle.

Die veraltete
**`PerformanceTiming.navigationStart`**
schreibgeschützte Eigenschaft gibt ein `unsigned long long` zurück, das den Moment
in Millisekunden seit der UNIX-Epoche darstellt, unmittelbar nachdem das Entladen des vorherigen Dokuments im gleichen Browsing-Kontext abgeschlossen ist. Wenn es kein vorheriges Dokument gibt,
entspricht dieser Wert dem von {{domxref("PerformanceTiming.fetchStart")}}.

## Wert

Ein `unsigned long long`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("PerformanceTiming")}} Schnittstelle, zu der sie gehört.
