---
title: "NavigationActivation: entry-Eigenschaft"
short-title: entry
slug: Web/API/NavigationActivation/entry
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`entry`** schreibgeschützte Eigenschaft des [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Interfaces enthält ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt, das den Verlaufseintrag für das eingehende ("to") Dokument in der Navigation darstellt. Dies entspricht der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft zum Zeitpunkt der Aktivierung des eingehenden Dokuments.

Es gibt einige Fälle, in denen entweder die `from`- oder `entry`-Objekte des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) keine geeigneten Ziele für die `traverseTo()`-Methode wären, da sie möglicherweise nicht im Verlauf gespeichert bleiben. Zum Beispiel kann das Dokument mit `location.replace()` aktiviert werden oder sein initialer Eintrag könnte durch `history.replaceState()` ersetzt werden. Dennoch sind die `url`-Eigenschaften und `getState()`-Methoden dieser Einträge weiterhin zugänglich.

## Wert

Ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt.

## Beispiele

Siehe die Hauptseite zu [`NavigationActivation`](/de/docs/Web/API/NavigationActivation).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
