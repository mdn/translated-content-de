---
title: NavigationDestination
slug: Web/API/NavigationDestination
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigationDestination`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert das Ziel, zu dem in der aktuellen Navigation navigiert wird.

Es wird über die [`NavigateEvent.destination`](/de/docs/Web/API/NavigateEvent/destination)-Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`id`](/de/docs/Web/API/NavigationDestination/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`id`](/de/docs/Web/API/NavigationHistoryEntry/id)-Wert des Ziel-`NavigationHistoryEntry` zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder einen leeren String anderweitig.
- [`index`](/de/docs/Web/API/NavigationDestination/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`index`](/de/docs/Web/API/NavigationHistoryEntry/index)-Wert des Ziel-`NavigationHistoryEntry` zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder `-1` anderweitig.
- [`key`](/de/docs/Web/API/NavigationDestination/key) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`key`](/de/docs/Web/API/NavigationHistoryEntry/key)-Wert des Ziel-`NavigationHistoryEntry` zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder einen leeren String anderweitig.
- [`sameDocument`](/de/docs/Web/API/NavigationDestination/sameDocument) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation zum gleichen `Document` wie das aktuelle [`Document`](/de/docs/Web/API/Document) erfolgt, oder `false` anderweitig.
- [`url`](/de/docs/Web/API/NavigationDestination/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die URL zurück, zu der navigiert wird.

## Instanz-Methoden

- [`getState()`](/de/docs/Web/API/NavigationDestination/getState) {{Experimental_Inline}}
  - : Gibt eine Kopie des verfügbaren Zustands zurück, der dem Ziel-`NavigationHistoryEntry` zugeordnet ist, oder, soweit angemessen, der Navigationsoperation (z.B. [`navigate()`](/de/docs/Web/API/Navigation/navigate)).

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
