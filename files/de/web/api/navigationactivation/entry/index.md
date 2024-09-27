---
title: "NavigationActivation: entry-Eigenschaft"
short-title: entry
slug: Web/API/NavigationActivation/entry
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`entry`** schreibgeschützte Eigenschaft der [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Schnittstelle enthält ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekt, das den Verlaufseintrag für das eingehende ("zu") Dokument in der Navigation darstellt. Dies entspricht der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft zu dem Zeitpunkt, an dem das eingehende Dokument aktiviert wurde.

Es gibt einige Fälle, in denen entweder die `from` oder `entry` [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekte keine zulässigen Ziele für die Methode `traverseTo()` wären, da sie möglicherweise nicht im Verlauf beibehalten werden. Zum Beispiel kann das Dokument mit `location.replace()` aktiviert werden oder sein initialer Eintrag könnte durch `history.replaceState()` ersetzt werden. Allerdings sind die `url`-Eigenschaften und `getState()`-Methoden dieser Einträge weiterhin zugänglich.

## Wert

Ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekt.

## Beispiele

Siehe die Hauptseite zu [`NavigationActivation`](/de/docs/Web/API/NavigationActivation).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
