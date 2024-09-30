---
title: "NavigationHistoryEntry: id-Eigenschaft"
short-title: id
slug: Web/API/NavigationHistoryEntry/id
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`id`**-Eigenschaft des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Interfaces gibt die `id` des Verlaufseintrags zurück oder einen leeren String, wenn das aktuelle Dokument nicht vollständig aktiv ist. Dies ist ein einzigartiger, vom Benutzeragenten (UA) generierter Wert, der immer einen bestimmten Verlaufseintrag repräsentiert und nützlich ist, um ihn mit einer externen Ressource wie einem Speichercache abzugleichen.

Dies unterscheidet sich von dem [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) eines Verlaufseintrags. Der `key` ist ein einzigartiger, vom UA generierter Wert, der den Slot des Verlaufseintrags in der Eintragsliste darstellt, anstatt den Eintrag selbst. Er wird verwendet, um diesen bestimmten Slot über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Der `key` wird von anderen Einträgen wiederverwendet, die den Eintrag in der Liste ersetzen (das heißt, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
