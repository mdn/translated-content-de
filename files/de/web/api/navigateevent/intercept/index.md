---
title: "NavigateEvent: intercept() Methode"
short-title: intercept()
slug: Web/API/NavigateEvent/intercept
l10n:
  sourceCommit: 280e77d96ea10ee5169e5b9e5e329f10fe84869d
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`intercept()`**-Methode des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces fängt diese Navigation ab und wandelt sie in eine Navigation für dasselbe Dokument zur [`destination`](/de/docs/Web/API/NavigationDestination/url)-URL um.

## Syntax

```js-nolint
intercept()
intercept(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `handler` {{optional_inline}}
      - : Eine Callback-Funktion, die das Verhalten der Navigationsbehandlung definiert; sie gibt ein Promise zurück. Diese Funktion wird ausgeführt, nachdem die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft aktualisiert wurde.
    - `precommitHandler` {{optional_inline}}
      - : Eine Callback-Funktion, die das Verhalten definiert, das unmittelbar vor der Navigation abgeschlossen sein soll; sie akzeptiert ein [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController)-Objekt als Argument und gibt ein Promise zurück. Diese Funktion wird ausgeführt, bevor die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft aktualisiert wurde.
    - `focusReset` {{optional_inline}}
      - : Definiert das Focus-Verhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Sobald das Promise, das von Ihrer Handlerfunktion zurückgegeben wird, aufgelöst wird, fokussiert der Browser das erste Element mit dem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut oder das {{htmlelement("body")}}-Element, wenn kein Element `autofocus` gesetzt hat. Dies ist der Standardwert.
        - `manual`
          - : Das Standardverhalten deaktivieren.
    - `scroll` {{optional_inline}}
      - : Definiert das Scroll-Verhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Ermöglicht es dem Browser, das Scrollen zu handhaben, zum Beispiel indem er zum relevanten Fragment-Identifikator scrollt, wenn die URL ein Fragment enthält, oder die Scrollposition auf die gleiche Stelle wie beim letzten Mal zurücksetzt, wenn die Seite neu geladen wird oder eine Seite in der Historie erneut besucht wird. Dies ist der Standardwert.
        - `manual`
          - : Das Standardverhalten deaktivieren.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist oder wenn die Navigation abgebrochen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn:
    - Das Ereignis durch einen [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)-Aufruf statt durch den Benutzeragenten ausgelöst wurde.
    - Die Navigation nicht abgefangen werden kann ([`NavigateEvent.canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) ist `false`).
    - Ein `precommitHandler()`-Callback für ein nicht abbrechbares Ereignis bereitgestellt wird ([`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ist `false`).

## Beschreibung

Die `intercept()`-Methode wird verwendet, um dasselbe Dokument (SPA)-Navigationsverhalten zu implementieren, wenn eine Navigation auftritt, beispielsweise wenn ein Link angeklickt, ein Formular eingereicht oder eine programmatische Navigation initiiert wird (mit [`History.pushState()`](/de/docs/Web/API/History/pushState), [`Window.location`](/de/docs/Web/API/Window/location) usw.).

Dies erfolgt über ein paar verschiedene Rückruffunktionen, `handler()` und `precommitHandler()`.

### Unmittelbare Navigationen mit `handler()` behandeln

Der `handler()`-Callback wird als Reaktion auf eine bestätigte Navigation ausgeführt. Er wird ausgeführt, nachdem die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft aktualisiert wurde, was bedeutet, dass eine neue URL in der Browser-Benutzeroberfläche angezeigt wird und die Historie mit einem neuen Eintrag aktualisiert wird.

Ein typisches Beispiel sieht so aus, dass spezifische Inhalte in Reaktion auf eine bestimmte Navigation gerendert und geladen werden:

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

`handler()` sollte verwendet werden, um Navigationsverhalten zu implementieren, bei denen die Navigation bestätigt wird: Der Benutzer sollte etwas Neues sehen.

### Vorverfahrsaktionen mit `precommitHandler()` handhaben

Allerdings möchten Sie möglicherweise auch in-flight-Navigationen ändern oder abbrechen oder Arbeit ausführen, während die Navigation im Gange ist und bevor sie abgeschlossen wird. Diese Art von Szenario kann mit dem `precommitHandler()`-Callback behandelt werden, das ausgeführt wird, bevor die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft aktualisiert wurde und die Browser-Benutzeroberfläche den neuen Standort anzeigt.

Zum Beispiel, wenn der Benutzer zu einer eingeschränkten Seite navigiert und nicht angemeldet ist, möchten Sie den Browser möglicherweise auf eine Anmeldeseite umleiten. Dies könnte folgendermaßen gehandhabt werden:

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

Dieses Muster ist einfacher als die Alternative, bei der die ursprüngliche Navigation abgebrochen und eine neue zur Umleitungsstation gestartet wird, weil es den Zwischenschritt vermeidet, sichtbar zu machen. Zum Beispiel wird nur ein [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) Ereignis ausgelöst, und wenn die Navigation durch einen Aufruf von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) ausgelöst wurde, wird das Promise erst erfüllt, wenn die Umleitungsstation erreicht ist.

Der `precommitHandler()`-Callback nimmt ein [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController)-Objekt als Argument an, das eine [`redirect()`](/de/docs/Web/API/NavigationPrecommitController/redirect)-Methode enthält. Die `redirect()`-Methode nimmt zwei Parameter an — einen String, der die URL repräsentiert, zu der weitergeleitet werden soll, und ein optionales Optionsobjekt, das den Status und das Historienverhalten spezifizieren kann.

`precommitHandler()` behandelt im Allgemeinen alle Modifikationen des Navigationsverhaltens, die erforderlich sind, bevor die Ziel-URL tatsächlich im Browser angezeigt wird, wobei sie je nach Bedarf abgebrochen oder umgeleitet wird.

> [!NOTE]
> Da `precommitHandler()` zur Stornierung von Navigationen verwendet werden kann, funktioniert es nur wie erwartet, wenn die [`Event.cancelable`](/de/docs/Web/API/Event/cancelable)-Eigenschaft des Ereignisses `true` ist. Ein Aufruf von `intercept()` mit einem `precommitHandler()` für ein nicht abbrechbares Ereignis führt dazu, dass ein `SecurityError` ausgelöst wird.

### Reagieren auf Navigations-Erfolg oder -Fehler

Wenn die von den `intercept()`-Handlerfunktionen zurückgegebenen Promises erfüllt werden, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis des `Navigation`-Objekts ausgelöst, sodass Sie Bereinigungscode ausführen können, nachdem eine erfolgreiche Navigation abgeschlossen ist. Wenn diese Promises abgelehnt werden, was bedeutet, dass die Navigation fehlgeschlagen ist, feuert [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) stattdessen, sodass Sie den Fehlerfall elegant behandeln können.

Es gibt auch eine `finished`-Eigenschaft im Rückgabewert von Navigationsmethoden (wie [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), die sich gleichzeitig mit den oben genannten Ereignissen erfüllt oder ablehnt und einen weiteren Weg zur Behandlung der Erfolgs- und Fehlerfälle bietet.

### Interaktion zwischen `precommitHandler()` und `handler()`

Sowohl `precommitHandler()` als auch `handler()`-Rückruffunktionen können innerhalb desselben `intercept()`-Aufrufs enthalten sein. In solchen Fällen ist die Abfolge der Operationen wie folgt:

1. Zuerst wird der `precommitHandler()`-Handler ausgeführt.
   - Wenn das `precommitHandler()`-Promise erfüllt wird, wird die Navigation abgeschlossen.
   - Wenn das `precommitHandler()` abgelehnt wird, feuert das `navigateerror`-Ereignis, die `committed`- und `finished`-Promises werden abgelehnt und die Navigation wird abgebrochen.

2. Wenn die Navigation abgeschlossen ist, wird ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) für die Navigation erstellt, und sein `committed`-Promise wird erfüllt.

3. Anschließend wird das `handler()`-Promise ausgeführt.
   - Wenn das `handler()`-Promise erfüllt wird und das `navigatesuccess`-Ereignis feuert, wird das `finished`-Promise ebenfalls erfüllt, um anzuzeigen, dass die Navigation abgeschlossen ist.
   - Wenn `handler()` abgelehnt wird, feuert das `navigateerror`-Ereignis, das `finished`-Promise wird abgelehnt und die Navigation wird abgebrochen.

Es ist wichtig zu beachten, dass der oben beschriebene Prozess auch bei mehreren `intercept()`-Aufrufen auf demselben `NavigateEvent` aufrechterhalten wird. Alle `precommitHandler()`-Rückruffunktionen werden zuerst aufgerufen, und wenn alle gelöst sind, wird die Navigation abgeschlossen und alle `handler()`-Rückruffunktionen werden aufgerufen.

### Steuerung des Fokusverhaltens

Standardmäßig wird nach einer mit `intercept()` behandelten Navigation der Fokus im Dokument auf das erste Element im DOM mit einem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut oder andererseits auf das {{htmlelement("body")}}-Element zurückgesetzt, wenn kein `autofocus`-Attribut gesetzt ist. Wenn Sie dieses Verhalten überschreiben möchten, um manuell eine zugänglichere Fokusposition bei der Navigation zu implementieren (zum Beispiel die neue oberste Überschrift), können Sie dies tun, indem Sie die `focusReset`-Option auf `manual` setzen.

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

Nachdem eine `intercept()`-Navigation abgeschlossen ist, tritt das folgende Scrollverhalten auf:

- Für `push`- und `replace`-Navigationen (siehe [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)) versucht der Browser, zum Fragment zu scrollen, das durch `event.destination.url` angegeben wird. Wenn kein Fragment verfügbar ist, wird die Scrollposition auf den Anfang der Seite zurückgesetzt.
- Für [`traverse`](/de/docs/Web/API/Navigation/traverseTo)- und [`reload`](/de/docs/Web/API/Navigation/reload)-Navigationen ist das Verhalten ähnlich wie bei `push`- und `replace`-Navigationen, aber der Browser verzögert seine Logik zur Scroll-Wiederherstellung, bis das `intercept()`-Promise erfüllt ist. Es wird keine Scroll-Wiederherstellung durchgeführt, wenn das Promise abgelehnt wird. Wenn der Benutzer während des Übergangs gescrollt hat, wird keine Scroll-Wiederherstellung durchgeführt.

Wenn Sie dieses Verhalten deaktivieren möchten, können Sie dies tun, indem Sie die `scroll`-Option auf `manual` setzen.

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

Wenn Sie das zuvor beschriebene Standard-Scrollverhalten manuell auslösen möchten (vielleicht möchten Sie die Scrollposition frühzeitig auf den oberen Teil der Seite zurücksetzen, bevor die vollständige Navigation abgeschlossen ist), können Sie dies tun, indem Sie [`NavigateEvent.scroll()`](/de/docs/Web/API/NavigateEvent/scroll) aufrufen.

## Beispiele

### Bearbeitung einer Navigation mit `intercept()`

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

Das Absenden von Formularen kann durch Abfragen der [`NavigateEvent.formData`](/de/docs/Web/API/NavigateEvent/formData)-Eigenschaft erkannt werden. Das folgende Beispiel wandelt jede Formularübermittlung in eine um, die auf der aktuellen Seite bleibt. In diesem Fall aktualisieren Sie das DOM nicht, sodass Sie das Standard-Reset und das Scrollverhalten mit `focusReset` und `scroll` abbrechen können.

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
