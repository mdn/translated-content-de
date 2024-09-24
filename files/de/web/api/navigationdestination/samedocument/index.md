---
title: "NavigationDestination: Eigenschaft sameDocument"
short-title: sameDocument
slug: Web/API/NavigationDestination/sameDocument
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`sameDocument`** der {{domxref("NavigationDestination")}}-Schnittstelle gibt `true` zurück, wenn die Navigation zum gleichen `document` wie der aktuelle Wert des {{domxref("Document")}} erfolgt, oder `false` andernfalls.

Dies ist nützlich, um zu überprüfen, ob die Navigation innerhalb desselben Dokuments oder dokumentübergreifend erfolgen wird.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärt](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
