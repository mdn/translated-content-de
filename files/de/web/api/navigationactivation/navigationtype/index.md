---
title: "NavigationActivation: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigationActivation/navigationType
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die schreibgeschützte **`navigationType`**-Eigenschaft der [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Schnittstelle enthält einen String, der den Typ der Navigation angibt.

## Wert

Ein String, der den Navigationstyp darstellt, auf den sich die [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) bezieht. Mögliche Werte sind:

- `push`: Zu einem neuen Ort wurde navigiert, wodurch ein neuer Eintrag in die Verlaufsliste eingefügt wurde.
- `reload`: Die [`NavigationActivation.entry`](/de/docs/Web/API/NavigationActivation/entry) wurde neu geladen.
- `replace`: Die [`NavigationActivation.entry`](/de/docs/Web/API/NavigationActivation/entry) wurde durch einen neuen Verlaufseintrag ersetzt. Dieser neue Eintrag verwendet denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key), erhält jedoch eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id).
- `traverse`: Der Browser navigierte von einem vorhandenen Verlaufseintrag zu einem anderen vorhandenen Verlaufseintrag.

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
