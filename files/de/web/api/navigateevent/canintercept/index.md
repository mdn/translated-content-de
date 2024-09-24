---
title: "NavigateEvent: canIntercept-Eigenschaft"
short-title: canIntercept
slug: Web/API/NavigateEvent/canIntercept
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`canIntercept`** schreibgeschützte Eigenschaft des {{domxref("NavigateEvent")}}-Interfaces gibt `true` zurück, wenn die Navigation abgefangen und ihre URL umgeschrieben werden kann, oder `false` ansonsten.

Es gibt mehrere Regeln, wann eine Navigation abgefangen werden kann. Zum Beispiel:

- Sie können keine Cross-Origin-Navigationen abfangen.
- Sie können `http` oder `https` URLs abfangen, wenn sich nur die `path`-, `query`- und `fragment`-Teile der neuen URL von der aktuellen URL unterscheiden.
- Sie können `file` URLs abfangen, wenn sich nur die `query`- und `fragment`-Teile der neuen URL unterscheiden.
- Für andere URL-Typen können Sie die Navigation abfangen, wenn sich nur der `fragment`-Teil unterscheidet.

Siehe die Spezifikation für mehr Erklärungen darüber, [wann ein Dokument seine URL umgeschrieben bekommen kann](https://html.spec.whatwg.org/multipage/nav-history-apis.html#can-have-its-url-rewritten), einschließlich einer Tabelle mit Beispielen.

## Wert

Ein boolescher Wert—`true`, wenn die Navigation abgefangen werden kann, `false`, wenn nicht.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  // Einige Navigationen, z.B. Cross-Origin-Navigationen, können
  // wir nicht abfangen. Lassen Sie den Browser diese normal behandeln.
  if (!event.canIntercept) {
    return;
  }

  // Interceptieren Sie keine Fragmentnavigationen oder Downloads.
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
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
