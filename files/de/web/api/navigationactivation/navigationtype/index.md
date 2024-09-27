---
title: "NavigationActivation: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigationActivation/navigationType
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`navigationType`** schreibgeschützte Eigenschaft des [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Interfaces enthält einen String, der den Navigations-Typ angibt.

## Wert

Ein String, der den Navigations-Typ repräsentiert, auf den sich die [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) bezieht. Mögliche Werte sind:

- `push`: Ein neuer Ort wurde navigiert, wodurch ein neuer Eintrag in die Verlaufsliste hinzugefügt wurde.
- `reload`: Die [`NavigationActivation.entry`](/de/docs/Web/API/NavigationActivation/entry) wurde neu geladen.
- `replace`: Die [`NavigationActivation.entry`](/de/docs/Web/API/NavigationActivation/entry) wurde durch einen neuen Verlaufseintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) verwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen bekommen.
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
