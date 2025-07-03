---
title: "NavigateEvent: scroll() Methode"
short-title: scroll()
slug: Web/API/NavigateEvent/scroll
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`scroll()`** Methode des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Interfaces kann aufgerufen werden, um das vom Browser gesteuerte Scrollverhalten, das als Reaktion auf die Navigation auftritt, manuell auszulösen, wenn Sie möchten, dass es passiert, bevor die Navigation abgeschlossen wurde.

## Syntax

```js-nolint
scroll()
```

### Parameter

Keine.

### Rückgabewert

Kein Wert (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist oder wenn die Navigation abgebrochen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Ereignis durch einen [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) Aufruf und nicht von der Benutzeroberfläche ausgelöst wurde.

## Beispiele

### Handling des Scrollens mit `scroll()`

In diesem Beispiel für das Abfangen einer Navigation beginnt die `handler()`-Funktion mit dem Abrufen und Rendern einiger Artikelinhalte, ruft aber danach noch zusätzliche Inhalte ab und rendert sie. Es ist sinnvoll, die Seite auf den Hauptartikelinhalt zu scrollen, sobald er verfügbar ist, damit der Benutzer damit interagieren kann, anstatt zu warten, bis auch die zusätzlichen Inhalte gerendert sind. Um dies zu erreichen, haben wir einen `scroll()` Aufruf zwischen den beiden hinzugefügt.

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

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
