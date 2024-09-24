---
title: "NavigationDestination: id-Eigenschaft"
short-title: id
slug: Web/API/NavigationDestination/id
l10n:
  sourceCommit: ac7f942ac73066dcf643f02f8b9f969ccf547220
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`id`**-Eigenschaft (nur lesbar) der {{domxref("NavigationDestination")}} Schnittstelle gibt den {{domxref("NavigationHistoryEntry.id", "id")}}-Wert des Ziel-{{domxref("NavigationHistoryEntry")}} zurück, wenn der {{domxref("NavigateEvent.navigationType")}} `traverse` ist, oder einen leeren String anderweitig.

Die `id` ist ein einzigartiger, von der Benutzeroberfläche generierter Wert, der immer den Verlaufseintrag repräsentiert. Sie ist nützlich, um einen Verlaufseintrag mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.

## Wert

Ein String, der die `id` des Ziel-{{domxref("NavigationHistoryEntry")}} repräsentiert, oder ein leerer String.

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

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
