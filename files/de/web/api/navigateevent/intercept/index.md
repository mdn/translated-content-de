---
title: "NavigateEvent: intercept() Methode"
short-title: intercept()
slug: Web/API/NavigateEvent/intercept
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Navigation API")}}

Die **`intercept()`**-Methode des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces fängt diese Navigation ab und wandelt sie in eine Navigation im selben Dokument zur [`destination`](/de/docs/Web/API/NavigationDestination/url)-URL um.

## Syntax

```js-nolint
intercept()
intercept(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `handler` {{optional_inline}}
      - : Eine Callback-Funktion, die das Navigationsverhalten definiert; sie gibt ein Promise zurück. Diese Funktion wird ausgeführt, nachdem die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft aktualisiert wurde.
    - `precommitHandler` {{optional_inline}}
      - : Eine Callback-Funktion, die jegliches Verhalten definiert, das unmittelbar vor dem Festlegen der Navigation stattfinden soll; sie akzeptiert ein [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController)-Objekt als Argument und gibt ein Promise zurück. Diese Funktion wird ausgeführt, bevor die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft aktualisiert wurde.
    - `focusReset` {{optional_inline}}
      - : Definiert das Fokusverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Sobald das Promise Ihrer Handler-Funktion erfüllt wurde, wird der erste mit dem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut versehene HTML-Element fokussiert, oder das {{htmlelement("body")}}-Element, falls kein Element mit `autofocus` gesetzt ist. Dies ist der Standardwert.
        - `manual`
          - : Das Standardverhalten deaktivieren.
    - `scroll` {{optional_inline}}
      - : Definiert das Scrollverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Ermöglicht es dem Browser, das Scrolling zu handhaben, z. B. durch Scrollen zum relevanten Fragmentidentifikator, wenn die URL ein Fragment enthält, oder indem die Scrollposition an derselben Stelle wie beim letzten Mal wiederhergestellt wird, wenn die Seite neu geladen oder eine Seite in der Historie erneut aufgerufen wird. Dies ist der Standardwert.
        - `manual`
          - : Das Standardverhalten deaktivieren.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist oder die Navigation abgebrochen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Ereignis von einem [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)-Aufruf und nicht von der User-Agent-Dispatched wurde.
    - Die Navigation nicht abgefangen werden kann ([`NavigateEvent.canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) ist `false`).
    - Eine `precommitHandler()`-Callback-Funktion bei einem nicht-abbrechbaren Ereignis bereitgestellt wird ([`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ist `false`).

## Beschreibung

Die `intercept()`-Methode wird verwendet, um das Verhalten einer Navigation innerhalb desselben Dokuments (SPA) zu implementieren, wenn eine Navigation stattfindet; zum Beispiel, wenn ein Link angeklickt, ein Formular abgeschickt oder eine programmatische Navigation initiiert wird (verwendet [`History.pushState()`](/de/docs/Web/API/History/pushState), [`Window.location`](/de/docs/Web/API/Window/location) usw.).

Dies erfolgt über verschiedene Callback-Funktionen, `handler()` und `precommitHandler()`.

### Umgang mit sofortigen Navigationen mit `handler()`

Der `handler()`-Callback wird als Antwort auf eine festgelegte Navigation ausgeführt. Er wird ausgeführt, nachdem die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft aktualisiert wurde, was bedeutet, dass eine neue URL in der Browser-Benutzeroberfläche angezeigt wird und die Historie mit einem neuen Eintrag aktualisiert ist.

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

`handler()` sollte verwendet werden, um das Navigationsverhalten zu implementieren, bei dem die Navigation festgelegt wird: Der Nutzer sollte etwas Neues sehen.

### Umgang mit Pre-Commit-Aktionen mit `precommitHandler()`

Allerdings möchten Sie möglicherweise auch eine laufende Navigation ändern oder abbrechen, oder Arbeit während der laufenden Navigation durchführen, bevor sie festgelegt wird. Dieses Szenario kann mit dem `precommitHandler()`-Callback behandelt werden, der ausgeführt wird, bevor die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft aktualisiert wird und die Browser-Nutzeroberfläche den neuen Ort zeigt.

Wenn zum Beispiel der Benutzer zu einer eingeschränkten Seite navigiert und nicht angemeldet ist, möchten Sie möglicherweise den Browser auf eine Anmelde-Seite umleiten. Dies könnte so gehandhabt werden:

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

Dieses Muster ist einfacher als die Alternative, die ursprüngliche Navigation abzubrechen und eine neue zur Umleitungsadresse zu beginnen, da es den Zwischenzustand vermeidet. Zum Beispiel wird nur ein [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)- oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)-Ereignis ausgelöst, und wenn die Navigation durch einen Aufruf von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) ausgelöst wurde, wird das Promise nur erfüllt, sobald das Umleitungsziel erreicht ist.

Der `precommitHandler()`-Callback akzeptiert ein [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController)-Objekt als Argument, das eine [`redirect()`](/de/docs/Web/API/NavigationPrecommitController/redirect)-Methode enthält. Die `redirect()`-Methode nimmt zwei Parameter an — einen String, der die URL zur Umleitung repräsentiert, und ein optionales Optionsobjekt, das Zustands- und Verhaltensweisen der Historie spezifizieren kann.

`precommitHandler()` behandelt im Allgemeinen alle Modifikationen des Navigationsverhaltens, die erforderlich sind, bevor die Ziel-URL tatsächlich im Browser angezeigt wird, indem sie abgebrochen oder an einen anderen Ort umgeleitet wird.

> [!NOTE]
> Da `precommitHandler()` verwendet werden kann, um Navigationen abzubrechen, funktioniert es nur erwartungsgemäß, wenn die [`Event.cancelable`](/de/docs/Web/API/Event/cancelable)-Eigenschaft des Ereignisses `true` ist. Der Aufruf von `intercept()` mit einem `precommitHandler()` bei einem nicht-abbrechbaren Ereignis führt zu einem `SecurityError`.

### Planen von Post-Commit-Aktionen in `precommitHandler()`

Wie wir oben gesehen haben, können Sie einen `handler()`-Callback im Objekt angeben, das an die `intercept()`-Methode übergeben wird, um Aktionen nach Festlegung einer Navigation auszuführen.
Diese Vorgehensweise funktioniert gut, wenn die nach Festlegung erforderlichen Aktionen nicht von den Aktionen abhängen, die in der Pre-Commit-Phase ausgeführt werden.
Wenn dies der Fall ist, können Sie [`NavigationPrecommitController.addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) in `precommitHandler()` verwenden, um dynamisch einen Handler hinzuzufügen, der nach der Festlegung der Navigation ausgeführt wird.

Betrachten Sie beispielsweise diesen Code, der das vorherige Beispiel erweitert, um einen abgemeldeten Benutzer auf eine Anmelde-Seite umzuleiten.
Der Code verwendet `addHandler()`, um einen Post-Commit-Handler-Callback hinzuzufügen, der eine Nachricht anzeigt, die den Grund für die Umleitung erklärt.
Beachten Sie, dass der Handler nur für den spezifischen Fall einer Umleitung zur Anmelde-Seite ausgeführt wird.

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

### Reagieren auf Navigations-Erfolg oder -Fehler

Wenn die von den `intercept()`-Handler-Funktionen zurückgegebenen Promises erfüllt werden, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis des `Navigation`-Objekts ausgelöst, was es Ihnen ermöglicht, Aufräumcode nach einer erfolgreichen Navigation auszuführen. Wenn diese Promises abgelehnt werden, was bedeutet, dass die Navigation fehlgeschlagen ist, wird stattdessen [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) ausgelöst, was Ihnen ermöglicht, den Fehlerfall elegant zu handhaben.

Es gibt auch eine `finished`-Eigenschaft beim Rückgabewert von Navigationsmethoden (wie [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), die gleichzeitig erfüllt oder abgelehnt wird, wenn die zuvor genannten Ereignisse ausgelöst werden, und bietet einen weiteren Pfad zum Umgang mit Erfolgs- und Fehlerfällen.

### Interaktion zwischen `precommitHandler()` und `handler()`

Sowohl `precommitHandler()` als auch `handler()`-Callbacks können innerhalb desselben `intercept()`-Aufrufs enthalten sein. In solchen Fällen erfolgt die Reihenfolge der Operationen wie folgt:

1. Zuerst wird der `precommitHandler()`-Handler ausgeführt.
   - Wenn das `precommitHandler()`-Promise erfüllt wird, wird die Navigation festgelegt.
   - Wenn das `precommitHandler()`-Promise abgelehnt wird, wird das `navigateerror`-Ereignis ausgelöst, die `committed`- und `finished`-Promises werden abgelehnt und die Navigation wird abgebrochen.

2. Wenn die Navigation festgelegt wird, wird ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) für die Navigation erstellt und das `committed`-Promise wird erfüllt.

3. Als nächstes wird das `handler()`-Promise ausgeführt.
   - Wenn das `handler()`-Promise erfüllt wird und das `navigatesuccess`-Ereignis ausgelöst wird, wird das `finished`-Promise ebenfalls erfüllt, um anzuzeigen, dass die Navigation abgeschlossen ist.
   - Wenn das `handler()`-Promise abgelehnt wird, wird das `navigateerror`-Ereignis ausgelöst, das `finished`-Promise abgelehnt und die Navigation wird abgebrochen.

Beachten Sie, dass der obige Prozess selbst bei mehreren `intercept()`-Aufrufen auf demselben `NavigateEvent` und für `handler()`-Callbacks, die im `precommitHandler()` hinzugefügt werden, eingehalten wird.
Alle `precommitHandler()`-Callbacks werden zuerst aufgerufen, und wenn alle von ihnen aufgelöst sind, wird die Navigation festgelegt, und alle `handler()`-Callbacks werden aufgerufen.

### Steuerung des Fokusverhaltens

Standardmäßig wird nach einer mit `intercept()` behandelten Navigation der Dokumentenfokus auf das erste Element im DOM mit einem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut zurückgesetzt, oder andernfalls auf das {{htmlelement("body")}}-Element, wenn kein `autofocus`-Attribut gesetzt ist. Wenn Sie dieses Verhalten überschreiben möchten, um manuell eine zugänglichere Fokusposition bei der Navigation zu implementieren (zum Beispiel die neue Überschrift auf oberster Ebene), können Sie dies tun, indem Sie die `focusReset`-Option auf `manual` setzen.

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

- Für `push`- und `replace`-Navigationen (siehe [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)) versucht der Browser zum Fragment zu scrollen, das durch `event.destination.url` angegeben wird. Gibt es kein verfügbares Fragment, wird die Scrollposition auf den oberen Seitenrand zurückgesetzt.
- Für [`traverse`](/de/docs/Web/API/Navigation/traverseTo)- und [`reload`](/de/docs/Web/API/Navigation/reload)-Navigationen ähnelt das Verhalten `push`- und `replace`-Navigationen, aber der Browser verzögert seine Scroll-Wiederherstellungslogik, bis das `intercept()`-Promise erfüllt ist. Es wird keine Scroll-Wiederherstellung durchgeführt, wenn das Promise abgelehnt wird. Wenn der Benutzer während der Transformation gescrollt hat, wird keine Scroll-Wiederherstellung durchgeführt.

Wenn Sie dieses Verhalten abschalten möchten, können Sie dies tun, indem Sie die `scroll`-Option auf `manual` setzen.

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

Wenn Sie das standardmäßige Scrollverhalten, das zuvor beschrieben wurde, manuell auslösen möchten (vielleicht möchten Sie die Scrollposition frühzeitig auf den oberen Seitenrand zurücksetzen, bevor der vollständige Navigationsvorgang abgeschlossen ist), können Sie dies tun, indem Sie [`NavigateEvent.scroll()`](/de/docs/Web/API/NavigateEvent/scroll) aufrufen.

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

Die Formulareinreichung kann durch Abfragen der [`NavigateEvent.formData`](/de/docs/Web/API/NavigateEvent/formData)-Eigenschaft erkannt werden. Das folgende Beispiel wandelt jede Formulareinreichung in eine um, die auf der aktuellen Seite bleibt. In diesem Fall aktualisieren Sie das DOM nicht, sodass Sie jegliches Standard-Reset- und Scrollverhalten mit `focusReset` und `scroll` abstellen können.

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
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
