---
title: "Navigation: canGoForward-Eigenschaft"
short-title: canGoForward
slug: Web/API/Navigation/canGoForward
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`canGoForward`** der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle gibt `true` zurück, wenn es möglich ist, in der Navigationshistorie vorwärts zu navigieren (d.h. der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ist nicht der letzte Eintrag in der Historieneintragsliste), und `false`, wenn dies nicht möglich ist.

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API-Erklärungsdokument](https://github.com/WICG/navigation-api/blob/main/README.md)
