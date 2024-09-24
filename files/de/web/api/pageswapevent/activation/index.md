---
title: "PageSwapEvent: Aktivierungseigenschaft"
short-title: Aktivierung
slug: Web/API/PageSwapEvent/activation
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`activation`** schreibgeschützte Eigenschaft der {{domxref("PageSwapEvent")}} Schnittstelle enthält ein {{domxref("NavigationActivation")}}-Objekt, das den Navigationstyp sowie die aktuellen und Ziel-Dokumenthistorieneinträge für eine Navigation mit gleicher Herkunft enthält.

## Wert

Ein {{domxref("NavigationActivation")}}-Objekt oder `null`, wenn die zugehörige Navigation irgendwo in der Umleitungskette eine Cross-Origin-URL enthält.

## Beispiele

Siehe die Hauptseite {{domxref("PageSwapEvent")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
