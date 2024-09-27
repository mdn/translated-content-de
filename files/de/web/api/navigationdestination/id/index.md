---
title: "NavigationDestination: id-Eigenschaft"
short-title: id
slug: Web/API/NavigationDestination/id
l10n:
  sourceCommit: ac7f942ac73066dcf643f02f8b9f969ccf547220
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`id`** der Schnittstelle [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) gibt den [`id`](/de/docs/Web/API/NavigationHistoryEntry/id)-Wert des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder einen leeren String, andernfalls.

Die `id` ist ein eindeutiger, von der Benutzeroberfläche generierter Wert, der immer den Verlaufseintrag darstellt. Er ist nützlich, um einen Verlaufseintrag mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.

## Wert

Ein String, der die `id` des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) darstellt oder ein leerer String.

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
