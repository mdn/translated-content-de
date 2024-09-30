---
title: "NavigationActivation: entry-Eigenschaft"
short-title: entry
slug: Web/API/NavigationActivation/entry
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`entry`**-Eigenschaft des schreibgeschützten [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Interfaces enthält ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt, das den Geschichts-Eintrag für das eingehende ("zu") Dokument in der Navigation repräsentiert. Dies entspricht der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft in dem Moment, in dem das eingehende Dokument aktiviert wurde.

Es gibt einige Fälle, in denen entweder die `from`- oder `entry`-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekte keine geeigneten Ziele für die `traverseTo()`-Methode wären, da sie möglicherweise nicht in der Historie behalten werden. Zum Beispiel kann das Dokument mit `location.replace()` aktiviert werden oder sein initialer Eintrag könnte durch `history.replaceState()` ersetzt worden sein. Dennoch sind die `url`-Eigenschaften dieser Einträge und die Methoden `getState()` weiterhin zugänglich.

## Wert

Ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt.

## Beispiele

Siehe die Hauptseite der [`NavigationActivation`](/de/docs/Web/API/NavigationActivation).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
