---
title: "NavigationDestination: key-Eigenschaft"
short-title: key
slug: Web/API/NavigationDestination/key
l10n:
  sourceCommit: ac7f942ac73066dcf643f02f8b9f969ccf547220
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`key`**-Eigenschaft der [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Schnittstelle gibt den [`key`](/de/docs/Web/API/NavigationHistoryEntry/key)-Wert des Ziel-Elementes [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder einen leeren String anderweitig.

Der `key` ist ein eindeutiger, von der Benutzeroberfläche generierter Wert, der den Speicherplatz des Verlaufseintrags in der Liste der Verlaufs-Einträge darstellt, verwendet um an diese Stelle im Verlauf über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Er wird von anderen Einträgen, die den Eintrag in der Liste ersetzen (z.B. wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist), erneut genutzt.

## Wert

Ein String, der den `key` des Ziel-Elementes [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) darstellt, oder ein leerer String.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
