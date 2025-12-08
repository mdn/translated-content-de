---
title: "Navigation: canGoForward-Eigenschaft"
short-title: canGoForward
slug: Web/API/Navigation/canGoForward
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die schreibgeschützte Eigenschaft **`canGoForward`** des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces gibt `true` zurück, wenn es möglich ist, vorwärts in der Navigation durch den Verlauf zu navigieren (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der letzte Eintrag in der Verlaufs-Eintragsliste), und `false`, wenn dies nicht möglich ist.

## Wert

Ein boolescher Wert: `true`, wenn es möglich ist, vorwärts in der Navigation durch den Verlauf zu navigieren, `false` andernfalls.

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

- [Moderne clientseitige Routenplanung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
