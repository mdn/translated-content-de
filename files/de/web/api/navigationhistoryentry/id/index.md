---
title: "NavigationHistoryEntry: id-Eigenschaft"
short-title: id
slug: Web/API/NavigationHistoryEntry/id
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`id`**-Eigenschaft des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Interfaces gibt die `id` des Historieneintrags zurück oder einen leeren String, wenn das aktuelle Dokument nicht vollständig aktiv ist. Dies ist ein eindeutiger, vom Benutzeragenten generierter Wert, der immer einen bestimmten Historieneintrag darstellt und nützlich ist, um ihn mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.

Dies unterscheidet sich vom [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) eines Historieneintrags. Der `key` ist ein eindeutiger, vom Benutzeragenten generierter Wert, der den Slot des Historieneintrags in der Eintragsliste repräsentiert und nicht den Eintrag selbst. Er wird verwendet, um zu diesem bestimmten Slot über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Der `key` wird von anderen Einträgen wiederverwendet, die den Eintrag in der Liste ersetzen (das heißt, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).

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
- [Navigation API Erklärungsdokument](https://github.com/WICG/navigation-api/blob/main/README.md)
