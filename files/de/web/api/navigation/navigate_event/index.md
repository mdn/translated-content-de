---
title: "Navigation: navigate Event"
short-title: navigate
slug: Web/API/Navigation/navigate_event
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`navigate`**-Ereignis der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, sodass Sie bei Bedarf eingreifen können.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("navigate", (event) => { })

onnavigate = (event) => { }
```

## Ereignistyp

Ein [`NavigateEvent`](/de/docs/Web/API/NavigateEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

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
> Bevor die Navigation API verfügbar war, musste man, um etwas Ähnliches zu tun, alle Klick-Ereignisse auf Links überwachen, `event.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf durchführen und dann die Seitenanzeige basierend auf der neuen URL einrichten. Und dies würde nicht alle Navigationsvorgänge behandeln – nur von Benutzern initiierte Link-Klicks.

### Umgang mit Scrollen mittels `scroll()`

In diesem Beispiel der Abfangung einer Navigation beginnt die `handler()`-Funktion mit dem Abrufen und Rendern einiger Artikelinhalte, ruft dann aber anschließend einige sekundäre Inhalte ab und rendert diese. Es ist sinnvoll, die Seite zum Hauptartikelinhalt zu scrollen, sobald dieser verfügbar ist, damit der Benutzer damit interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte gerendert sind. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf zwischen den beiden hinzugefügt.

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

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
