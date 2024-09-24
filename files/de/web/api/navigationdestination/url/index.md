---
title: "NavigationDestination: url-Eigenschaft"
short-title: url
slug: Web/API/NavigationDestination/url
l10n:
  sourceCommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`url`**-Schreibgeschützte Eigenschaft des
{{domxref("NavigationDestination")}}-Interfaces gibt die URL zurück, zu der navigiert wird.

## Wert

Ein String.

## Beispiele

### Umgang mit einer Navigation mit `intercept()`

```js
navigation.addEventListener("navigate", (event) => {
  // Beenden Sie frühzeitig, wenn diese Navigation nicht abgefangen werden soll,
  // z.B. wenn die Navigation eine anderen Ursprung hat oder ein Download-Anfrage
  if (shouldNotIntercept(event)) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // Die URL hat sich bereits geändert, also zeigen Sie einen Platzhalter,
        // während Sie den neuen Inhalt abrufen, wie z.B. einen Spinner
        oder eine Lade-Seite
        renderArticlePagePlaceholder();

        // Abrufen und Anzeigen des neuen Inhalts, sobald er bereit ist
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderner clientseitiger Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
