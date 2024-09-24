---
title: "Navigation: navigate Ereignis"
short-title: navigate
slug: Web/API/Navigation/navigate_event
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`navigate`** Ereignis der {{domxref("Navigation")}} Schnittstelle wird ausgelöst, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird, sodass Sie nach Bedarf eingreifen können.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("navigate", (event) => {});

onnavigate = (event) => {};
```

## Ereignistyp

Ein {{domxref("NavigateEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("NavigateEvent")}}

## Beispiele

### Umgang mit einer Navigation mittels `intercept()`

```js
navigation.addEventListener("navigate", (event) => {
  // Beenden Sie frühzeitig, wenn diese Navigation nicht abgefangen werden sollte,
  // z. B. wenn die Navigation Cross-Origin ist oder eine Download-Anfrage
  if (shouldNotIntercept(event)) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // Die URL hat sich bereits geändert, daher zeigen Sie einen Platzhalter,
        // z. B. einen Spinner oder eine Lade-Seite, während der neue Inhalt geladen wird.
        renderArticlePagePlaceholder();

        // Laden Sie den neuen Inhalt und zeigen Sie ihn an, wenn er bereit ist.
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }
});
```

> [!NOTE]
> Bevor die Navigation API verfügbar war, hätte man etwas Ähnliches erreichen müssen, indem man auf alle Klickereignisse auf Links hörte, `event.preventDefault()` ausführte, den entsprechenden {{domxref("History.pushState()")}} Aufruf durchführte und dann die Seitenansicht basierend auf der neuen URL einrichtete. Und dies würde nicht alle Navigationen behandeln — nur vom Benutzer initiierte Linkklicks.

### Umgang mit Scrollen mittels `scroll()`

In diesem Beispiel des Abfangens einer Navigation beginnt die `handler()` Funktion mit dem Abrufen und Angeben des Hauptartikelinhalts, um dann sekundäre Inhalte nachzuladen und anzuzeigen. Es macht Sinn, die Seite so bald wie möglich zum Hauptartikelinhalt zu scrollen, damit der Benutzer damit interagieren kann, anstatt darauf zu warten, dass auch die sekundären Inhalte gerendert sind. Um dies zu erreichen, haben wir einen {{domxref("NavigateEvent.scroll", "scroll()")}} Aufruf zwischen den beiden eingefügt.

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

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
