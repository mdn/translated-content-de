---
title: "Navigation: navigate-Ereignis"
short-title: navigate
slug: Web/API/Navigation/navigate_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Navigation API")}}

Das **`navigate`**-Ereignis der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle wird ausgelöst, wenn [eine Navigation beliebigen Typs](https://github.com/WICG/navigation-api#appendix-types-of-navigations) eingeleitet wird. So können Sie bei Bedarf eingreifen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("navigate", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onnavigate = (event) => { }
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
> Bevor die Navigation API verfügbar war, mussten Sie für ein ähnliches Verhalten alle Klickereignisse auf Links überwachen, `event.preventDefault()` aufrufen, den passenden Aufruf von [`History.pushState()`](/de/docs/Web/API/History/pushState) durchführen und anschließend die Seitenansicht anhand der neuen URL einrichten. Damit ließen sich jedoch nicht alle Navigationen behandeln, sondern nur Link-Klicks, die von Benutzern ausgelöst wurden.

### Scrollen mit `scroll()` behandeln

In diesem Beispiel für das Abfangen einer Navigation ruft die Funktion `handler()` zunächst Artikelinhalte ab und stellt sie dar. Danach ruft sie weitere Inhalte ab und stellt auch diese dar. Es ist sinnvoll, zur Artikelhauptansicht zu scrollen, sobald sie verfügbar ist, damit Benutzer mit ihr interagieren können, statt zu warten, bis auch die weiteren Inhalte dargestellt sind. Dazu wurde zwischen den beiden Schritten ein Aufruf von [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) eingefügt.

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
- [Erläuterung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
