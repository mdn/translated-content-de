---
title: "NavigationHistoryEntry: key-Eigenschaft"
short-title: key
slug: Web/API/NavigationHistoryEntry/key
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die schreibgeschützte **`key`**-Eigenschaft der [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Schnittstelle gibt den `key` des Verlaufseintrags zurück oder einen leeren String, wenn das aktuelle Dokument nicht vollständig aktiv ist. Dies ist ein einzigartiger, vom Benutzeragenten (UA) generierter Wert, der den Slot des Verlaufseintrags in der Liste der Einträge darstellt. Er wird verwendet, um zu diesem bestimmten Slot über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Der `key` wird von anderen Einträgen, die den Eintrag in der Liste ersetzen (das heißt, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist), wiederverwendet.

Dies unterscheidet sich von der [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) eines Verlaufseintrags. Die `id` ist ein einzigartiger, vom UA generierter Wert, der immer einen bestimmten Verlaufseintrag darstellt, anstatt seinen Slot in der Liste der Einträge. Dies ist nützlich, um ihn mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.

## Wert

Ein String, der den `key` der [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) darstellt.

## Beispiele

### Grundlegende Verwendung

```js
const current = navigation.currentEntry;
console.log(current.key);
```

### Ein Home-Button einrichten

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
