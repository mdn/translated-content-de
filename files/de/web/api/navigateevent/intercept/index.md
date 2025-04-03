---
title: "NavigateEvent: intercept() Methode"
short-title: intercept()
slug: Web/API/NavigateEvent/intercept
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`intercept()`**-Methode der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle fängt diese Navigation ab und verwandelt sie in eine gleich-dokumentische Navigation zur [`destination`](/de/docs/Web/API/NavigationDestination/url)-URL.

## Syntax

```js-nolint
intercept()
intercept(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das folgende Eigenschaften enthält:
    - `handler` {{optional_inline}}
      - : Eine Callback-Funktion, die definiert, wie das Navigationsverhalten gehandhabt werden soll. Sie behandelt im Allgemeinen das Abrufen von Ressourcen und gibt ein Versprechen zurück.
    - `focusReset` {{optional_inline}}
      - : Definiert das Fokusverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Sobald das von Ihrer Handler-Funktion zurückgegebene Versprechen erfüllt ist, wird der Browser auf das erste Element mit dem [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut fokussieren oder auf das {{htmlelement("body")}}-Element, wenn kein Element auf `autofocus` gesetzt ist. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.
    - `scroll` {{optional_inline}}
      - : Definiert das Scrollverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Erlaubt dem Browser, das Scrollen zu handhaben, zum Beispiel durch Scrollen zum relevanten Fragmentbezeichner, wenn die URL ein Fragment enthält, oder die Scrollposition an der gleichen Stelle wie beim letzten Mal wiederherzustellen, wenn die Seite neu geladen oder eine Seite in der Historie erneut besucht wird. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist oder wenn die Navigation abgebrochen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Ereignis über einen [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)-Aufruf und nicht durch den Benutzeragenten ausgelöst wurde oder wenn die Navigation nicht abgefangen werden kann (d.h. [`NavigateEvent.canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) ist `false`).

## Beispiele

### Umgang mit einer Navigation mittels `intercept()`

```js
navigation.addEventListener("navigate", (event) => {
  // Exit early if this navigation shouldn't be intercepted,
  // e.g. if the navigation is cross-origin, or a download request
  if (shouldNotIntercept(event)) return;

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

### Verwendung von `focusReset` und `scroll`

Das Absenden von Formularen kann durch Abfragen der [`NavigateEvent.formData`](/de/docs/Web/API/NavigateEvent/formData)-Eigenschaft erkannt werden. Das folgende Beispiel verwandelt jeden Formularversuch in einen, der auf der aktuellen Seite bleibt. In diesem Fall aktualisieren Sie das DOM nicht, daher können Sie das Standard-Reset- und Scrollverhalten mit `focusReset` und `scroll` abbrechen.

```js
navigation.addEventListener("navigate", (event) => {
  if (event.formData && event.canIntercept) {
    // User submitted a POST form to a same-domain URL
    // (If canIntercept is false, the event is just informative:
    // you can't intercept this request, although you could
    // likely still call .preventDefault() to stop it completely).

    event.intercept({
      // Since we don't update the DOM in this navigation,
      // don't allow focus or scrolling to reset:
      focusReset: "manual",
      scroll: "manual",
      async handler() {
        await fetch(event.destination.url, {
          method: "POST",
          body: event.formData,
        });
        // You could navigate again with {history: 'replace'} to change the URL here,
        // which might indicate "done"
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
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
