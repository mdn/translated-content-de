---
title: "Navigation: canGoBack-Eigenschaft"
short-title: canGoBack
slug: Web/API/Navigation/canGoBack
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`canGoBack`**-Eigenschaft der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die `true` zurückgibt, wenn es möglich ist, in der Navigation-Historie rückwärts zu navigieren (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der erste in der Historie-Eintragliste), und `false`, wenn dies nicht möglich ist.

## Wert

Ein boolescher Wert: `true`, wenn es möglich ist, in der Navigation-Historie rückwärts zu navigieren, `false` ansonsten.

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

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
