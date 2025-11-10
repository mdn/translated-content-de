---
title: "NavigateEvent: downloadRequest-Eigenschaft"
short-title: downloadRequest
slug: Web/API/NavigateEvent/downloadRequest
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`downloadRequest`**-Schreibgeschützte Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt den Dateinamen der Datei zurück, die für den Download angefordert wurde, im Falle einer Download-Navigation (z. B. ein {{htmlelement("a")}} oder {{htmlelement("area")}}-Element mit einem `download`-Attribut), oder `null` andernfalls.

## Wert

Ein String, der den Dateinamen der angeforderten Datei für den Download enthält, oder `null`.

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
