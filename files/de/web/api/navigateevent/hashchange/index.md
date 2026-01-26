---
title: "NavigateEvent: hashChange-Eigenschaft"
short-title: hashChange
slug: Web/API/NavigateEvent/hashChange
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`hashChange`**-Eigenschaft, die nur gelesen werden kann, der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle gibt `true` zurück, wenn die Navigation eine Fragmentnavigation ist (d.h. zu einem Fragmentbezeichner im selben Dokument) oder `false`, wenn dies nicht der Fall ist.

## Wert

Ein boolescher Wert—`true`, wenn die Navigation eine Fragmentnavigation ist, `false` andernfalls.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  // Some navigations, e.g. cross-origin navigations, we
  // cannot intercept. Let the browser handle those normally.
  if (!event.canIntercept) {
    return;
  }

  // Don't intercept fragment navigations or downloads.
  if (event.hashChange || event.downloadRequest !== null) {
    return;
  }

  event.intercept({
    handler() {
      if (event.formData) {
        processFormDataAndUpdateUI(event.formData, event.signal);
      } else {
        doSinglePageAppNav(event.destination, event.signal);
      }
    },
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API-Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
