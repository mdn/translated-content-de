---
title: "NavigateEvent: canIntercept-Eigenschaft"
short-title: canIntercept
slug: Web/API/NavigateEvent/canIntercept
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`canIntercept`** der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle gibt `true` zurück, wenn die Navigation abgefangen und die URL umgeschrieben werden kann, andernfalls `false`.

Es gibt mehrere Regeln, wann eine Navigation abgefangen werden kann. Zum Beispiel:

- Sie können keine plattformübergreifenden Navigationsvorgänge abfangen.
- Sie können `http`- oder `https`-URLs abfangen, wenn sich nur die `path`-, `query`- und `fragment`-Teile der neuen URL von der aktuellen URL unterscheiden.
- Sie können `file`-URLs abfangen, wenn sich nur die `query`- und `fragment`-Teile der neuen URL unterscheiden.
- Bei anderen URL-Typen können Sie die Navigation abfangen, wenn sich nur der `fragment`-Teil unterscheidet.

Siehe die Spezifikation für eine ausführlichere Erklärung, wann ein Dokument seine URL umgeschrieben bekommen kann, einschließlich einer Tabelle mit Beispielen: [wann ein Dokument seine URL umgeschrieben bekommen kann](https://html.spec.whatwg.org/multipage/nav-history-apis.html#can-have-its-url-rewritten).

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

- [Moderne client-seitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
