---
title: "NavigationActivation: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigationActivation/navigationType
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`navigationType`** der [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Schnittstelle enthält einen Zeichenfolgenwert, der den Typ der Navigation angibt.

## Wert

Eine Zeichenfolge, die den Navigationstyp darstellt, auf den sich die [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) bezieht. Mögliche Werte sind:

- `push`: Zu einem neuen Standort wurde navigiert, wodurch ein neuer Eintrag in die Verlaufsliste eingefügt wurde.
- `reload`: Der [`NavigationActivation.entry`](/de/docs/Web/API/NavigationActivation/entry) wurde neu geladen.
- `replace`: Der [`NavigationActivation.entry`](/de/docs/Web/API/NavigationActivation/entry) wurde durch einen neuen Verlaufseintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) erneut verwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen bekommen.
- `traverse`: Der Browser navigierte von einem bestehenden Verlaufseintrag zu einem anderen bestehenden Verlaufseintrag.

## Beispiele

```js
window.addEventListener("pageswap", (event) => {
  // For example, the page was hidden, or the navigation is cross-document.
  if (!event.viewTransition) return;

  // Skip the view transition for back/forward navigations.
  if (event.activation.navigationType === "traverse") {
    event.viewTransition.skipTransition();
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
