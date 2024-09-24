---
title: "Performance: navigation-Eigenschaft"
short-title: navigation
slug: Web/API/Performance/navigation
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

Die veraltete, schreibgeschützte Eigenschaft
**`Performance.navigation`**
gibt ein {{domxref("PerformanceNavigation")}}-Objekt zurück, das die Art der Navigation
im gegebenen Browsing-Kontext darstellt, wie beispielsweise die Anzahl der notwendigen
Weiterleitungen, um die Ressource abzurufen.

Diese Eigenschaft ist in Workern nicht verfügbar.

> [!WARNING]
> Diese Eigenschaft ist im [Navigation Timing Level 2 Specifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden
> Sie stattdessen das {{domxref("PerformanceNavigationTiming")}}-Interface.

## Wert

Ein {{domxref("PerformanceNavigation")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("Performance")}}-Interface, zu dem es gehört.
