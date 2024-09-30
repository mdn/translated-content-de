---
title: "NavigateEvent: canIntercept-Eigenschaft"
short-title: canIntercept
slug: Web/API/NavigateEvent/canIntercept
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`canIntercept`** des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt `true` zurück, wenn die Navigation abgefangen und die URL umgeschrieben werden kann, oder `false` andernfalls.

Es gibt mehrere Regeln dafür, wann eine Navigation abgefangen werden kann. Zum Beispiel:

- Sie können keine Cross-Origin-Navigationen abfangen.
- Sie können `http`- oder `https`-URLs abfangen, wenn sich nur die `path`-, `query`- und `fragment`-Teile der neuen URL von der aktuellen URL unterscheiden.
- Sie können `file`-URLs abfangen, wenn sich nur die `query`- und `fragment`-Teile der neuen URL unterscheiden.
- Bei anderen URL-Typen können Sie die Navigation abfangen, wenn sich nur der `fragment`-Teil unterscheidet.

Siehe die Spezifikation für eine genauere Erklärung, [wann ein Dokument seine URL umgeschrieben haben kann](https://html.spec.whatwg.org/multipage/nav-history-apis.html#can-have-its-url-rewritten), einschließlich einer Tabelle mit Beispielen.

## Wert

Ein boolescher Wert—`true`, wenn die Navigation abgefangen werden kann, `false`, wenn nicht.

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
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
