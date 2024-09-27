---
title: "NavigationHistoryEntry: key-Eigenschaft"
short-title: key
slug: Web/API/NavigationHistoryEntry/key
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`key`** der Schnittstelle [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gibt den `key` des Verlaufseintrags zurück oder einen leeren String, wenn das aktuelle Dokument nicht vollständig aktiv ist. Dies ist ein eindeutiger, vom User-Agent generierter Wert, der den Slot des Verlaufseintrags in der Eintragsliste repräsentiert. Er wird verwendet, um zu diesem speziellen Slot über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Der `key` wird von anderen Einträgen, die den Eintrag in der Liste ersetzen, wiederverwendet (das heißt, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).

Dies unterscheidet sich von der [`id`](/de/docs/Web/API/NavigationHistoryEntry/id) eines Verlaufseintrags. Die `id` ist ein eindeutiger, vom User-Agent generierter Wert, der immer einen bestimmten Verlaufseintrag und nicht seinen Slot in der Eintragsliste darstellt. Dies ist nützlich, um ihn mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.

## Wert

Ein String, der den `key` des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) darstellt.

## Beispiele

### Grundlegende Verwendung

```js
const current = navigation.currentEntry;
console.log(current.key);
```

### Einrichten eines Home-Buttons

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
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
