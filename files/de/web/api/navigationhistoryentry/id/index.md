---
title: "NavigationHistoryEntry: id-Eigenschaft"
short-title: id
slug: Web/API/NavigationHistoryEntry/id
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`id`**-Eigenschaft der [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Schnittstelle gibt die `id` des Verlaufs-Eintrags zurück oder einen leeren String, wenn das aktuelle Dokument nicht vollständig aktiv ist. Dies ist ein eindeutiger, vom Benutzeragenten generierter Wert, der immer einen bestimmten Verlaufs-Eintrag darstellt und nützlich ist, um ihn mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.

Dies unterscheidet sich vom [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) eines Verlaufs-Eintrags. Der `key` ist ein eindeutiger, vom Benutzeragenten generierter Wert, der den Platz des Verlaufs-Eintrags in der Einträgsliste darstellt und nicht den Eintrag selbst. Er wird verwendet, um zu diesem bestimmten Platz über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Der `key` wird von anderen Einträgen wiederverwendet, die den Eintrag in der Liste ersetzen (das heißt, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).

## Wert

Ein String, der die `id` des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) darstellt.

## Beispiele

```js
const current = navigation.currentEntry;
console.log(current.id);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)
