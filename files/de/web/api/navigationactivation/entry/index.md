---
title: "NavigationActivation: entry-Eigenschaft"
short-title: entry
slug: Web/API/NavigationActivation/entry
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die schreibgeschützte Eigenschaft **`entry`** der [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Schnittstelle enthält ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt, das den Verlaufseintrag für das eingehende ("zu") Dokument in der Navigation darstellt. Dies entspricht der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft in dem Moment, in dem das eingehende Dokument aktiviert wurde.

Es gibt einige Fälle, in denen entweder die `from`- oder `entry`-Objekte vom Typ [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) keine zulässigen Ziele für die `traverseTo()`-Methode wären, da sie möglicherweise nicht im Verlauf beibehalten werden. Zum Beispiel kann das Dokument mit `location.replace()` aktiviert werden oder sein ursprünglicher Eintrag könnte durch `history.replaceState()` ersetzt werden. Allerdings sind die `url`-Eigenschaften und `getState()`-Methoden dieser Einträge weiterhin zugänglich.

## Wert

Ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt.

## Beispiele

Siehe die Hauptseite [`NavigationActivation`](/de/docs/Web/API/NavigationActivation).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
