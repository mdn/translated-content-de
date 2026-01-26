---
title: "NavigateEvent: formData-Eigenschaft"
short-title: formData
slug: Web/API/NavigateEvent/formData
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`formData`**-Eigenschaft der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle gibt das [`FormData`](/de/docs/Web/API/FormData)-Objekt zurück, das die übermittelten Daten im Falle einer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Formularübermittlung darstellt, oder `null` sonst.

## Wert

Ein [`FormData`](/de/docs/Web/API/FormData)-Objekt oder `null`.

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

- [Moderne Client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
