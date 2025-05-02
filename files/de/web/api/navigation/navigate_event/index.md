---
title: "Navigation: `navigate`-Event"
short-title: navigate
slug: Web/API/Navigation/navigate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`navigate`**-Event des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, und ermöglicht es Ihnen, diese bei Bedarf abzufangen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("navigate", (event) => { })

onnavigate = (event) => { }
```

## Ereignistyp

Ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent), das von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("NavigateEvent")}}

## Beispiele

### Umgang mit einer Navigation mittels `intercept()`

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

> [!NOTE]
> Bevor die Navigation API verfügbar war, hätten Sie, um etwas Ähnliches zu tun, alle Klick-Events auf Links abhören müssen, `event.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten müssen. Und das hätte nicht alle Navigationen behandelt — nur vom Benutzer initiierte Link-Klicks.

### Umgang mit Scrollen mittels `scroll()`

In diesem Beispiel zum Abfangen einer Navigation beginnt die Funktion `handler()` damit, einige Artikelinhalte abzurufen und darzustellen, und danach einige sekundäre Inhalte. Es ist sinnvoll, die Seite zu den Hauptartikelinhalten zu scrollen, sobald diese verfügbar sind, damit der Benutzer mit ihnen interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte dargestellt sind. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf zwischen den beiden eingefügt.

```js
navigation.addEventListener("navigate", (event) => {
  if (shouldNotIntercept(navigateEvent)) {
    return;
  }
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);

        event.scroll();

        const secondaryContent = await getSecondaryContent(url.pathname);
        addSecondaryContent(secondaryContent);
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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
