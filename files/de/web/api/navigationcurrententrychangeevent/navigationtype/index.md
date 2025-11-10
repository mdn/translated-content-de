---
title: "NavigationCurrentEntryChangeEvent: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigationCurrentEntryChangeEvent/navigationType
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`navigationType`**-Eigenschaft des [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent)-Interfaces gibt den Typ der Navigation zurück, die zu der Änderung geführt hat. Die Eigenschaft kann `null` sein, wenn die Änderung durch [`Navigation.updateCurrentEntry()`](/de/docs/Web/API/Navigation/updateCurrentEntry) erfolgt.

## Wert

Ein aufgezählter Wert, der den Typ der Navigation darstellt.

Die möglichen Werte sind:

- `push`: Eine neue Adresse wird aufgerufen, wodurch ein neuer Eintrag in der Verlaufsliste hinzugefügt wird.
- `reload`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird neu geladen.
- `replace`: Der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) wird durch einen neuen Verlaufseintrag ersetzt. Dieser neue Eintrag verwendet denselben [`key`](/de/docs/Web/API/NavigationHistoryEntry/key), erhält jedoch eine andere [`id`](/de/docs/Web/API/NavigationHistoryEntry/id).
- `traverse`: Der Browser navigiert von einem bestehenden Verlaufseintrag zu einem anderen bestehenden Verlaufseintrag.

## Beispiele

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.navigationType);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
