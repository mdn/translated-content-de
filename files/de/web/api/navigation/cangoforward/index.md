---
title: "Navigation: canGoForward-Eigenschaft"
short-title: canGoForward
slug: Web/API/Navigation/canGoForward
l10n:
  sourceCommit: e00c30e3919b1cc08fa1ea3913e75a42a91add02
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`canGoForward`**-Eigenschaft des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces gibt `true` zurück, wenn es möglich ist, in der Navigationshistorie vorwärts zu navigieren (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der letzte in der Verlaufseintrag-Liste) und `false`, wenn dies nicht möglich ist.

## Wert

Ein boolescher Wert: `true`, wenn es möglich ist, in der Navigationshistorie vorwärts zu navigieren, andernfalls `false`.

## Beispiele

```js
async function backHandler() {
  if (navigation.canGoBack) {
    await navigation.back().finished;
    // Handle any required clean-up after
    // navigation has finished
  } else {
    displayBanner("You are on the first page");
  }
}

async function forwardHandler() {
  if (navigation.canGoForward) {
    await navigation.forward().finished;
    // Handle any required clean-up after
    // navigation has finished
  } else {
    displayBanner("You are on the last page");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routing: die Navigation-API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
