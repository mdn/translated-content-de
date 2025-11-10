---
title: NavigateEvent
slug: Web/API/NavigateEvent
l10n:
  sourceCommit: 602754279b511738a24c27adbdaccd5471185615
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`NavigateEvent`**-Schnittstelle der [Navigation API](/de/docs/Web/API/Navigation_API) ist das Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis, das ausgelöst wird, wenn eine [beliebige Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird (dies umfasst die Nutzung von [History API](/de/docs/Web/API/History_API)-Funktionen wie [`History.go()`](/de/docs/Web/API/History/go)). `NavigateEvent` bietet Zugang zu Informationen über diese Navigation und ermöglicht Entwicklern, die Navigation abzufangen und zu steuern.

{{InheritanceDiagram}}

## Konstruktor

- [`NavigateEvent()`](/de/docs/Web/API/NavigateEvent/NavigateEvent) {{Experimental_Inline}}
  - : Erstellt eine neue `NavigateEvent`-Objektinstanz.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation abgefangen werden kann, oder `false` andernfalls (z. B. kann eine Cross-Origin-Navigation nicht abgefangen werden).
- [`destination`](/de/docs/Web/API/NavigateEvent/destination) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt zurück, das das Ziel der Navigation darstellt.
- [`downloadRequest`](/de/docs/Web/API/NavigateEvent/downloadRequest) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Dateinamen der angeforderten Datei zum Herunterladen zurück, im Falle einer Download-Navigation (z. B. ein {{htmlelement("a")}}- oder {{htmlelement("area")}}-Element mit einem `download`-Attribut), oder `null` andernfalls.
- [`formData`](/de/docs/Web/API/NavigateEvent/formData) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`FormData`](/de/docs/Web/API/FormData)-Objekt zurück, das die übermittelten Daten im Falle einer `POST`-Formularübermittlung darstellt, oder `null` andernfalls.
- [`hashChange`](/de/docs/Web/API/NavigateEvent/hashChange) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation eine Fragmentnavigation ist (d.h. zu einem Fragment-Identifier im selben Dokument), oder `false` andernfalls.
- [`hasUAVisualTransition`](/de/docs/Web/API/NavigateEvent/hasUAVisualTransition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn der User Agent für diese Navigation eine visuelle Übergangsanimation durchgeführt hat, bevor dieses Ereignis ausgelöst wurde, oder `false` andernfalls.
- [`info`](/de/docs/Web/API/NavigateEvent/info) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den `info`-Datenwert zurück, der von der auslösenden Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), oder `undefined`, wenn keine `info`-Daten übergeben wurden.
- [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.
- [`signal`](/de/docs/Web/API/NavigateEvent/signal) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das abgebrochen wird, wenn die Navigation abgebrochen wird (z. B. durch das Drücken der "Stopp"-Taste im Browser oder das Starten einer anderen Navigation, die die laufende somit abbricht).
- [`sourceElement`](/de/docs/Web/API/NavigateEvent/sourceElement) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Wenn die Navigation durch ein Element initiiert wurde (zum Beispiel durch Klicken auf einen Link), gibt ein [`Element`](/de/docs/Web/API/Element)-Objekt das auslösende Element zurück.
- [`userInitiated`](/de/docs/Web/API/NavigateEvent/userInitiated) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation vom Benutzer initiiert wurde (z. B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Tasten im Browser), oder `false` andernfalls.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) {{Experimental_Inline}}
  - : Fängt diese Navigation ab und konvertiert sie in eine gleiche Dokumentnavigation zur [`destination`](/de/docs/Web/API/NavigationDestination/url)-URL. Es kann Handler-Funktionen annehmen, die das Navigationsverhalten definieren sollen, sowie `focusReset`- und `scroll`-Optionen, um das Standard-Fokus- und Scrollverhalten des Browsers nach Wunsch zu aktivieren oder zu deaktivieren.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) {{Experimental_Inline}}
  - : Kann aufgerufen werden, um das browsergesteuerte Scrollverhalten manuell auszulösen, das als Reaktion auf die Navigation auftritt, wenn Sie möchten, dass es geschieht, bevor die Navigation abgeschlossen ist.

## Beispiele

### Umgang mit einer Navigation unter Verwendung von `intercept()`

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
> Bevor die Navigation API verfügbar war, musste etwas Ähnliches durchgeführt werden, indem alle Klickereignisse auf Links überwacht, `e.preventDefault()` ausgeführt, der entsprechende [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf durchgeführt und die Seitenansicht basierend auf der neuen URL eingerichtet wurde. Und dies würde nicht alle Navigationen behandeln — nur von Benutzern initiierte Link-Klicks.

### Umgang mit Scrolling unter Verwendung von `scroll()`

In diesem Beispiel des Abfangens einer Navigation beginnt die `handler()`-Funktion damit, einige Artikelinhalte abzurufen und anzuzeigen, holt und rendert jedoch danach einige sekundäre Inhalte. Es ergibt Sinn, die Seite zu den Hauptartikelinhalten zu scrollen, sobald diese verfügbar sind, damit der Benutzer damit interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte gerendert sind. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf zwischen den beiden hinzugefügt.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demoquelle anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
