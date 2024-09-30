---
title: "NavigationDestination: Eigenschaft sameDocument"
short-title: sameDocument
slug: Web/API/NavigationDestination/sameDocument
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`sameDocument`**-Eigenschaft des schreibgeschützten [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Interfaces gibt `true` zurück, wenn die Navigation zum gleichen `document` wie der aktuelle [`Document`](/de/docs/Web/API/Document)-Wert erfolgt, oder `false` andernfalls.

Dies ist nützlich, um zu überprüfen, ob die Navigation innerhalb desselben Dokuments oder zu einem anderen Dokument erfolgt.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
