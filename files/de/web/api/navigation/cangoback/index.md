---
title: "Navigation: canGoBack-Eigenschaft"
short-title: canGoBack
slug: Web/API/Navigation/canGoBack
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`canGoBack`** des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces gibt `true` zurück, wenn es möglich ist, im Navigationsverlauf zurückzugehen (d. h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der erste in der Verlaufslisteneinträge), und `false`, wenn dies nicht der Fall ist.

## Wert

Ein boolescher Wert: `true`, wenn es möglich ist, im Navigationsverlauf zurückzugehen, andernfalls `false`.

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
