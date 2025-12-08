---
title: "NavigateEvent: scroll() Methode"
short-title: scroll()
slug: Web/API/NavigateEvent/scroll
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`scroll()`** Methode der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle kann aufgerufen werden, um das durch den Browser gesteuerte Scrollverhalten manuell auszulösen, das als Reaktion auf die Navigation auftritt, falls Sie möchten, dass dies geschieht, bevor die Navigation abgeschlossen ist.

## Syntax

```js-nolint
scroll()
```

### Parameter

Keine.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist oder wenn die Navigation abgebrochen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Ereignis durch einen [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)-Aufruf und nicht durch den User Agent gesendet wurde.

## Beispiele

### Behandlung des Scrollens mit `scroll()`

In diesem Beispiel zur Abfangung einer Navigation beginnt die `handler()`-Funktion mit dem Abrufen und Rendern einiger Artikelinhalte, um anschließend einige sekundäre Inhalte abzurufen und zu rendern. Es ist sinnvoll, die Seite zu den Hauptartikel-Inhalten zu scrollen, sobald diese verfügbar sind, damit der Benutzer damit interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte gerendert sind. Um dies zu erreichen, haben wir zwischen den beiden einen `scroll()`-Aufruf hinzugefügt.

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
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
