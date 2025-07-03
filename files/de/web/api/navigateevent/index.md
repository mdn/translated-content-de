---
title: NavigateEvent
slug: Web/API/NavigateEvent
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigateEvent`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) ist das Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis, das ausgelöst wird, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird (dies schließt die Nutzung von [History API](/de/docs/Web/API/History_API)-Funktionen wie [`History.go()`](/de/docs/Web/API/History/go) ein). `NavigateEvent` bietet Zugriff auf Informationen über diese Navigation und ermöglicht es Entwicklern, die Navigation abzufangen und die Navigation selbst zu steuern.

{{InheritanceDiagram}}

## Konstruktor

- [`NavigateEvent()`](/de/docs/Web/API/NavigateEvent/NavigateEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `NavigateEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation abgefangen werden kann, oder `false` andernfalls (z. B. können Sie eine Navigation über mehrere Ursprungsquellen hinweg nicht abfangen).
- [`destination`](/de/docs/Web/API/NavigateEvent/destination) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt zurück, das das Ziel darstellt, zu dem navigiert wird.
- [`downloadRequest`](/de/docs/Web/API/NavigateEvent/downloadRequest) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Dateinamen der Datei zurück, die zum Download angefordert wurde, im Falle einer Download-Navigation (z. B. ein {{htmlelement("a")}}- oder {{htmlelement("area")}}-Element mit einem `download`-Attribut), oder `null` andernfalls.
- [`formData`](/de/docs/Web/API/NavigateEvent/formData) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`FormData`](/de/docs/Web/API/FormData)-Objekt zurück, das die übermittelten Daten im Falle einer `POST`-Formularübermittlung darstellt, oder `null` andernfalls.
- [`hashChange`](/de/docs/Web/API/NavigateEvent/hashChange) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation eine Fragmentnavigation ist (d.h. zu einem Fragmentbezeichner im selben Dokument), oder `false` andernfalls.
- [`hasUAVisualTransition`](/de/docs/Web/API/NavigateEvent/hasUAVisualTransition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn der Benutzeragent eine visuelle Übergang für diese Navigation durchgeführt hat, bevor dieses Ereignis versandt wurde, oder `false` andernfalls.
- [`info`](/de/docs/Web/API/NavigateEvent/info) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den `info`-Datenwert zurück, der von der initiierenden Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), oder `undefined`, wenn keine `info`-Daten übergeben wurden.
- [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.
- [`signal`](/de/docs/Web/API/NavigateEvent/signal) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, welches abgebrochen wird, wenn die Navigation abgebrochen wird (z. B. durch den Benutzer, der den "Stopp"-Button des Browsers drückt, oder wenn eine andere Navigation beginnt und dadurch die laufende abbricht).
- [`sourceElement`](/de/docs/Web/API/NavigateEvent/sourceElement) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Wenn die Navigation durch ein Element initiiert wurde (zum Beispiel durch Klicken auf einen Link), gibt es ein [`Element`](/de/docs/Web/API/Element)-Objekt zurück, das das initiierende Element darstellt.
- [`userInitiated`](/de/docs/Web/API/NavigateEvent/userInitiated) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation vom Benutzer initiiert wurde (z. B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück/Vorwärts"-Schaltflächen des Browsers), oder `false` andernfalls.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) {{Experimental_Inline}}
  - : Fängt diese Navigation ab und verwandelt sie in eine gleichseitige Navigation zur [`destination`](/de/docs/Web/API/NavigationDestination/url)-URL. Es kann eine Handler-Funktion akzeptieren, die definiert, wie sich das Navigationsverhalten verhalten soll, plus `focusReset` und `scroll`-Optionen, um das Verhalten nach Belieben zu steuern.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) {{Experimental_Inline}}
  - : Kann aufgerufen werden, um das browsergesteuerte Scrollverhalten manuell auszulösen, das als Antwort auf die Navigation erfolgt, wenn Sie möchten, dass es passiert, bevor die Navigation abgeschlossen ist.

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

> [!NOTE]
> Bevor die Navigation API verfügbar war, mussten Sie, um etwas Ähnliches zu tun, auf alle Klickereignisse auf Links lauschen, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf ausführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und das würde nicht alle Navigationen handhaben — nur benutzerinitiierte Linkklicks.

### Umgang mit Scrollen mit `scroll()`

In diesem Beispiel zum Abfangen einer Navigation beginnt die `handler()`-Funktion damit, einige Artikelinhalte abzurufen und anzuzeigen, aber danach werden einige sekundäre Inhalte abgerufen und angezeigt. Es macht Sinn, die Seite zu den Hauptinhalten zu scrollen, sobald sie verfügbar sind, damit der Benutzer damit interagieren kann, anstatt zu warten, bis die sekundären Inhalte ebenfalls gerendert sind. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf dazwischen hinzugefügt.

```js
navigation.addEventListener("navigate", (event) => {
  if (shouldNotIntercept(navigateEvent)) return;
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);

        event.scroll();

        const secondaryContent = await getSecondaryContent(url.pathname);
        addSecondaryContent(secondaryContent);
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
- [Live-Demo der Navigation API](https://mdn.github.io/dom-examples/navigation-api/) ([Demo-Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
