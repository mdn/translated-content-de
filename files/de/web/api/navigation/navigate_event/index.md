---
title: "Navigation: navigate-Ereignis"
short-title: navigate
slug: Web/API/Navigation/navigate_event
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`navigate`**-Ereignis der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird. Es bietet die Möglichkeit, die Navigation bei Bedarf abzufangen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("navigate", (event) => {});

onnavigate = (event) => {};
```

## Ereignistyp

Ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("NavigateEvent")}}

## Beispiele

### Eine Navigation mit `intercept()` behandeln

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
> Bevor die Navigation API verfügbar war, mussten Sie, um etwas Ähnliches zu erreichen, alle Klick-Ereignisse auf Links überwachen, `event.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Dies hätte jedoch nicht alle Navigationsarten erfasst - nur vom Benutzer initiierte Link-Klicks.

### Scrollen mit `scroll()` behandeln

In diesem Beispiel des Abfangens einer Navigation beginnt die `handler()`-Funktion damit, einige Artikelinhalte abzurufen und darzustellen. Anschließend werden einige sekundäre Inhalte abgerufen und dargestellt. Es ist sinnvoll, die Seite so bald wie möglich zum Hauptartikelinhalt zu scrollen, damit der Benutzer damit interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte dargestellt sind. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf zwischen den beiden eingefügt.

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

- [Moderner clientseitiger Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erläuterung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
