---
title: "NavigationDestination: id-Eigenschaft"
short-title: id
slug: Web/API/NavigationDestination/id
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`id`**-Eigenschaft des [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Interfaces ist schreibgeschützt und gibt den [`id`](/de/docs/Web/API/NavigationHistoryEntry/id)-Wert des Ziel-`[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)` zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder einen leeren String in allen anderen Fällen.

Die `id` ist ein einzigartiger, vom UA generierter Wert, der immer den Verlaufseintrag repräsentiert und nützlich ist, um einen Verlaufseintrag mit einer externen Ressource wie einem Speichercache zu korrelieren.

## Wert

Ein String, der die `id` des Ziel-`[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)` repräsentiert, oder ein leerer String.

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
