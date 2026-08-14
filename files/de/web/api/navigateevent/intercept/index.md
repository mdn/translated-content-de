---
title: "NavigateEvent: intercept() Methode"
short-title: intercept()
slug: Web/API/NavigateEvent/intercept
l10n:
  sourceCommit: 40e56a58f2b30f94104aa0897b59084f5b48bedf
---

{{APIRef("Navigation API")}}

Die **`intercept()`** Methode des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces fängt diese Navigation ab und verwandelt sie in eine same-document-Navigation zur [`destination`](/de/docs/Web/API/NavigationDestination/url) URL.

## Syntax

```js-nolint
intercept()
intercept(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `handler` {{optional_inline}}
      - : Eine Callback-Funktion, die definiert, wie das Navigationsverhalten sein soll; sie gibt ein Promise zurück. Diese Funktion wird ausgeführt, nachdem die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) Eigenschaft aktualisiert wurde.
    - `precommitHandler` {{optional_inline}}
      - : Eine Callback-Funktion, die jegliches Verhalten definiert, das unmittelbar vor der Festlegung der Navigation auftreten soll; sie akzeptiert ein [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController)-Objekt als Argument und gibt ein Promise zurück. Diese Funktion wird ausgeführt, bevor die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) Eigenschaft aktualisiert wurde.
    - `focusReset` {{optional_inline}}
      - : Definiert das Fokusverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Sobald der Promise, der von Ihrer Handler-Funktion zurückgegeben wird, erfüllt ist, fokussiert der Browser das erste Element mit dem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut oder das {{htmlelement("body")}}-Element, wenn kein Element `autofocus` gesetzt hat. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.
    - `scroll` {{optional_inline}}
      - : Definiert das Scrollverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Ermöglicht dem Browser, das Scrollen zu handhaben, z.B. indem er zu dem relevanten Fragment-Identifier scrollt, wenn die URL ein Fragment enthält, oder die Scrollposition an der gleichen Stelle wie beim letzten Mal wiederherstellt, wenn die Seite neu geladen wird oder eine Seite in der Historie erneut besucht wird. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist oder wenn die Navigation abgebrochen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Ereignis durch einen [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)-Aufruf und nicht durch den Benutzeragenten ausgelöst wurde.
    - Die Navigation nicht abgefangen werden kann ([`NavigateEvent.canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) ist `false`).
    - Ein `precommitHandler()`-Callback auf einem nicht abbrechbaren Ereignis bereitgestellt wird ([`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ist `false`).

## Beschreibung

Die Methode `intercept()` wird verwendet, um das Verhalten bei same-document-Navigationen (SPA) zu implementieren, wenn eine Navigation auftritt; z.B., wenn ein Link angeklickt, ein Formular abgeschickt oder eine programmatische Navigation gestartet wird (unter Verwendung von [`History.pushState()`](/de/docs/Web/API/History/pushState), [`Window.location`](/de/docs/Web/API/Window/location), usw.).

Dies geschieht über einige verschiedene Callbacks, `handler()` und `precommitHandler()`.

### Sofortige Navigationen mit `handler()` behandeln

Der `handler()`-Callback wird als Antwort auf eine festgelegte Navigation ausgeführt. Er wird ausgeführt, nachdem die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) Eigenschaft aktualisiert wurde, was bedeutet, dass eine neue URL in der Browser-Benutzeroberfläche angezeigt wird und die Historie mit einem neuen Eintrag aktualisiert wird.

Ein typisches Beispiel sieht so aus und ermöglicht es, dass spezifische Inhalte gerendert und geladen werden, als Antwort auf eine bestimmte Navigation:

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

`handler()` sollte verwendet werden, um Navigationsverhalten zu implementieren, bei dem die Navigation festgelegt wird: Der Benutzer sollte etwas Neues sehen.

### Precommit-Aktionen mit `precommitHandler()` behandeln

Es kann jedoch auch gewünscht sein, in-flug-Navigationen zu ändern oder abzubrechen oder Arbeiten durchzuführen, während die Navigation im Gange ist und bevor sie festgelegt wird. Dieses Szenario kann mit dem `precommitHandler()`-Callback behandelt werden, der ausgeführt wird, bevor die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft aktualisiert wird und die Browser-Benutzeroberfläche den neuen Standort zeigt.

Beispielsweise, wenn der Benutzer zu einer eingeschränkten Seite navigiert und nicht angemeldet ist, möchten Sie möglicherweise den Browser zu einer Anmeldeseite umleiten. Dies könnte wie folgt gehandhabt werden:

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

Dieses Muster ist einfacher als die Alternative, die ursprüngliche Navigation abzubrechen und eine neue zur Umleitungsstelle zu starten, da es den Zwischenzustand vermeidet. Beispielsweise wird nur ein [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) Ereignis ausgelöst, und wenn die Navigation durch einen Aufruf von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) ausgelöst wurde, wird das Promise nur erfüllt, wenn das Umleitungsziel erreicht wird.

Der `precommitHandler()`-Callback nimmt ein [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController)-Objekt als Argument, das eine [`redirect()`](/de/docs/Web/API/NavigationPrecommitController/redirect)-Methode enthält. Die `redirect()`-Methode nimmt zwei Parameter auf — einen String, der die URL darstellt, zu der umgeleitet werden soll, und ein optionales Optionsobjekt, das den Zustands- und Historieverhalten spezifizieren kann.

`precommitHandler()` behandelt im Allgemeinen jede Änderung des Navigationsverhaltens, die erforderlich ist, bevor die Ziel-URL tatsächlich im Browser angezeigt wird, und bricht sie ab oder leitet sie nach Bedarf woanders hin um.

> [!NOTE]
> Da `precommitHandler()` verwendet werden kann, um Navigationen abzubrechen, funktioniert es nur wie erwartet, wenn die [`Event.cancelable`](/de/docs/Web/API/Event/cancelable)-Eigenschaft des Ereignisses `true` ist. Ein Aufruf von `intercept()` mit einem `precommitHandler()` bei einem nicht abbrechbaren Ereignis führt dazu, dass ein `SecurityError` ausgelöst wird.

### Aktionen nach Festlegung in `precommitHandler()` planen

Wie oben gesehen, können Sie ein `handler()`-Callback in dem an die `intercept()`-Methode übergebenen Objekt angeben, um Aktionen nach Festlegung der Navigation auszuführen. Dieser Ansatz funktioniert gut, wenn die nach der Festlegung erforderlichen Aktionen nicht von Vorbereitungsaktionen abhängen. Wenn dies der Fall ist, können Sie [`NavigationPrecommitController.addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) in `precommitHandler()` verwenden, um dynamisch einen Handler hinzuzufügen, der nach Festlegung der Navigation ausgeführt wird.

Betrachten Sie zum Beispiel diesen Code, der das vorherige Beispiel für die Umleitung eines abgemeldeten Benutzers zu einer Anmeldeseite erweitert. Der Code verwendet `addHandler()`, um ein Callback des nach Festlegung ausgeführten Handlers hinzuzufügen, das eine Nachricht anzeigt, die den Grund für die Umleitung erklärt. Beachten Sie, dass der Handler nur für den spezifischen Fall einer Umleitung zur Anmeldeseite ausgeführt wird.

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

        // Use addHandler to trigger logic once the /signin/ page commits
        controller.addHandler(() => {
          showMessage("Please sign in to view that content.");
        });
      },
    });
  }
});
```

### Auf Navigationserfolg oder -fehlschlag reagieren

Wenn die von den `intercept()`-Handler-Funktionen zurückgegebenen Promises erfüllt sind, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis des `Navigation`-Objekts ausgelöst, wodurch Sie Aufräumcode ausführen können, nachdem eine Navigation erfolgreich abgeschlossen wurde. Wenn diese Promises abgelehnt werden, was bedeutet, dass die Navigation fehlgeschlagen ist, wird stattdessen [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) ausgelöst, wodurch Sie den Fehlschlagfall sauber handhaben können.

Es gibt auch eine `finished`-Eigenschaft auf dem Rückgabewert der Navigationsmethoden (wie [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), die gleichzeitig erfüllt oder abgelehnt wird, wenn die zuvor genannten Ereignisse ausgelöst werden, und einen weiteren Weg zur Handhabung der Erfolgs- und Fehlschlagfälle bietet.

### Interaktion zwischen `precommitHandler()` und `handler()`

Sowohl `precommitHandler()`- als auch `handler()`-Callbacks können in denselben `intercept()`-Aufruf einbezogen werden. In solchen Fällen ist die Reihenfolge der Operationen wie folgt:

1. Zuerst wird der `precommitHandler()`-Handler ausgeführt.
   - Wenn das `precommitHandler()`-Promise erfüllt wird, wird die Navigation festgelegt.
   - Wenn das `precommitHandler()` abgelehnt wird, wird das `navigateerror`-Ereignis ausgelöst, die `committed`- und `finished`-Promises werden abgelehnt und die Navigation wird abgebrochen.

2. Wenn die Navigation festgelegt wird, wird ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) für die Navigation erstellt und sein `committed`-Promise wird erfüllt.

3. Als nächstes wird das `handler()`-Promise ausgeführt.
   - Wenn das `handler()`-Promise erfüllt wird und das `navigatesuccess`-Ereignis ausgelöst wird, wird auch das `finished`-Promise erfüllt, um anzuzeigen, dass die Navigation beendet ist.
   - Wenn `handler()` abgelehnt wird, wird das `navigateerror`-Ereignis ausgelöst, das `finished`-Promise wird abgelehnt und die Navigation wird abgebrochen.

Beachten Sie, dass der obige Prozess auch über mehrere `intercept()`-Aufrufe auf demselben `NavigateEvent` hinweg beibehalten wird, und für `handler()`-Callbacks, die im `precommitHandler()` hinzugefügt werden. Alle `precommitHandler()`-Callbacks werden zuerst aufgerufen, und wenn alle davon erfüllt sind, wird die Navigation festgelegt und alle `handler()`-Callbacks werden aufgerufen.

### Fokusverhalten steuern

Standardmäßig wird nach einer mit `intercept()` behandelten Navigation der Dokumentfokus auf das erste Element im DOM zurückgesetzt, das ein [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut gesetzt hat, oder andernfalls auf das {{htmlelement("body")}}-Element, wenn kein `autofocus`-Attribut gesetzt ist. Wenn Sie dieses Verhalten überschreiben möchten, um eine manuell umgesetzte, zugänglichere Fokusposition bei der Navigation zu implementieren (z.B. die neue Hauptüberschrift), können Sie dies tun, indem Sie die `focusReset`-Option auf `manual` setzen.

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

### Scrollverhalten steuern

Nach Abschluss einer `intercept()`-Navigation tritt folgendes Scrollverhalten auf:

- Für `push`- und `replace`-Navigationen (siehe [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)) versucht der Browser zum Fragment zu scrollen, das durch `event.destination.url` angegeben wird. Wenn kein Fragment verfügbar ist, wird die Scrollposition auf den Anfang der Seite zurückgesetzt.
- Für [`traverse`](/de/docs/Web/API/Navigation/traverseTo)- und [`reload`](/de/docs/Web/API/Navigation/reload)-Navigationen ähnelt das Verhalten den `push`- und `replace`-Navigationen, aber der Browser verzögert seine Scrollwiederherstellungslogik, bis das `intercept()`-Promise erfüllt ist. Er führt keine Scrollwiederherstellung durch, wenn das Promise abgelehnt wird. Wenn der Benutzer während der Transition gescrollt hat, wird keine Scrollwiederherstellung durchgeführt.

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

Wenn Sie das oben beschriebene Standardscrollverhalten manuell auslösen möchten (vielleicht möchten Sie die Scrollposition frühzeitig auf den Anfang der Seite zurücksetzen, bevor die vollständige Navigation abgeschlossen ist), können Sie dies tun, indem Sie [`NavigateEvent.scroll()`](/de/docs/Web/API/NavigateEvent/scroll) aufrufen.

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

Die Formularübermittlung kann durch Abfragen der [`NavigateEvent.formData`](/de/docs/Web/API/NavigateEvent/formData)-Eigenschaft erkannt werden. Das folgende Beispiel verwandelt jede Formularübermittlung in eine, die auf der aktuellen Seite bleibt. In diesem Fall aktualisieren Sie das DOM nicht, sodass Sie jedes Standard-Zurücksetzen und Scrollverhalten mit `focusReset` und `scroll` abbrechen können.

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
