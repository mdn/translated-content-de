---
title: "NavigateEvent: intercept()-Methode"
short-title: intercept()
slug: Web/API/NavigateEvent/intercept
l10n:
  sourceCommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`intercept()`**-Methode des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces fängt diese Navigation ab und wandelt sie in eine gleiche-Dokumenten-Navigation zur [`destination`](/de/docs/Web/API/NavigationDestination/url)-URL um.

## Syntax

```js-nolint
intercept()
intercept(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Options-Objekt mit den folgenden Eigenschaften:
    - `handler` {{optional_inline}}
      - : Eine Rückruffunktion, die das Verhalten beim Navigieren definiert. Dies bezieht sich im Allgemeinen auf das Abrufen von Ressourcen und gibt ein Versprechen zurück.
    - `focusReset` {{optional_inline}}
      - : Definiert das Fokusverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Sobald das von Ihrer Handler-Funktion zurückgegebene Versprechen erfüllt wurde, wird der Browser das erste Element mit dem [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut fokussieren oder das {{htmlelement("body")}}-Element, falls kein Element `autofocus` gesetzt hat. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.
    - `scroll` {{optional_inline}}
      - : Definiert das Scrollverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Erlaubt dem Browser, das Scrollen zu handhaben, z.B. indem zum entsprechenden Fragment-Identifikator gescrollt wird, wenn die URL ein Fragment enthält, oder die Scrollposition an derselben Stelle wiederhergestellt wird, wie beim letzten Mal, wenn die Seite neu geladen wird oder eine Seite im Verlauf erneut aufgerufen wird. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist oder wenn die Navigation abgebrochen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Ereignis durch einen [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)-Aufruf statt durch den User Agent ausgelöst wurde, oder wenn die Navigation nicht abgefangen werden kann (d.h. [`NavigateEvent.canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) ist `false`).

## Beispiele

### Eine Navigation mit `intercept()` behandeln

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

Das Absenden eines Formulars kann durch Abfragen der [`NavigateEvent.formData`](/de/docs/Web/API/NavigateEvent/formData)-Eigenschaft erkannt werden. Das folgende Beispiel wandelt jede Formularübermittlung in eine solche um, die auf der aktuellen Seite bleibt. In diesem Fall aktualisieren Sie das DOM nicht, sodass Sie jedes Standard-Reset- und Scroll-Verhalten mit `focusReset` und `scroll` abbrechen können.

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

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)
