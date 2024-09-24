---
title: "NavigationActivation: entry-Eigenschaft"
short-title: entry
slug: Web/API/NavigationActivation/entry
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`entry`** schreibgeschützte Eigenschaft der {{domxref("NavigationActivation")}}-Schnittstelle enthält ein {{domxref("NavigationHistoryEntry")}}-Objekt, das den Verlaufseintrag für das eingehende ("to") Dokument in der Navigation darstellt. Dies entspricht der {{domxref("Navigation.currentEntry")}}-Eigenschaft in dem Moment, in dem das eingehende Dokument aktiviert wurde.

Es gibt einige Fälle, in denen entweder die `from`- oder `entry`-{{domxref("NavigationHistoryEntry")}}-Objekte keine geeigneten Ziele für die `traverseTo()`-Methode wären, da sie möglicherweise nicht im Verlauf gespeichert werden. Zum Beispiel kann das Dokument mit `location.replace()` aktiviert werden oder sein ursprünglicher Eintrag könnte durch `history.replaceState()` ersetzt werden. Dennoch sind die `url`-Eigenschaften dieser Einträge und `getState()`-Methoden weiterhin zugänglich.

## Wert

Ein {{domxref("NavigationHistoryEntry")}}-Objekt.

## Beispiele

Siehe die Hauptseite {{domxref("NavigationActivation")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
