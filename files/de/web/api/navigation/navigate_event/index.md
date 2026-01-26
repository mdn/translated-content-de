---
title: "Navigation: navigate-Event"
short-title: navigate
slug: Web/API/Navigation/navigate_event
l10n:
  sourceCommit: e7ffb2866dc8b67280801535c7f58bf073a5aaf9
---

{{APIRef("Navigation API")}}

Der **`navigate`**-Ereignis des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces wird ausgelöst, wenn [eine beliebige Art der Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) eingeleitet wird, sodass Sie diese bei Bedarf abfangen können.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("navigate", (event) => { })

onnavigate = (event) => { }
```

## Ereignistyp

Ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("NavigateEvent")}}

## Beispiele

### Handhabung einer Navigation mit `intercept()`

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
> Bevor die Navigation API verfügbar war, mussten Sie, um etwas Ähnliches zu erreichen, auf alle Klickereignisse bei Links hören, `event.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und dies würde nicht alle Navigationsvorgänge abdecken – nur benutzerinitiierte Link-Klicks.

### Handhabung des Scrollens mit `scroll()`

In diesem Beispiel zum Abfangen einer Navigation beginnt die Funktion `handler()` damit, einige Artikelinhalte abzurufen und darzustellen. Anschließend werden jedoch einige sekundäre Inhalte abgerufen und gerendert. Es ist sinnvoll, die Seite auf die Hauptartikelinhalte zu scrollen, sobald diese verfügbar sind, sodass der Benutzer damit interagieren kann, anstatt darauf zu warten, dass auch die sekundären Inhalte gerendert werden. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf zwischen den beiden hinzugefügt.

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

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
