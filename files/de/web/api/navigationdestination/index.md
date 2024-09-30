---
title: NavigationDestination
slug: Web/API/NavigationDestination
l10n:
  sourceCommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`NavigationDestination`**-Schnittstelle der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert das Ziel, zu dem in der aktuellen Navigation navigiert wird.

Sie wird über die [`NavigateEvent.destination`](/de/docs/Web/API/NavigateEvent/destination)-Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`id`](/de/docs/Web/API/NavigationDestination/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`id`](/de/docs/Web/API/NavigationHistoryEntry/id)-Wert des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder sonst ein leerer String.
- [`index`](/de/docs/Web/API/NavigationDestination/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`index`](/de/docs/Web/API/NavigationHistoryEntry/index)-Wert des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder `-1` sonst.
- [`key`](/de/docs/Web/API/NavigationDestination/key) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`key`](/de/docs/Web/API/NavigationHistoryEntry/key)-Wert des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder sonst ein leerer String.
- [`sameDocument`](/de/docs/Web/API/NavigationDestination/sameDocument) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation zum selben `document` wie der aktuelle [`Document`](/de/docs/Web/API/Document)-Wert erfolgt, oder `false` sonst.
- [`url`](/de/docs/Web/API/NavigationDestination/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die URL zurück, zu der navigiert wird.

## Instanz-Methoden

- [`getState()`](/de/docs/Web/API/NavigationDestination/getState) {{Experimental_Inline}}
  - : Gibt einen Klon des verfügbaren Zustands zurück, der mit dem Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) oder dem Navigationsvorgang (z.B. [`navigate()`](/de/docs/Web/API/Navigation/navigate)) verknüpft ist.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  // Exit early if this navigation shouldn't be intercepted,
  // e.g. if the navigation is cross-origin, or a download request
  if (shouldNotIntercept(event)) {
    return;
  }

  // Returns a URL() object constructed from the
  // NavigationDestination.url value
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // The URL has already changed, so show a placeholder while
        // fetching the new content, such as a spinner or loading page
        renderArticlePagePlaceholder();

        // Fetch the new content and display when ready
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

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)
