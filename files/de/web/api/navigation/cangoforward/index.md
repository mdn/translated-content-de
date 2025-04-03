---
title: "Navigation: canGoForward-Eigenschaft"
short-title: canGoForward
slug: Web/API/Navigation/canGoForward
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`canGoForward`**-Eigenschaft des
[`Navigation`](/de/docs/Web/API/Navigation)-Interfaces gibt `true` zurück, wenn es möglich ist, vorwärts in der Navigationshistorie zu navigieren
(d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der letzte Eintrag in der Historienliste),
und `false`, wenn dies nicht der Fall ist.

## Wert

Ein boolescher Wert: `true`, wenn es möglich ist, vorwärts in der Navigationshistorie zu navigieren, andernfalls `false`.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
