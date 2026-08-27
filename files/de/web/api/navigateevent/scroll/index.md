---
title: "NavigateEvent: scroll()-Methode"
short-title: scroll()
slug: Web/API/NavigateEvent/scroll
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Navigation API")}}

Die **`scroll()`**-Methode der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle kann aufgerufen werden, um das vom Browser gesteuerte Scrollverhalten, das als Antwort auf die Navigation auftritt, manuell auszulösen, falls Sie möchten, dass es vor dem Abschluss der Navigationsverarbeitung geschieht.

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
  - : Wird ausgelöst, wenn das Event durch einen [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)-Aufruf statt durch den User-Agent ausgelöst wurde.

## Beispiele

### Scroll-Verhalten mit `scroll()` handhaben

In diesem Beispiel zur Abfangung einer Navigation beginnt die `handler()`-Funktion damit, einen Artikelinhalt abzurufen und darzustellen, und ruft dann danach noch einige sekundäre Inhalte ab und stellt diese dar. Es macht Sinn, die Seite zum Hauptartikelinhalt zu scrollen, sobald dieser verfügbar ist, damit der Benutzer mit diesem interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte gerendert sind. Um dies zu erreichen, haben wir einen `scroll()`-Aufruf zwischen die beiden hinzugefügt.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
