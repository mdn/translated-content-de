---
title: "NavigateEvent: intercept() Methode"
short-title: intercept()
slug: Web/API/NavigateEvent/intercept
l10n:
  sourceCommit: 3d49f18251e1f3493ef2e3a70519603345f8b7dc
---

{{APIRef("Navigation API")}}

Die **`intercept()`**-Methode der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Schnittstelle fängt diese Navigation ab und wandelt sie in eine gleichseitige Navigation zur [`destination`](/de/docs/Web/API/NavigationDestination/url) URL um.

## Syntax

```js-nolint
intercept()
intercept(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `handler` {{optional_inline}}
      - : Eine Callback-Funktion, die das Verhalten der Navigation festlegt; sie gibt ein Promise zurück. Diese Funktion wird ausgeführt, nachdem die Eigenschaft [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) aktualisiert wurde.
    - `precommitHandler` {{optional_inline}}
      - : Eine Callback-Funktion, die Verhalten definiert, das unmittelbar vor der Festschreibung der Navigation stattfinden soll; sie akzeptiert ein [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController)-Objekt als Argument und gibt ein Promise zurück. Diese Funktion wird ausgeführt, bevor die Eigenschaft [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) aktualisiert wurde.
    - `focusReset` {{optional_inline}}
      - : Definiert das Fokusverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Sobald das Promise Ihrer Handler-Funktion aufgelöst wird, fokussiert der Browser das erste Element mit dem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) Attribut oder das {{htmlelement("body")}} Element, wenn kein Element `autofocus` gesetzt hat. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.
    - `scroll` {{optional_inline}}
      - : Definiert das Scrollverhalten der Navigation. Dies kann einen der folgenden Werte annehmen:
        - `after-transition`
          - : Erlaubt dem Browser, das Scrollen zu handhaben, zum Beispiel durch Scrollen zum relevanten Fragmentbezeichner, wenn die URL ein Fragment enthält, oder Wiederherstellen der Scrollposition an der gleichen Stelle wie beim letzten Mal, wenn die Seite neu geladen wird oder eine Seite in der Historie erneut besucht wird. Dies ist der Standardwert.
        - `manual`
          - : Deaktiviert das Standardverhalten.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist oder wenn die Navigation abgebrochen wurde.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das Ereignis durch einen [`dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) Aufruf und nicht durch den Benutzeragenten ausgelöst wurde.
    - Die Navigation nicht abgefangen werden kann ([`NavigateEvent.canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) ist `false`).
    - Ein `precommitHandler()` Callback bei einem nicht abbrechbaren Ereignis bereitgestellt wird ([`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ist `false`).

## Beschreibung

Die `intercept()`-Methode wird verwendet, um gleichseitiges (SPA) Navigationsverhalten zu implementieren, wenn eine Navigation auftritt; zum Beispiel, wenn ein Link angeklickt wird, ein Formular abgeschickt wird oder eine programmatische Navigation initiiert wird (mithilfe von [`History.pushState()`](/de/docs/Web/API/History/pushState), [`Window.location`](/de/docs/Web/API/Window/location), etc.).

Dies geschieht durch ein paar verschiedene Callbacks, `handler()` und `precommitHandler()`.

### Umgang mit unmittelbaren Navigationen mit `handler()`

Der `handler()`-Callback wird als Reaktion auf eine bestätigte Navigation ausgeführt. Er läuft, nachdem die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) Eigenschaft aktualisiert wurde, was bedeutet, dass eine neue URL in der Benutzeroberfläche des Browsers angezeigt wird und die Historie mit einem neuen Eintrag aktualisiert wird.

Ein typisches Beispiel sieht so aus und ermöglicht es, speziellen Inhalt zu rendern und zu laden als Reaktion auf eine bestimmte Navigation:

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

`handler()` sollte verwendet werden, um Navigationsverhalten zu implementieren, bei dem die Navigation bestätigt wird: der Benutzer sollte etwas Neues sehen.

### Umgang mit Vorbereitungsaktionen mit `precommitHandler()`

Es könnte jedoch auch gewünscht sein, eine laufende Navigation zu ändern oder abzubrechen, oder Arbeiten während der Navigation auszuführen, bevor sie bestätigt wird. Dieses Szenario kann mit dem `precommitHandler()`-Callback behandelt werden, das ausgeführt wird, bevor die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry) Eigenschaft aktualisiert und die neue Position in der Browser-Oberfläche angezeigt wird.

Zum Beispiel, wenn der Benutzer zu einer eingeschränkten Seite navigiert und nicht angemeldet ist, möchten Sie möglicherweise den Browser zu einer Anmeldeseite umleiten. Dies kann so behandelt werden:

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

Dieses Muster ist einfacher als die Alternative, die ursprüngliche Navigation abzubrechen und eine neue zur Umleitungsseite zu starten, da es den Zwischenzustand nicht offenlegt. Zum Beispiel wird nur ein [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) oder [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) Ereignis ausgelöst, und wenn die Navigation durch einen Aufruf von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) ausgelöst wurde, wird das Promise erst erfüllt, wenn das Umleitungsziel erreicht ist.

Der `precommitHandler()`-Callback nimmt ein [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController) Objekt als Argument, das eine [`redirect()`](/de/docs/Web/API/NavigationPrecommitController/redirect)-Methode enthält. Die `redirect()`-Methode nimmt zwei Parameter — einen String, der die URL angibt, zu der umgeleitet werden soll, und optional ein Optionsobjekt, das den Zustand und das Historienverhalten spezifizieren kann.

`precommitHandler()` behandelt in der Regel alle Änderungen am Navigationsverhalten, die erforderlich sind, bevor die Ziel-URL tatsächlich im Browser angezeigt wird, sie entweder abbrechend oder an einen anderen Ort umleitend.

> [!NOTE]
> Da `precommitHandler()` verwendet werden kann, um Navigationen abzubrechen, funktioniert es nur wie erwartet, wenn die [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) Eigenschaft des Ereignisses `true` ist. Ein Aufruf von `intercept()` mit einem `precommitHandler()` bei einem nicht abbrechbaren Ereignis führt zu einem `SecurityError`.

### Planung von Nachbereitungsaktionen im `precommitHandler()`

Wie wir oben gesehen haben, können Sie ein `handler()`-Callback in dem Objekt angeben, das an die `intercept()`-Methode übergeben wird, um Aktionen auszuführen, nachdem eine Navigation bestätigt wurde.
Dieser Ansatz funktioniert gut, wenn die Aktionen, die nach der Bestätigung benötigt werden, nicht von Aktionen abhängen, die in der Vorbereitungsphase ausgeführt wurden.
Wenn sie es tun, können Sie [`NavigationPrecommitController.addHandler()`](/de/docs/Web/API/NavigationPrecommitController/addHandler) im `precommitHandler()` verwenden, um einen Handler dynamisch hinzuzufügen, der nach der Bestätigung der Navigation ausgeführt wird.

Betrachten Sie zum Beispiel diesen Code, der das vorherige Beispiel für das Umleiten eines nicht angemeldeten Benutzers zu einer Anmeldeseite erweitert.
Der Code verwendet `addHandler()`, um einen Callback-Handler nach der Bestätigung hinzuzufügen, der eine Nachricht zeigt, die den Grund für die Umleitung erklärt.
Beachten Sie, dass der Handler nur für den spezifischen Fall einer Umleitung zur Anmeldeseite ausgeführt wird.

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

### Reaktion auf erfolgreichen oder fehlgeschlagenen Navigation

Wenn die von den `intercept()`-Handler-Funktionen zurückgegebenen Promises erfüllt werden, wird das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis des `Navigation`-Objekts ausgelöst, was Ihnen erlaubt, Aufräumaktionen nach Abschluss einer erfolgreichen Navigation auszuführen. Wenn diese Promises zurückgewiesen werden, was bedeutet, dass die Navigation fehlgeschlagen ist, wird [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) stattdessen ausgelöst, was Ihnen erlaubt, den Fehlerfall elegant zu handhaben.

Es gibt auch eine `finished`-Eigenschaft im Rückgabewert von Navigationsmethoden (wie [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), die gleichzeitig erfüllt oder zurückgewiesen wird, wenn die oben genannten Ereignisse ausgelöst werden, was einen weiteren Weg zur Handhabung der Erfolgs- und Fehlerfälle bietet.

### Interaktion zwischen `precommitHandler()` und `handler()`

Beide `precommitHandler()` und `handler()`-Callbacks können innerhalb des gleichen `intercept()`-Aufrufs enthalten sein. In solchen Fällen folgt die Reihenfolge der Operationen wie folgt:

1. Zuerst läuft der `precommitHandler()`-Handler.
   - Wenn das `precommitHandler()`-Promise erfüllt wird, wird die Navigation bestätigt.
   - Wenn das `precommitHandler()` zurückgewiesen wird, wird das `navigateerror` Ereignis ausgelöst, die `committed` und `finished` Promises werden zurückgewiesen, und die Navigation wird abgebrochen.

2. Wenn die Navigation bestätigt wird, wird ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) für die Navigation erstellt, und das `committed`-Promise wird erfüllt.

3. Als nächstes läuft das `handler()`-Promise.
   - Wenn das `handler()`-Promise erfüllt wird und das `navigatesuccess`-Ereignis ausgelöst wird, wird das `finished`-Promise ebenfalls erfüllt, um anzuzeigen, dass die Navigation abgeschlossen ist.
   - Wenn `handler()` zurückgewiesen wird, wird das `navigateerror`-Ereignis ausgelöst, das `finished`-Promise wird zurückgewiesen, und die Navigation wird abgebrochen.

Beachten Sie, dass der oben genannte Prozess auch über mehrere `intercept()`-Aufrufe auf dem gleichen `NavigateEvent` aufrechterhalten wird, und für `handler()`-Callbacks, die im `precommitHandler()` hinzugefügt wurden.
Alle `precommitHandler()`-Callbacks werden zuerst aufgerufen, und wenn alle davon auflösen, wird die Navigation bestätigt, und alle `handler()`-Callbacks werden aufgerufen.

### Steuerung des Fokusverhaltens

Standardmäßig wird nach einer mit `intercept()` behandelten Navigation der Dokumentfokus auf das erste Element im DOM mit einem [`autofocus`](/de/docs/Web/HTML/Reference/Global_attributes/autofocus) Attribut zurückgesetzt oder, falls kein `autofocus` gesetzt ist, auf das {{htmlelement("body")}} Element. Wenn Sie dieses Verhalten überschreiben möchten, um eine zugänglichere Fokusposition bei der Navigation manuell zu implementieren (zum Beispiel die neue oberste Überschrift), können Sie dies tun, indem Sie die `focusReset`-Option auf `manual` setzen.

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

Nach Abschluss einer `intercept()`-Navigation tritt folgendes Scrollverhalten ein:

- Bei `push` und `replace` Navigationen (siehe [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)) versucht der Browser, zum Fragment zu scrollen, das durch `event.destination.url` gegeben ist. Wenn kein Fragment verfügbar ist, wird die Scrollposition an den Anfang der Seite zurückgesetzt.
- Bei [`traverse`](/de/docs/Web/API/Navigation/traverseTo) und [`reload`](/de/docs/Web/API/Navigation/reload) Navigationen ist das Verhalten ähnlich wie bei `push` und `replace` Navigationen, jedoch verzögert der Browser seine Scroll-Wiederherstellungslogik, bis das `intercept()`-Promise erfüllt wird. Es wird keine Scroll-Wiederherstellung durchgeführt, wenn das Promise zurückgewiesen wird. Wenn der Benutzer während des Übergangs gescrollt hat, wird ebenfalls keine Scroll-Wiederherstellung durchgeführt.

Wenn Sie dieses Verhalten ausschalten möchten, können Sie dies tun, indem Sie die `scroll`-Option auf `manual` setzen.

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

Wenn Sie das oben beschriebene Standard-Scrollverhalten manuell auslösen möchten (vielleicht möchten Sie die Scrollposition frühzeitig auf den Anfang der Seite zurücksetzen, bevor die vollständige Navigation abgeschlossen ist), können Sie dies tun, indem Sie [`NavigateEvent.scroll()`](/de/docs/Web/API/NavigateEvent/scroll) aufrufen.

## Beispiele

### Eine Navigation mit `intercept()` handhaben

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

Die Einreichung von Formularen kann erkannt werden, indem die [`NavigateEvent.formData`](/de/docs/Web/API/NavigateEvent/formData) Eigenschaft abgefragt wird. Das folgende Beispiel verwandelt jede Formulareinreichung in eine, die auf der aktuellen Seite bleibt. In diesem Fall aktualisieren Sie das DOM nicht, daher können Sie jedes Standard-Reset- und Scrollverhalten mit `focusReset` und `scroll` abstellen.

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

- [Moderner client-side-routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
