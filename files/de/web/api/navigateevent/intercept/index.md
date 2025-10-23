---
title: "NavigateEvent: intercept() Methode"
short-title: intercept()
slug: Web/API/NavigateEvent/intercept
l10n:
  sourceCommit: 602754279b511738a24c27adbdaccd5471185615
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`intercept()`** Methode der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Schnittstelle fängt diese Navigation ab und verwandelt sie in eine gleiche-Dokument-Navigation zur [`destination`](/de/docs/Web/API/NavigationDestination/url) URL.

## Syntax

```js-nolint
intercept()
intercept(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `handler` {{optional_inline}}
      - : Eine Callback-Funktion, die festlegt, wie das Navigationsverhalten sein soll; sie gibt ein Versprechen zurück. Diese Funktion wird ausgeführt, nachdem die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) Eigenschaft aktualisiert wurde.
    - `precommitHandler` {{optional_inline}}
      - : Eine Callback-Funktion, die ein Verhalten definiert, das unmittelbar vor dem Commit der Navigation erfolgen soll; sie akzeptiert ein Controller-Objekt als Argument und gibt ein Versprechen zurück. Diese Funktion wird vor der Aktualisierung der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) Eigenschaft ausgeführt.
    - `focusReset` {{optional_inline}}
      - : Definiert das Fokusverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Sobald das von Ihrer Handler-Funktion zurückgegebene Versprechen erfüllt ist, wird der Browser das erste Element mit dem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) Attribut fokussieren oder das {{htmlelement("body")}} Element, wenn kein Element `autofocus` gesetzt hat. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.
    - `scroll` {{optional_inline}}
      - : Definiert das Scrollverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Erlaubt dem Browser, das Scrollen zu steuern, z. B. durch das Scrollen zum entsprechenden Fragment-Identifier, wenn die URL ein Fragment enthält, oder durch das Zurücksetzen der Scrollposition auf die gleiche Stelle wie beim letzten Mal, wenn die Seite neu geladen oder eine Seite in der Chronik erneut besucht wird. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist oder die Navigation abgebrochen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Ereignis durch einen [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) Aufruf statt durch den Benutzeragenten gesendet wurde.
    - Die Navigation nicht abgefangen werden kann ([`NavigateEvent.canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) ist `false`).
    - Ein `precommitHandler()` Callback bei einem nicht stornierbaren Ereignis bereitgestellt wird ([`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ist `false`).

## Beschreibung

Die `intercept()` Methode wird verwendet, um das Navigationsverhalten im gleichen Dokument (SPA) zu implementieren, wenn eine Navigation stattfindet; zum Beispiel, wenn auf einen Link geklickt, ein Formular abgeschickt oder eine programmgesteuerte Navigation initiiert wird (mit [`History.pushState()`](/de/docs/Web/API/History/pushState), [`Window.location`](/de/docs/Web/API/Window/location), etc.).

Dies geschieht über ein paar verschiedene Callbacks, `handler()` und `precommitHandler()`.

### Behandlung von sofortigen Navigationen mit `handler()`

Der `handler()` Callback wird als Reaktion auf eine festgeschriebene Navigation ausgeführt. Er wird nach der Aktualisierung der [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) Eigenschaft ausgeführt, was bedeutet, dass eine neue URL in der Browser-UI angezeigt wird und der Verlauf mit einem neuen Eintrag aktualisiert wird.

Ein typisches Beispiel sieht so aus, dass spezifische Inhalte gerendert und geladen werden, als Reaktion auf eine bestimmte Navigation:

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

`handler()` sollte verwendet werden, um Navigationsverhalten zu implementieren, bei dem die Navigation festgeschrieben wird: der Benutzer sollte etwas Neues sehen.

### Behandlung von Precommit-Aktionen mit `precommitHandler()`

Es kann jedoch auch gewünscht sein, eine laufende Navigation zu ändern oder abzubrechen oder Arbeiten während der Navigation auszuführen, bevor sie festgeschrieben wird. Dieses Szenario kann mit dem `precommitHandler()` Callback behandelt werden, der ausgeführt wird, bevor die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) Eigenschaft aktualisiert wird und die neue Position in der Browser-UI angezeigt wird.

Zum Beispiel, wenn der Benutzer zu einer eingeschränkten Seite navigiert und nicht angemeldet ist, möchten Sie möglicherweise den Browser zu einer Anmeldeseite umleiten. Dies könnte folgendermaßen gehandhabt werden:

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

Dieses Muster ist einfacher als die Alternative, die ursprüngliche Navigation abzubrechen und eine neue zur Umleitungsposition zu starten, da es den Zwischenzustand vermeidet. Zum Beispiel wird nur ein `navigatesuccess` oder `navigateerror` Ereignis ausgelöst, und wenn die Navigation durch einen Aufruf von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) ausgelöst wurde, wird das Versprechen nur erfüllt, wenn das Umleitungsziel erreicht ist.

Der `precommitHandler()` Callback nimmt ein `controller` Objekt als Argument, das eine `redirect()` Methode enthält. Die `redirect()` Methode nimmt zwei Parameter an — einen String, der die URL repräsentiert, zu der umgeleitet werden soll, und ein Optionsobjekt mit zwei Parametern:

- `state` {{optional_inline}}
  - : Enthält alle Statusinformationen, die Sie mit der Navigation übergeben möchten; zum Beispiel für Protokollierungs- oder Nachverfolgungszwecke. Der Status der Navigation kann anschließend über [`NavigationHistoryEntry.getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) abgerufen werden.
- `history` {{optional_inline}}
  - : Ein Enumerationswert, der angibt, wie diese Umleitung dem Navigationsverlauf hinzugefügt werden soll. Es kann einen der folgenden Werte annehmen:
    - `auto`
      - : Der Standardwert, der dem Browser überlässt, wie er es handhaben soll:
        - Wenn die ursprüngliche Navigation als Ergebnis eines [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) Aufrufs erfolgte, ist der Wert, was im `navigate()` Aufruf in der [`history`](/de/docs/Web/API/Navigation/navigate#history) Option angegeben wurde.
        - Andernfalls wird in der Regel `push` verwendet, aber es wird `replace`, wenn die Umleitung auf die gleiche URL wie die Pre-Navigation URL zeigt.
    - `push`
      - : Fügt einen neuen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zum Navigationsverlauf hinzu und löscht alle verfügbaren Vorwärtsnavigationen (d.h. wenn der Benutzer zuvor zu anderen Standorten navigiert, dann die Zurück-Taste benutzt hat, um zurück durch den Verlauf zu gehen, bevor er dann die Navigation initiierte, die die Umleitung verursachte).
    - `replace`
      - : Ersetzt die [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) durch den `NavigationHistoryEntry`.

> [!NOTE]
> Die `redirect()` Methode kann das Verlaufverhalten zwischen `auto`, `push` und `replace` konvertieren, aber sie kann keine `traverse` Navigation in eine `push`/`replace` Navigation und umgekehrt umwandeln.

`precommitHandler()` behandelt im Allgemeinen alle Änderungen am Navigationsverhalten, die erforderlich sind, bevor die Ziel-URL tatsächlich im Browser angezeigt wird, indem es die Navigation abbricht oder sie bei Bedarf umzuleiten. Da `precommitHandler()` verwendet werden kann, um Navigationen abzubrechen, funktioniert es nur dann wie erwartet, wenn die [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) Eigenschaft des Ereignisses `true` ist. Ein Aufruf von `intercept()` mit einem `precommitHandler()` bei einem nicht stornierbaren Ereignis führt zu einem `SecurityError`.

### Reagieren auf Navigationserfolg oder -fehler

Wenn die Versprechen der `intercept()` Handler-Funktionen erfüllt werden, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis des `Navigation` Objekts ausgelöst, sodass Sie Bereinigungscode ausführen können, nachdem eine erfolgreiche Navigation abgeschlossen ist. Wenn diese Versprechen fehlschlagen, was bedeutet, dass die Navigation fehlgeschlagen ist, wird [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) stattdessen ausgelöst, sodass Sie den Fehlerfall elegant behandeln können.

Es gibt auch eine `finished` Eigenschaft beim Rückgabewert von Navigationsmethoden (wie [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), die parallel zu den oben genannten Ereignissen erfüllt oder abgelehnt wird und einen weiteren Weg bietet, um die Erfolgs- und Fehlerfälle zu behandeln.

### Interaktion zwischen `precommitHandler()` und `handler()`

Beide `precommitHandler()` und `handler()` Callback-Funktionen können in denselben `intercept()` Aufruf aufgenommen werden.

1. Zuerst wird der `precommitHandler()` ausgeführt.
   - Wenn das `precommitHandler()` Versprechen erfüllt wird, wird die Navigation festgeschrieben.
   - Wenn das `precommitHandler()` fehlschlägt, wird `navigateerror` ausgelöst, die `committed` und `finished` Versprechen schlagen fehl, und die Navigation wird abgebrochen.

2. Bei der Commitierung der Navigation wird ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) für die Navigation erstellt, und sein `committed` Versprechen wird erfüllt.

3. Als Nächstes wird das `handler()` Versprechen ausgeführt.
   - Wenn das `handler()` Versprechen erfüllt wird und das `navigatesuccess` Ereignis ausgelöst wird, wird das `finished` Versprechen der Navigation ebenfalls erfüllt, um anzuzeigen, dass die Navigation abgeschlossen ist.
   - Wenn `handler()` fehlschlägt, wird `navigateerror` ausgelöst, das `finished` Versprechen schlägt fehl, und die Navigation wird abgebrochen.

Beachten Sie, dass der obige Prozess auch bei mehreren `intercept()` Aufrufen auf demselben `NavigateEvent` aufrechterhalten wird. Alle `precommitHandler()` Callbacks werden zuerst aufgerufen, und wenn alle von ihnen aufgelöst sind, wird die Navigation festgeschrieben und alle `handler()` Callbacks werden aufgerufen.

### Steuerung des Fokusverhaltens

Standardmäßig wird nach einer mit `intercept()` behandelten Navigation der Dokumentfokus auf das erste Element im DOM mit einem gesetzten [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) Attribut zurückgesetzt oder ansonsten auf das {{htmlelement("body")}} Element, wenn kein `autofocus` Attribut gesetzt ist. Wenn Sie dieses Verhalten überschreiben möchten, um manuell eine zugänglichere Fokusposition bei der Navigation zu implementieren (zum Beispiel die neue oberste Überschrift), können Sie dies tun, indem Sie die `focusReset` Option auf `manual` setzen.

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

Nachdem eine `intercept()` Navigation erfolgt ist, tritt folgendes Scrollverhalten ein:

- Für `push` und `replace` Navigationen (siehe [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)) wird der Browser versuchen, zum Fragment zu scrollen, das von `event.destination.url` angegeben wird. Wenn kein Fragment verfügbar ist, wird die Scrollposition auf den Anfang der Seite zurückgesetzt.
- Für [`traverse`](/de/docs/Web/API/Navigation/traverseTo) und [`reload`](/de/docs/Web/API/Navigation/reload) Navigationen verhält sich der Browser ähnlich wie in der vorherigen Liste beschrieben, verzögert aber seine Scroll-Wiederherstellungslogik, bis das `intercept()` Versprechen erfüllt ist. Es wird keine Scroll-Wiederherstellung durchgeführt, wenn das Versprechen fehlschlägt. Wenn der Benutzer während der Transition gescrollt hat, wird keine Scroll-Wiederherstellung durchgeführt.

Wenn Sie dieses Verhalten deaktivieren möchten, können Sie dies tun, indem Sie die `scroll` Option auf `manual` setzen.

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

Wenn Sie das standardmäßige Scroll-Verhalten manuell auslösen möchten (vielleicht möchten Sie die Scrollposition frühzeitig auf den Anfang der Seite zurücksetzen, bevor die vollständige Navigation abgeschlossen ist), können Sie dies tun, indem Sie [`NavigateEvent.scroll()`](/de/docs/Web/API/NavigateEvent/scroll) aufrufen.

## Beispiele

### Behandlung einer Navigation mit `intercept()`

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

Das Absenden von Formularen kann durch Abfragen der [`NavigateEvent.formData`](/de/docs/Web/API/NavigateEvent/formData) Eigenschaft erkannt werden. Das folgende Beispiel verwandelt jede Formularübermittlung in eine, die auf der aktuellen Seite bleibt. In diesem Fall aktualisieren Sie das DOM nicht, sodass Sie jedes Standard-Reset- und Scroll-Verhalten mit `focusReset` und `scroll` deaktivieren können.

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

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
