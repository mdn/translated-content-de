---
title: "NavigationDestination: key-Eigenschaft"
short-title: key
slug: Web/API/NavigationDestination/key
l10n:
  sourceCommit: ac7f942ac73066dcf643f02f8b9f969ccf547220
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`key`** des [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Interfaces gibt den [`key`](/de/docs/Web/API/NavigationHistoryEntry/key)-Wert des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, falls der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder einen leeren String andernfalls.

Der `key` ist ein eindeutiger, vom Benutzeragenten generierter Wert, der den Platz des Verlaufseintrags in der Verlaufeinträge-Liste darstellt. Er wird verwendet, um zu diesem Punkt im Verlauf über [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo) zu navigieren. Er wird von anderen Einträgen wiederverwendet, die den Eintrag in der Liste ersetzen (d.h. wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `replace` ist).

## Wert

Ein String, der den `key` des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) darstellt, oder ein leerer String.

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

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API-Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API live Demo](https://gigantic-honored-octagon.glitch.me/)
