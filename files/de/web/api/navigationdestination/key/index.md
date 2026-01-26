---
title: "NavigationDestination: key-Eigenschaft"
short-title: key
slug: Web/API/NavigationDestination/key
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die schreibgeschützte **`key`**-Eigenschaft der [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Schnittstelle gibt den [`key`](/de/docs/Web/API/NavigationHistoryEntry/key)-Wert des Ziel-`[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)` zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder einen leeren String sonst.

Der `key` ist ein einzigartiger, von der Benutzeroberfläche generierter Wert, der den Platz des Verlaufs-Eintrags in der Verlaufseintragsliste repräsentiert und verwendet wird, um über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) an diesen Ort im Verlauf zu navigieren. Er wird von anderen Einträgen wiederverwendet, die den Eintrag in der Liste ersetzen (d.h. wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).

## Wert

Ein String, der den `key` des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) repräsentiert, oder ein leerer String.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.key);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne klientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API-Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
