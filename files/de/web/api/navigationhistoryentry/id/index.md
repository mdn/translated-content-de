---
title: "NavigationHistoryEntry: id-Eigenschaft"
short-title: id
slug: Web/API/NavigationHistoryEntry/id
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`id`**-Eigenschaft des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Interfaces ist schreibgeschützt und gibt die `id` des Verlaufseintrags oder einen leeren String zurück, wenn das aktuelle Dokument nicht vollständig aktiv ist. Dies ist ein eindeutiger, von der Benutzeroberfläche generierter Wert, der immer einen bestimmten Verlaufseintrag darstellt und nützlich ist, um ihn mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.

Dies unterscheidet sich vom [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) eines Verlaufseintrags. Der `key` ist ein eindeutiger, von der Benutzeroberfläche generierter Wert, der den Slot des Verlaufseintrags in der Eintragsliste darstellt, nicht den Eintrag selbst. Er wird verwendet, um in diesem bestimmten Slot über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Der `key` wird von anderen Einträgen wiederverwendet, die den Eintrag in der Liste ersetzen (d.h. wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).

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
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
