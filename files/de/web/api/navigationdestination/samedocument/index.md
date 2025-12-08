---
title: "NavigationDestination: sameDocument-Eigenschaft"
short-title: sameDocument
slug: Web/API/NavigationDestination/sameDocument
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die schreibgeschützte Eigenschaft **`sameDocument`** des [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Interfaces gibt `true` zurück, wenn die Navigation zum gleichen `Document` wie der aktuelle [`Document`](/de/docs/Web/API/Document)-Wert erfolgt, oder `false` andernfalls.

Dies ist nützlich, um zu überprüfen, ob die Navigation im gleichen Dokument oder zwischen verschiedenen Dokumenten erfolgt.

## Wert

Ein boolescher Wert.

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

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
