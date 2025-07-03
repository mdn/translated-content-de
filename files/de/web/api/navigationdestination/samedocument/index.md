---
title: "NavigationDestination: sameDocument-Eigenschaft"
short-title: sameDocument
slug: Web/API/NavigationDestination/sameDocument
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`sameDocument`**-Eigenschaft des [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Interfaces gibt `true` zurück, wenn die Navigation zum gleichen `document` wie der aktuelle [`Document`](/de/docs/Web/API/Document)-Wert erfolgt, oder `false` andernfalls.

Dies ist nützlich, um zu überprüfen, ob die Navigation innerhalb desselben Dokuments oder zwischen unterschiedlichen Dokumenten stattfindet.

## Wert

Ein boolean.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.sameDocument);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderner clientseitiger Routing: die Navigation-API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
