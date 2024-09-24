---
title: "NavigateEvent: intercept()-Methode"
short-title: intercept()
slug: Web/API/NavigateEvent/intercept
l10n:
  sourceCommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`intercept()`**-Methode des {{domxref("NavigateEvent")}}-Interfaces fängt diese Navigation ab und wandelt sie in eine Navigation im selben Dokument zur {{domxref("NavigationDestination.url", "Ziel")}}-URL um.

## Syntax

```js-nolint
intercept()
intercept(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `handler` {{optional_inline}}
      - : Eine Callback-Funktion, die definiert, wie das Navigationsverhalten gehandhabt werden soll. Dies umfasst im Allgemeinen das Abrufen von Ressourcen und gibt ein Versprechen zurück.
    - `focusReset` {{optional_inline}}
      - : Definiert das Fokusverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Sobald das Versprechen, das von Ihrer Handler-Funktion zurückgegeben wird, erfüllt ist, fokussiert der Browser das erste Element mit dem [`autofocus`](/de/docs/Web/HTML/Global_attributes/autofocus)-Attribut oder das {{htmlelement("body")}}-Element, wenn kein Element `autofocus` gesetzt hat. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.
    - `scroll` {{optional_inline}}
      - : Definiert das Scrollverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Ermöglicht es dem Browser, das Scrollen zu handhaben, zum Beispiel, indem zu dem relevanten Fragment-Identifikator gescrollt wird, wenn die URL ein Fragment enthält, oder indem die Scroll-Position an derselben Stelle wie beim letzten Mal wiederhergestellt wird, wenn die Seite neu geladen oder eine Seite in der Historie erneut aufgerufen wird. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das aktuelle {{domxref("Document")}} noch nicht aktiv ist oder wenn die Navigation abgebrochen wurde.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Ereignis durch einen {{domxref("EventTarget.dispatchEvent", "dispatchEvent()")}}-Aufruf und nicht durch den User-Agent ausgelöst wurde oder wenn die Navigation nicht abgefangen werden kann (d. h. {{domxref("NavigateEvent.canIntercept")}} ist `false`).

## Beispiele

### Handhabung einer Navigation mit `intercept()`

```js
navigation.addEventListener("navigate", (event) => {
  // Beenden Sie frühzeitig, wenn diese Navigation nicht abgefangen werden soll,
  // z. B. wenn die Navigation cross-origin ist oder eine Download-Anfrage
  if (shouldNotIntercept(event)) return;

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // Die URL hat sich bereits geändert, also zeigen Sie einen Platzhalter an, während
        // der neue Inhalt geladen wird, wie ein Spinner oder eine Lade-Seite
        renderArticlePagePlaceholder();

        // Rufen Sie den neuen Inhalt ab und zeigen Sie ihn an, wenn er bereit ist
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }
});
```

### Verwendung von `focusReset` und `scroll`

Formularübermittlungen können erkannt werden, indem Sie die {{domxref("NavigateEvent.formData")}}-Eigenschaft abfragen. Im folgenden Beispiel wird jede Formularübermittlung in eine umgewandelt, die auf der aktuellen Seite bleibt. In diesem Fall aktualisieren Sie nicht das DOM, sodass Sie jedes Standard-Reset- und Scroll-Verhalten mit `focusReset` und `scroll` abbrechen können.

```js
navigation.addEventListener("navigate", (event) => {
  if (event.formData && event.canIntercept) {
    // Der Benutzer hat ein POST-Formular zu einer URL derselben Domain gesendet
    // (Wenn canIntercept false ist, ist das Ereignis nur informativ:
    // Sie können diese Anfrage nicht abfangen, obwohl Sie wahrscheinlich immer noch
    // .preventDefault() aufrufen können, um sie vollständig zu stoppen).

    event.intercept({
      // Da wir das DOM bei dieser Navigation nicht aktualisieren,
      // erlauben Sie keinen Fokus oder Scroll-Reset:
      focusReset: "manual",
      scroll: "manual",
      async handler() {
        await fetch(event.destination.url, {
          method: "POST",
          body: event.formData,
        });
        // Sie könnten erneut mit {history: 'replace'} navigieren, um die URL an dieser Stelle zu ändern,
        // was möglicherweise "erledigt" anzeigt
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
