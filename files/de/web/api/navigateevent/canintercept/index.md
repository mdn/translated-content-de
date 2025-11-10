---
title: "NavigateEvent: canIntercept Eigenschaft"
short-title: canIntercept
slug: Web/API/NavigateEvent/canIntercept
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`canIntercept`** des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Interfaces gibt `true` zurück, wenn die Navigation abgefangen und die URL umgeschrieben werden kann, andernfalls `false`.

Es gibt mehrere Regeln, wann eine Navigation abgefangen werden kann. Zum Beispiel:

- Sie können keine Cross-Origin-Navigationen abfangen.
- Sie können `http` oder `https` URLs abfangen, wenn sich nur der `path`, `query` und `fragment` Anteil der neuen URL von der aktuellen URL unterscheidet.
- Sie können `file` URLs abfangen, wenn sich nur der `query` und `fragment` Anteil der neuen URL unterscheidet.
- Für andere URL-Typen können Sie die Navigation abfangen, wenn sich nur der `fragment` Anteil unterscheidet.

Siehe die Spezifikation für weitere Erklärungen dazu, [wann ein Dokument seine URL umgeschrieben bekommen kann](https://html.spec.whatwg.org/multipage/nav-history-apis.html#can-have-its-url-rewritten), einschließlich einer Tabelle mit Beispielen.

## Wert

Ein Boolescher Wert—`true`, wenn die Navigation abgefangen werden kann, `false`, wenn nicht.

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

- [Moderner Client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
