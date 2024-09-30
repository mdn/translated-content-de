---
title: "NavigateEvent: scroll()-Methode"
short-title: scroll()
slug: Web/API/NavigateEvent/scroll
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`scroll()`**-Methode der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle kann aufgerufen werden, um das vom Browser gesteuerte Scrollverhalten manuell auszulösen, das als Reaktion auf die Navigation auftritt, falls Sie es vor Abschluss der Navigation auslösen möchten.

## Syntax

```js-nolint
scroll()
```

### Parameter

Keine.

### Rückgabewert

Keine (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist oder wenn die Navigation abgebrochen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Ereignis durch einen Aufruf von [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) anstelle des Benutzeragenten ausgelöst wurde.

## Beispiele

### Umgang mit Scrollen mittels `scroll()`

In diesem Beispiel zum Abfangen einer Navigation beginnt die `handler()`-Funktion mit dem Abrufen und Rendern einiger Artikelinhalte und ruft dann im Anschluss einige sekundäre Inhalte ab und rendert diese. Es ergibt Sinn, die Seite zu den Hauptartikelinhalten zu scrollen, sobald diese verfügbar sind, damit der Benutzer damit interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte gerendert sind. Um dies zu erreichen, haben wir einen `scroll()`-Aufruf zwischen den beiden eingebaut.

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

- [Moderne clientseitige Routenverwaltung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
