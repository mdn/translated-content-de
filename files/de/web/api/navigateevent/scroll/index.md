---
title: "NavigateEvent: scroll() Methode"
short-title: scroll()
slug: Web/API/NavigateEvent/scroll
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`scroll()`** Methode des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Schnittstelle kann aufgerufen werden, um das vom Browser gesteuerte Scrollverhalten, das als Reaktion auf die Navigation auftritt, manuell auszulösen, falls Sie möchten, dass es passiert, bevor die Navigationsverarbeitung abgeschlossen ist.

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
  - : Ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist oder die Navigation abgebrochen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das Ereignis durch einen Aufruf von [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) und nicht durch den User-Agent ausgelöst wurde.

## Beispiele

### Handhabung des Scrollens mit `scroll()`

In diesem Beispiel der Abfang von Navigationen beginnt die `handler()` Funktion mit dem Abrufen und Rendern von Artikelinhalten, um dann anschließend einige sekundäre Inhalte abzurufen und darzustellen. Es ist sinnvoll, die Seite zum Hauptartikelinhalt zu scrollen, sobald dieser verfügbar ist, sodass der Benutzer mit ihm interagieren kann, anstatt zu warten, bis die sekundären Inhalte ebenfalls gerendert sind. Um dies zu erreichen, haben wir einen `scroll()` Aufruf zwischen den beiden hinzugefügt.

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
- Domenic Denicolas [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)
