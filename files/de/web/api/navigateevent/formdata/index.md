---
title: "NavigateEvent: formData-Eigenschaft"
short-title: formData
slug: Web/API/NavigateEvent/formData
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`formData`**-Eigenschaft der
[`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das [`FormData`](/de/docs/Web/API/FormData)-Objekt zurückgibt, das die eingereichten Daten im Falle einer [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)-Formularübermittlung repräsentiert, oder `null` in anderen Fällen.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
