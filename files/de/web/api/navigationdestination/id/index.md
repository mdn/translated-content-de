---
title: "NavigationDestination: id-Eigenschaft"
short-title: id
slug: Web/API/NavigationDestination/id
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`id`**-Eigenschaft der [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Schnittstelle gibt den [`id`](/de/docs/Web/API/NavigationHistoryEntry/id)-Wert des Ziel-`NavigationHistoryEntry` zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder einen leeren String, andernfalls.

Die `id` ist ein eindeutiger, vom Benutzeragent generierter Wert, der immer den Verlaufseintrag darstellt und nützlich ist, um einen Verlaufseintrag mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.

## Wert

Ein String, der die `id` des Ziel-`NavigationHistoryEntry` repräsentiert, oder ein leerer String.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.id);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
