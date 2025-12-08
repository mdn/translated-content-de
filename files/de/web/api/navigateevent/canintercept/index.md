---
title: "NavigateEvent: canIntercept Eigenschaft"
short-title: canIntercept
slug: Web/API/NavigateEvent/canIntercept
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`canIntercept`** schreibgeschützte Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt `true` zurück, wenn die Navigation abgefangen und ihre URL umgeschrieben werden kann, andernfalls `false`.

Es gibt mehrere Regeln, wann eine Navigation abgefangen werden kann. Zum Beispiel:

- Sie können keine Cross-Origin-Navigationen abfangen.
- Sie können `http`- oder `https`-URLs abfangen, wenn sich nur der `path`-, `query`- und `fragment`-Teil der neuen URL von der aktuellen URL unterscheidet.
- Sie können `file`-URLs abfangen, wenn sich nur der `query`- und `fragment`-Teil der neuen URL unterscheidet.
- Für andere URL-Typen können Sie die Navigation abfangen, wenn sich nur der `fragment`-Teil unterscheidet.

Weitere Erläuterungen, wann ein Dokument seine URL umgeschrieben haben kann, finden Sie in der Spezifikation: [when a Document can have its URL rewritten](https://html.spec.whatwg.org/multipage/nav-history-apis.html#can-have-its-url-rewritten), einschließlich einer Tabelle mit Beispielen.

## Wert

Ein boolescher Wert—`true`, wenn die Navigation abgefangen werden kann, `false` wenn nicht.

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

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API-Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
