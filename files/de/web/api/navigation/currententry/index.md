---
title: "Navigation: currentEntry-Eigenschaft"
short-title: currentEntry
slug: Web/API/Navigation/currentEntry
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`currentEntry`**-Eigenschaft des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces gibt ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt zurück, das den Ort repräsentiert, an dem sich der Benutzer gerade befindet.

## Wert

Ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt.

## Beispiele

```js
function initHomeBtn() {
  // Get the key of the first loaded entry
  // so the user can always go back to this view.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// Intercept navigate events, such as link clicks, and
// replace them with single-page navigations
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // Navigate to a different view,
      // but the "home" button will always work.
    },
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
