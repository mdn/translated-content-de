---
title: "NavigationActivation: Eigenschaft navigationType"
short-title: navigationType
slug: Web/API/NavigationActivation/navigationType
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`navigationType`** schreibgeschützte Eigenschaft des [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Interfaces enthält einen String, der den Navigations-Typ angibt.

## Wert

Ein String, der den Navigationstyp repräsentiert, mit dem die [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) in Beziehung steht. Mögliche Werte sind:

- `push`: Es wurde zu einem neuen Ort navigiert, wodurch ein neuer Eintrag in die Historienliste eingefügt wurde.
- `reload`: Der [`NavigationActivation.entry`](/de/docs/Web/API/NavigationActivation/entry) wurde neu geladen.
- `replace`: Der [`NavigationActivation.entry`](/de/docs/Web/API/NavigationActivation/entry) wurde durch einen neuen Historieneintrag ersetzt. Dieser neue Eintrag wird denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) wiederverwenden, aber eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) zugewiesen bekommen.
- `traverse`: Der Browser ist von einem bestehenden Historieneintrag zu einem anderen bestehenden Historieneintrag navigiert.

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
- [View Transition API](/de/docs/Web/API/View_Transition_API)
