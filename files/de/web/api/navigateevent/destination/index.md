---
title: "NavigateEvent: destination Eigenschaft"
short-title: destination
slug: Web/API/NavigateEvent/destination
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die schreibgeschützte **`destination`**-Eigenschaft der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle gibt ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt zurück, das das Ziel repräsentiert, zu dem navigiert wird.

## Wert

Ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  // Exit early if this navigation shouldn't be intercepted,
  // e.g. if the navigation is cross-origin, or a download request
  if (shouldNotIntercept(event)) {
    return;
  }

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

- [Modernes Client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erklärung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
