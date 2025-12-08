---
title: "NavigateEvent: intercept() Methode"
short-title: intercept()
slug: Web/API/NavigateEvent/intercept
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`intercept()`** Methode des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Interfaces fängt diese Navigation ab und verwandelt sie in eine Navigation im selben Dokument zur [`destination`](/de/docs/Web/API/NavigationDestination/url) URL.

## Syntax

```js-nolint
intercept()
intercept(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `handler` {{optional_inline}}
      - : Eine Callback-Funktion, die definiert, wie das Navigationsverhalten sein sollte; sie gibt ein Versprechen zurück. Diese Funktion wird ausgeführt, nachdem die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) Eigenschaft aktualisiert wurde.
    - `precommitHandler` {{optional_inline}}
      - : Eine Callback-Funktion, die jedes Verhalten definiert, das geschehen soll, bevor die Navigation abgeschlossen ist; sie nimmt ein [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController) Objekt als Argument und gibt ein Versprechen zurück. Diese Funktion wird ausgeführt, bevor die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) Eigenschaft aktualisiert wird.
    - `focusReset` {{optional_inline}}
      - : Definiert das Fokusverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Sobald das von Ihrer Handler-Funktion zurückgegebene Versprechen erfüllt wird, fokussiert der Browser das erste Element mit dem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) Attribut oder das {{htmlelement("body")}} Element, wenn kein Element `autofocus` gesetzt hat. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.
    - `scroll` {{optional_inline}}
      - : Definiert das Scrollverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Ermöglicht dem Browser das Scrollen zu handhaben, zum Beispiel indem er zur entsprechenden Fragmentkennung scrollt, wenn die URL ein Fragment enthält, oder die Scrollposition an derselben Stelle wiederherstellt wie beim letzten Mal, wenn die Seite neu geladen oder eine Seite in der Chronik wieder aufgerufen wird. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist oder die Navigation abgebrochen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Ereignis von einem [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) Aufruf ausgelöst wurde, anstatt von der Benutzeragent.
    - Die Navigation nicht abgefangen werden kann ([`NavigateEvent.canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) ist `false`).
    - Ein `precommitHandler()` Callback bei einem nicht abbrechbaren Ereignis bereitgestellt wird ([`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ist `false`).

## Beschreibung

Die `intercept()` Methode wird verwendet, um ein Navigationsverhalten im selben Dokument (SPA) zu implementieren, wenn eine Navigation auftritt; zum Beispiel, wenn ein Link angeklickt wird, ein Formular abgeschickt wird oder eine programmgesteuerte Navigation initiiert wird (mit [`History.pushState()`](/de/docs/Web/API/History/pushState), [`Window.location`](/de/docs/Web/API/Window/location), etc.).

Dies geschieht über eine Reihe verschiedener Callbacks, `handler()` und `precommitHandler()`.

### Sofortige Navigationen mit `handler()` behandeln

Der `handler()` Callback wird als Reaktion auf eine abgeschlossene Navigation ausgeführt. Er wird ausgeführt, nachdem die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) Eigenschaft aktualisiert wurde, was bedeutet, dass eine neue URL in der Browser-Benutzeroberfläche angezeigt wird und die Chronik mit einem neuen Eintrag aktualisiert wird.

Ein typisches Beispiel sieht so aus, dass spezifischer Inhalt gerendert und geladen wird, als Reaktion auf eine bestimmte Navigation:

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // Fetch the new content and display when ready
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }

  // Include multiple conditions for different page types here, as needed
});
```

`handler()` sollte verwendet werden, um ein Navigationsverhalten zu implementieren, wo die Navigation abgeschlossen ist: der Benutzer sollte etwas Neues sehen.

### Precommit-Aktionen mit `precommitHandler()` behandeln

Allerdings möchten Sie möglicherweise auch die Navigation während des Fluges ändern oder abbrechen oder Arbeiten ausführen, während die Navigation im Gang ist und bevor sie abgeschlossen wird. Solch ein Szenario kann mit dem `precommitHandler()` Callback behandelt werden, der ausgeführt wird, bevor die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) Eigenschaft aktualisiert wird und die neue Adresse in der Browser-Benutzeroberfläche angezeigt wird.

Zum Beispiel, wenn der Benutzer zu einer geschützten Seite navigiert und nicht angemeldet ist, könnten Sie den Browser zu einer Anmeldeseite umleiten lassen. Dies könnte folgendermaßen behandelt werden:

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/restricted/") && !userSignedIn) {
    event.intercept({
      async precommitHandler(controller) {
        controller.redirect("/signin/", {
          state: "signin-redirect",
          history: "push",
        });
      },
    });
  }
});
```

Dieses Muster ist einfacher als die Alternative, die ursprüngliche Navigation zu stornieren und eine neue zum Umleitungsziel zu starten, da es den Zwischenzustand vermeidet. Zum Beispiel wird nur ein einziges [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) Ereignis ausgelöst, und wenn die Navigation durch einen Aufruf von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) ausgelöst wurde, erfüllt sich das Versprechen erst, wenn das Umleitungsziel erreicht ist.

Der `precommitHandler()` Callback nimmt ein [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController) Objekt als Argument an, das eine [`redirect()`](/de/docs/Web/API/NavigationPrecommitController/redirect) Methode enthält. Die `redirect()` Methode nimmt zwei Parameter an — einen String, der die URL darstellt, zu der umgeleitet werden soll, sowie ein optionales Optionsobjekt, das den Zustand und das Chronikverhalten spezifizieren kann.

`precommitHandler()` behandelt im Allgemeinen alle Änderungen am Navigationsverhalten, die erforderlich sind, bevor die Ziel-URL tatsächlich im Browser angezeigt wird, wobei sie sie nach Bedarf abgebrochen oder umgeleitet wird.

> [!NOTE]
> Da `precommitHandler()` verwendet werden kann, um Navigationen abzubrechen, funktioniert es nur erwartungsgemäß, wenn die [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) Eigenschaft des Ereignisses `true` ist. Ein Aufruf von `intercept()` mit einem `precommitHandler()` bei einem nicht abbrechbaren Ereignis führt zu einem `SecurityError`.

### Reaktion auf Navigations-Erfolg oder -Fehler

Wenn die von den `intercept()` Handler-Funktionen zurückgegebene Versprechen erfüllt werden, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis des `Navigation` Objekts ausgelöst, sodass Sie Bereinigungscode nach einer erfolgreichen Navigation ausführen können. Wenn diese Versprechen abgelehnt werden, was bedeutet, dass die Navigation fehlgeschlagen ist, wird [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) stattdessen ausgelöst, was Ihnen ermöglicht, den Fehlerfall anmutig zu behandeln.

Es gibt auch eine `finished` Eigenschaft im Rückgabewert der Navigationsmethoden (wie [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), die sich zum gleichen Zeitpunkt wie die oben genannten Ereignisse erfüllt oder ablehnt und einen anderen Weg bietet, um den Erfolg und die Fehlerfälle zu handhaben.

### Interaktion zwischen `precommitHandler()` und `handler()`

Sowohl `precommitHandler()` als auch `handler()` Callbacks können innerhalb desselben `intercept()` Aufrufs enthalten sein. In solchen Fällen ist der Ablauf wie folgt:

1. Zuerst wird der `precommitHandler()` Handler ausgeführt.
   - Wenn das `precommitHandler()` Versprechen erfüllt wird, wird die Navigation abgeschlossen.
   - Wenn das `precommitHandler()` abgelehnt wird, wird das `navigateerror` Ereignis ausgelöst, die `committed` und `finished` Versprechen werden abgelehnt, und die Navigation wird abgebrochen.

2. Wenn die Navigation abgeschlossen ist, wird ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) für die Navigation erstellt, und sein `committed` Versprechen wird erfüllt.

3. Als nächstes wird das `handler()` Versprechen ausgeführt.
   - Wenn das `handler()` Versprechen erfüllt wird und das `navigatesuccess` Ereignis ausgelöst wird, wird das `finished` Versprechen der Navigation ebenfalls erfüllt, um anzuzeigen, dass die Navigation abgeschlossen ist.
   - Wenn `handler()` abgelehnt wird, wird das `navigateerror` Ereignis ausgelöst, das `finished` Versprechen wird abgelehnt und die Navigation wird abgebrochen.

Beachten Sie, dass der obige Prozess selbst bei mehreren `intercept()` Aufrufen auf dasselbe `NavigateEvent` Aufrechterhalten wird. Alle `precommitHandler()` Callbacks werden zuerst aufgerufen, und wenn alle von ihnen aufgelöst werden, wird die Navigation abgeschlossen, und alle `handler()` Callbacks werden aufgerufen.

### Steuerung des Fokusverhaltens

Standardmäßig wird nach einer mit `intercept()` behandelten Navigation der Dokumentenfokus auf das erste Element im DOM zurückgesetzt, das ein [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) Attribut gesetzt hat, oder andernfalls auf das {{htmlelement("body")}} Element, wenn kein `autofocus` Attribut gesetzt ist. Wenn Sie dieses Verhalten überschreiben möchten, um eine manuell implementierte zugänglichere Fokusposition bei der Navigation zu erreichen (zum Beispiel die neue oberste Überschrift), können Sie dies tun, indem Sie die `focusReset` Option auf `manual` setzen.

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      focusReset: manual,
      async handler() {
        // Fetch the new content and display when ready
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
        // Handle page focus with a custom function
        setPageFocus();
      },
    });
  }
});
```

### Steuerung des Scrollverhaltens

Sobald eine Navigation durch `intercept()` abgeschlossen ist, tritt das folgende Scrollverhalten ein:

- Bei `push` und `replace` Navigationen (siehe [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)) versucht der Browser, zum Fragment zu scrollen, das durch `event.destination.url` angegeben wird. Wenn kein Fragment verfügbar ist, wird die Scrollposition auf den Anfang der Seite zurückgesetzt.
- Bei [`traverse`](/de/docs/Web/API/Navigation/traverseTo) und [`reload`](/de/docs/Web/API/Navigation/reload) Navigationen ist das Verhalten ähnlich wie bei `push` und `replace` Navigationen, aber der Browser verzögert seine Scroll-Wiederherstellungslogik, bis das `intercept()` Versprechen erfüllt wird. Es wird keine Scroll-Wiederherstellung durchgeführt, wenn das Versprechen abgelehnt wird. Wenn der Benutzer während der Transition gescrollt hat, wird keine Scroll-Wiederherstellung durchgeführt.

Wenn Sie dieses Verhalten abschalten möchten, können Sie dies tun, indem Sie die `scroll` Option auf `manual` setzen.

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      scroll: manual,
      async handler() {
        // Fetch the new content and display when ready
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
        // Handle scroll behavior with a custom function
        setScroll();
      },
    });
  }
});
```

Wenn Sie das vorher beschriebene Standard-Scrollverhalten manuell auslösen möchten (vielleicht möchten Sie die Scrollposition frühzeitig, vor Abschluss der vollständigen Navigation, auf den Anfang der Seite zurücksetzen), können Sie dies tun, indem Sie [`NavigateEvent.scroll()`](/de/docs/Web/API/NavigateEvent/scroll) aufrufen.

## Beispiele

### Umgang mit einer Navigation mit `intercept()`

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

Formularübermittlungen können erkannt werden, indem nach der [`NavigateEvent.formData`](/de/docs/Web/API/NavigateEvent/formData) Eigenschaft abgefragt wird. Das folgende Beispiel verwandelt jede Formularübermittlung in eine, die auf der aktuellen Seite bleibt. In diesem Fall wird das DOM nicht aktualisiert, sodass Sie jedes Standard-Reset- und Scrollverhalten mit `focusReset` und `scroll` abschalten können.

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
        // You could navigate again with {history: 'replace'} to
        // change the URL here, which might indicate "done"
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
