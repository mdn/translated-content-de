---
title: "NavigateEvent: scroll()-Methode"
short-title: scroll()
slug: Web/API/NavigateEvent/scroll
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`scroll()`**-Methode der
{{domxref("NavigateEvent")}}-Schnittstelle kann aufgerufen werden, um das vom Browser gesteuerte Scroll-Verhalten manuell auszulösen, das als Reaktion auf die Navigation auftritt, wenn Sie möchten, dass es vor Abschluss der Navigationsbearbeitung erfolgt.

## Syntax

```js-nolint
scroll()
```

### Parameter

Keine.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das aktuelle {{domxref("Document")}} noch nicht aktiv ist oder wenn die Navigation abgebrochen wurde.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Ereignis durch einen Aufruf von {{domxref("EventTarget.dispatchEvent", "dispatchEvent()")}} statt durch den Benutzeragenten ausgelöst wurde.

## Beispiele

### Scroll-Verarbeitung mit `scroll()`

In diesem Beispiel zum Abfangen einer Navigation beginnt die `handler()`-Funktion damit, einige Artikelinhalte abzurufen und darzustellen, und ruft dann anschließend einige sekundäre Inhalte ab und stellt sie dar. Es ist sinnvoll, die Seite sofort zum Hauptartikelinhalt zu scrollen, sobald dieser verfügbar ist, damit der Benutzer damit interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte dargestellt sind. Um dies zu erreichen, haben wir einen `scroll()`-Aufruf zwischen den beiden hinzugefügt.

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
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
