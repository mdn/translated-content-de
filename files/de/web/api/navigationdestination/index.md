---
title: NavigationDestination
slug: Web/API/NavigationDestination
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Das **`NavigationDestination`** Interface der [Navigation API](/de/docs/Web/API/Navigation_API) repräsentiert das Ziel, zu dem im aktuellen Navigationsvorgang navigiert wird.

Es wird über die [`NavigateEvent.destination`](/de/docs/Web/API/NavigateEvent/destination) Eigenschaft aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`id`](/de/docs/Web/API/NavigationDestination/id) {{ReadOnlyInline}}
  - : Gibt den [`id`](/de/docs/Web/API/NavigationHistoryEntry/id)-Wert des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder einen leeren String andernfalls.
- [`index`](/de/docs/Web/API/NavigationDestination/index) {{ReadOnlyInline}}
  - : Gibt den [`index`](/de/docs/Web/API/NavigationHistoryEntry/index)-Wert des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder `-1` andernfalls.
- [`key`](/de/docs/Web/API/NavigationDestination/key) {{ReadOnlyInline}}
  - : Gibt den [`key`](/de/docs/Web/API/NavigationHistoryEntry/key)-Wert des Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, wenn der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) `traverse` ist, oder einen leeren String andernfalls.
- [`sameDocument`](/de/docs/Web/API/NavigationDestination/sameDocument) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Navigation zum gleichen `document` wie der aktuelle [`Document`](/de/docs/Web/API/Document)-Wert erfolgt, oder `false` andernfalls.
- [`url`](/de/docs/Web/API/NavigationDestination/url) {{ReadOnlyInline}}
  - : Gibt die URL zurück, zu der navigiert wird.

## Instanz-Methoden

- [`getState()`](/de/docs/Web/API/NavigationDestination/getState)
  - : Gibt eine Kopie des verfügbaren Zustands zurück, der mit dem Ziel-[`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) oder der Navigationsoperation (z.B. [`navigate()`](/de/docs/Web/API/Navigation/navigate)) verknüpft ist, je nachdem, was zutreffend ist.

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

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demo-Quellcode ansehen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
