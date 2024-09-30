---
title: "NavigationDestination: id-Eigenschaft"
short-title: id
slug: Web/API/NavigationDestination/id
l10n:
  sourceCommit: ac7f942ac73066dcf643f02f8b9f969ccf547220
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`id`**-Eigenschaft der [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Schnittstelle gibt den [`id`](/de/docs/Web/API/NavigationHistoryEntry/id)-Wert des Ziel-`NavigationHistoryEntry` zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder einen leeren String ansonsten.

Die `id` ist ein einzigartiger, vom User-Agent generierter Wert, der immer den Verlaufseintrag darstellt. Sie ist nützlich, um einen Verlaufseintrag mit einer externen Ressource wie einem Speicher-Cache zu verknüpfen.

## Wert

Ein String, der die `id` des Ziel-`NavigationHistoryEntry` darstellt, oder ein leerer String.

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
