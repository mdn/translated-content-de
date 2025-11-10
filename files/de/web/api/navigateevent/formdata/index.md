---
title: "NavigateEvent: formData-Eigenschaft"
short-title: formData
slug: Web/API/NavigateEvent/formData
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`formData`**-Eigenschaft der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle gibt das [`FormData`](/de/docs/Web/API/FormData)-Objekt zurück, das die gesendeten Daten im Fall einer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Formularübertragung darstellt, oder `null`, wenn keine vorliegt.

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
