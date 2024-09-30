---
title: "NavigationHistoryEntry: key Eigenschaft"
short-title: key
slug: Web/API/NavigationHistoryEntry/key
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`key`**-Eigenschaft des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Interfaces ist eine schreibgeschützte Eigenschaft, die den `key` des Verlaufseintrags zurückgibt, oder einen leeren String, wenn das aktuelle Dokument nicht vollständig aktiv ist. Dies ist ein einzigartiger, vom Benutzeragenten generierter Wert, der den Slot des Verlaufseintrags in der Eintragsliste repräsentiert. Es wird verwendet, um diesen bestimmten Slot über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Der `key` wird von anderen Einträgen verwendet, die den Eintrag in der Liste ersetzen (das heißt, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).

Dies unterscheidet sich von der [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) eines Verlaufseintrags. Die `id` ist ein einzigartiger, vom Benutzeragenten generierter Wert, der immer einen bestimmten Verlaufseintrag anstelle seines Platzes in der Eintragsliste darstellt. Dies ist nützlich, um ihn mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.

## Wert

Ein String, der den `key` des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) repräsentiert.

## Beispiele

### Grundlegende Verwendung

```js
const current = navigation.currentEntry;
console.log(current.key);
```

### Einrichten einer Home-Schaltfläche

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
