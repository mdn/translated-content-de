---
title: "NavigateEvent: Methode intercept()"
short-title: intercept()
slug: Web/API/NavigateEvent/intercept
l10n:
  sourceCommit: d1755079dbc4d1fb68c4bda0cf999fdf618e234a
---

{{APIRef("Navigation API")}}

Die **`intercept()`** Methode des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces fängt diese Navigation ab und wandelt sie in eine Same-Document-Navigation zur [`destination`](/de/docs/Web/API/NavigationDestination/url)-URL um.

## Syntax

```js-nolint
intercept()
intercept(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `handler` {{optional_inline}}
      - : Eine Callback-Funktion, die definiert, welches Verhalten bei der Navigation angewendet werden soll; sie gibt ein Versprechen zurück. Diese Funktion wird ausgeführt, nachdem die Eigenschaft [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) aktualisiert wurde.
    - `precommitHandler` {{optional_inline}}
      - : Eine Callback-Funktion, die jedes Verhalten definiert, das unmittelbar vor der bestätigten Navigation stattfinden soll; sie akzeptiert ein [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController)-Objekt als Argument und gibt ein Versprechen zurück. Diese Funktion wird vor der Aktualisierung der Eigenschaft [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ausgeführt.
    - `focusReset` {{optional_inline}}
      - : Definiert das Fokusverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Sobald das Versprechen Ihrer Handler-Funktion erfüllt wird, fokussiert der Browser das erste Element mit dem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut oder das {{htmlelement("body")}}-Element, wenn kein Element `autofocus` gesetzt hat. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.
    - `scroll` {{optional_inline}}
      - : Definiert das Scrollverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Erlaubt dem Browser, das Scrollen zu steuern, z.B. indem er zum entsprechenden Fragment-Identifier scrollt, wenn die URL ein Fragment enthält, oder die Scroll-Position an derselben Stelle wiederherstellt, wenn die Seite neu geladen wird oder eine Seite in der Historie erneut aufgerufen wird. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist oder wenn die Navigation abgebrochen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Ereignis durch einen Aufruf von [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) und nicht durch den User-Agent gesendet wurde.
    - Die Navigation nicht abgefangen werden kann ([`NavigateEvent.canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) ist `false`).
    - Ein `precommitHandler()`-Callback für ein nicht abbrechbares Ereignis bereitgestellt wird ([`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ist `false`).

## Beschreibung

Die Methode `intercept()` wird verwendet, um das Navigation-Verhalten innerhalb desselben Dokuments (SPA) zu implementieren, wenn eine Navigation erfolgt; beispielsweise, wenn ein Link angeklickt wird, ein Formular eingereicht wird oder eine programmatische Navigation initiiert wird (mit [`History.pushState()`](/de/docs/Web/API/History/pushState), [`Window.location`](/de/docs/Web/API/Window/location) usw.).

Dies geschieht über eine Reihe verschiedener Callback-Funktionen, `handler()` und `precommitHandler()`.

### Umgang mit sofortigen Navigierungen mit `handler()`

Der `handler()`-Callback wird als Reaktion auf eine bestätigte Navigation ausgeführt. Er wird nach dem Aktualisieren der Eigenschaft [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) ausgeführt, was bedeutet, dass eine neue URL in der Browser-Benutzeroberfläche angezeigt wird und die Historie mit einem neuen Eintrag aktualisiert wird.

Ein typisches Beispiel sieht so aus, dass spezifische Inhalte gerendert und geladen werden, als Antwort auf eine bestimmte Navigation:

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

`handler()` sollte verwendet werden, um Navigationsverhalten zu implementieren, bei dem die Navigation bestätigt wird: dem Benutzer sollte etwas Neues gezeigt werden.

### Umgang mit Precommit-Aktionen mit `precommitHandler()`

Es kann jedoch auch gewünscht werden, laufende Navigierungen zu ändern oder abzubrechen oder Arbeiten durchzuführen, während die Navigation läuft und bevor sie bestätigt wird. Dieses Szenario kann mit dem `precommitHandler()`-Callback behandelt werden, der ausgeführt wird, bevor die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft aktualisiert und die neue Position in der Browser-Benutzeroberfläche angezeigt wird.

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

Dieses Muster ist einfacher als die Alternative, die ursprüngliche Navigation abzubrechen und eine neue zur Umleitungs-URL zu starten, da es den Zwischenzustand vermeidet. Beispielsweise wird nur ein [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)- oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event)-Ereignis ausgelöst, und wenn die Navigation durch einen Aufruf von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) ausgelöst wurde, wird das Versprechen erst erfüllt, wenn das Ziel der Umleitung erreicht wurde.

Das `precommitHandler()`-Callback akzeptiert ein [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController)-Objekt als Argument, das eine Methode [`redirect()`](/de/docs/Web/API/NavigationPrecommitController/redirect) enthält. Die Methode `redirect()` nimmt zwei Parameter: einen String, der die URL repräsentiert, zu der umgeleitet werden soll, und ein optionales Optionsobjekt, das den Status und das Historienverhalten spezifizieren kann.

`precommitHandler()` behandelt im Allgemeinen alle Änderungen am Navigationsverhalten, die erforderlich sind, bevor die Ziel-URL tatsächlich im Browser angezeigt wird, und bricht sie ab oder leitet sie bei Bedarf woanders hin um.

> [!NOTE]
> Da `precommitHandler()` verwendet werden kann, um Navigierungen abzubrechen, funktioniert es nur dann wie erwartet, wenn die Eigenschaft [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) des Ereignisses `true` ist. Ein Aufruf von `intercept()` mit einem `precommitHandler()` bei einem nicht abbrechbaren Ereignis führt zu einem `SecurityError`.

### Planen von Aktionen nach Bestätigung in `precommitHandler()`

Wie oben gezeigt, kann in dem Objekt, das an die `intercept()`-Methode übergeben wird, ein `handler()`-Callback angegeben werden, um nach der Bestätigung einer Navigation Aktionen auszuführen.
Dieser Ansatz funktioniert gut, wenn die nach der Bestätigung erforderlichen Aktionen nicht von Aktionen abhängen, die in der Vorbestätigungsphase ausgeführt wurden.
Wenn dies der Fall ist, können Sie [`NavigationPrecommitController.addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) im `precommitHandler()` verwenden, um dynamisch einen Handler hinzuzufügen, der nach der Bestätigung der Navigation ausgeführt wird.

Beispielsweise könnte dieser Code das vorherige Beispiel für die Umleitung eines nicht angemeldeten Benutzers zu einer Anmeldeseite erweitern.
Der Code verwendet `addHandler()`, um einen Post-Commit-Handler-Callback hinzuzufügen, der eine Nachricht anzeigt, die den Grund für die Umleitung erklärt.
Beachten Sie, dass der Handler nur für den speziellen Fall einer Umleitung zur Anmeldeseite ausgeführt wird.

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

### Reagieren auf Navigations-Erfolg oder -Fehlschlag

Wenn die von den `intercept()`-Handler-Funktionen zurückgegebenen Versprechen erfüllt werden, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis des `Navigation`-Objekts ausgelöst, sodass Sie Aufräum-Code nach erfolgreichem Abschluss der Navigation ausführen können. Wenn diese Versprechen zurückgewiesen werden, d.h. die Navigation fehlgeschlagen ist, wird stattdessen [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror) ausgelöst, damit Sie den Fehlerfall angemessen behandeln können.

Es gibt auch eine `finished`-Eigenschaft im Rückgabewert von Navigationsmethoden (wie [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), die gleichzeitig erfüllt oder zurückgewiesen wird, wenn die oben genannten Ereignisse ausgelöst werden, und eine weitere Möglichkeit bietet, die Erfolgs- und Fehlerfälle zu behandeln.

### Interaktion zwischen `precommitHandler()` und `handler()`

Sowohl `precommitHandler()` als auch `handler()`-Callbacks können innerhalb desselben `intercept()`-Aufrufs enthalten sein. In solchen Fällen erfolgt die Ausführung in folgender Reihenfolge:

1. Zuerst wird der `precommitHandler()`-Handler ausgeführt.
   - Wenn das `precommitHandler()`-Versprechen erfüllt wird, wird die Navigation bestätigt.
   - Wenn das `precommitHandler()`-Versprechen zurückgewiesen wird, wird das `navigateerror`-Ereignis ausgelöst, die Versprechen `committed` und `finished` werden zurückgewiesen, und die Navigation wird abgebrochen.

2. Wenn die Navigation bestätigt wird, wird ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) für die Navigation erstellt und sein `committed`-Versprechen wird erfüllt.

3. Anschließend wird das `handler()`-Versprechen ausgeführt.
   - Wenn das `handler()`-Versprechen erfüllt wird und das `navigatesuccess`-Ereignis ausgelöst wird, wird auch das `finished`-Versprechen erfüllt, um anzuzeigen, dass die Navigation abgeschlossen ist.
   - Wenn `handler()` zurückgewiesen wird, wird das `navigateerror`-Ereignis ausgelöst, das `finished`-Versprechen wird zurückgewiesen, und die Navigation wird abgebrochen.

Beachten Sie, dass der obige Prozess auch bei mehreren `intercept()`-Aufrufen für dasselbe `NavigateEvent` und für `handler()`-Callbacks, die beim `precommitHandler()` hinzugefügt wurden, eingehalten wird.
Alle `precommitHandler()`-Callbacks werden zuerst aufgerufen, und wenn alle von ihnen gelöst sind, wird die Navigation bestätigt und alle `handler()`-Callbacks werden aufgerufen.

### Kontrolle des Fokusverhaltens

Standardmäßig wird nach einer mit `intercept()` behandelten Navigation der Dokumentfokus auf das erste Element im DOM zurückgesetzt, das ein [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus)-Attribut hat, oder auf das {{htmlelement("body")}}-Element, wenn kein `autofocus`-Attribut gesetzt ist. Wenn Sie dieses Verhalten überschreiben möchten, um eine manuelle, zugänglichere Fokusposition für die Navigation zu implementieren (z.B. die neue obere Überschrift), können Sie dies tun, indem Sie die `focusReset`-Option auf `manual` setzen.

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

### Kontrolle des Scrollverhaltens

Nach Abschluss einer `intercept()`-Navigation tritt folgendes Scrollverhalten auf:

- Bei `push`- und `replace`-Navigationen (siehe [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)) versucht der Browser, zum Fragment zu scrollen, das durch `event.destination.url` angegeben ist. Wenn kein Fragment verfügbar ist, wird die Scroll-Position an den Anfang der Seite zurückgesetzt.
- Bei [`traverse`](/de/docs/Web/API/Navigation/traverseTo)- und [`reload`](/de/docs/Web/API/Navigation/reload)-Navigationen ähnelt das Verhalten den `push`- und `replace`-Navigationen, aber der Browser verzögert seine Logik zur Scroll-Wiederherstellung, bis das `intercept()`-Versprechen erfüllt wird. Es wird keine Scroll-Wiederherstellung durchgeführt, wenn das Versprechen abgelehnt wird. Wenn der Benutzer während der Übergangszeit gescrollt hat, wird keine Scroll-Wiederherstellung durchgeführt.

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

Wenn Sie das oben beschriebene Standard-Scrollverhalten manuell auslösen möchten (möglicherweise möchten Sie die Scroll-Position frühzeitig auf den Anfang der Seite zurücksetzen, bevor die vollständige Navigation abgeschlossen ist), können Sie dies tun, indem Sie [`NavigateEvent.scroll()`](/de/docs/Web/API/NavigateEvent/scroll) aufrufen.

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

Das Absenden eines Formulars kann durch Abfragen der [`NavigateEvent.formData`](/de/docs/Web/API/NavigateEvent/formData)-Eigenschaft erkannt werden. Im folgenden Beispiel wird jede Formularübermittlung in einejenige umgewandelt, die auf der aktuellen Seite bleibt. In diesem Fall aktualisieren Sie das DOM nicht, sodass Sie jedes Standard-Reset- und Scroll-Verhalten mit `focusReset` und `scroll` deaktivieren können.

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

- [Moderne clientseitige Navigation: Die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
