---
title: NavigateEvent
slug: Web/API/NavigateEvent
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Navigation API")}}

Die Schnittstelle **`NavigateEvent`** des [Navigation API](/de/docs/Web/API/Navigation_API) ist das Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis, das ausgelöst wird, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird (dies schließt die Verwendung von [History API](/de/docs/Web/API/History_API)-Funktionen wie [`History.go()`](/de/docs/Web/API/History/go) ein). `NavigateEvent` bietet Zugriff auf Informationen über diese Navigation und ermöglicht es Entwicklern, die Navigation abzufangen und zu steuern.

{{InheritanceDiagram}}

## Konstruktor

- [`NavigateEvent()`](/de/docs/Web/API/NavigateEvent/NavigateEvent)
  - : Erstellt eine neue `NavigateEvent` Objektinstanz.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Navigation abgefangen werden kann, oder `false` andernfalls (z. B. kann eine Cross-Origin-Navigation nicht abgefangen werden).
- [`destination`](/de/docs/Web/API/NavigateEvent/destination) {{ReadOnlyInline}}
  - : Gibt ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) Objekt zurück, das das Ziel darstellt, zu dem navigiert wird.
- [`downloadRequest`](/de/docs/Web/API/NavigateEvent/downloadRequest) {{ReadOnlyInline}}
  - : Gibt den Dateinamen der Datei zurück, die für den Download angefordert wird, im Falle einer Download-Navigation (z. B. ein {{htmlelement("a")}} oder {{htmlelement("area")}} Element mit einem `download` Attribut), oder `null` andernfalls.
- [`formData`](/de/docs/Web/API/NavigateEvent/formData) {{ReadOnlyInline}}
  - : Gibt das [`FormData`](/de/docs/Web/API/FormData) Objekt zurück, das die übermittelten Daten im Falle einer `POST` Formularübermittlung darstellt, oder `null` andernfalls.
- [`hashChange`](/de/docs/Web/API/NavigateEvent/hashChange) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Navigation eine Fragmentnavigation ist (d.h. zu einem Fragment-Identifier im selben Dokument), oder `false` andernfalls.
- [`hasUAVisualTransition`](/de/docs/Web/API/NavigateEvent/hasUAVisualTransition) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der User-Agent vor der Auslösung dieses Ereignisses eine visuelle Transition für diese Navigation durchgeführt hat, oder `false` andernfalls.
- [`info`](/de/docs/Web/API/NavigateEvent/info) {{ReadOnlyInline}}
  - : Gibt den `info`-Datenwert zurück, der von der auslösenden Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), oder `undefined`, wenn keine `info`-Daten übergeben wurden.
- [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) {{ReadOnlyInline}}
  - : Gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.
- [`signal`](/de/docs/Web/API/NavigateEvent/signal) {{ReadOnlyInline}}
  - : Gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das abgebrochen wird, wenn die Navigation abgebrochen wird (z. B. wenn der Benutzer die "Stop"-Taste des Browsers drückt oder eine andere Navigation beginnt und somit die laufende abbricht).
- [`sourceElement`](/de/docs/Web/API/NavigateEvent/sourceElement) {{ReadOnlyInline}}
  - : Wenn die Navigation von einem Element initiiert wurde (zum Beispiel durch Klicken auf einen Link), gibt ein [`Element`](/de/docs/Web/API/Element) Objekt zurück, das das auslösende Element darstellt.
- [`userInitiated`](/de/docs/Web/API/NavigateEvent/userInitiated) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Navigation vom Benutzer initiiert wurde (z. B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Tasten des Browsers), oder `false` andernfalls.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept)
  - : Fängt diese Navigation ab und wandelt sie in eine Dokument-interne Navigation zur [`destination`](/de/docs/Web/API/NavigationDestination/url) URL um. Es können Handler-Funktionen übergeben werden, die definieren, wie das Navigationsverhalten sein soll, sowie `focusReset` und `scroll` Optionen, um das standardmäßige Fokus- und Scroll-Verhalten des Browsers nach Bedarf zu aktivieren oder zu deaktivieren.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)
  - : Kann aufgerufen werden, um das browsergesteuerte Scroll-Verhalten manuell auszulösen, das als Reaktion auf die Navigation erfolgt, wenn Sie möchten, dass es geschieht, bevor das Navigationshandling abgeschlossen ist.

## Beispiele

### Navigation mit `intercept()` handhaben

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
> Bevor das Navigation API verfügbar war, musste man für eine ähnliche Funktionalität alle Klick-Ereignisse auf Links überwachen, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState) Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und dies hätte nicht alle Navigationen gehandhabt — nur vom Benutzer initiierte Linkklicks.

### Scrollen mit `scroll()` handhaben

In diesem Beispiel einer abgefangenen Navigation beginnt die `handler()`-Funktion damit, einige Artikelinhalte zu laden und darzustellen, aber es werden anschließend noch einige sekundäre Inhalte geladen und dargestellt. Es macht Sinn, sofort an den Hauptartikelinhalt zu scrollen, sobald er verfügbar ist, damit der Benutzer mit ihm interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte gerendert sind. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) Aufruf zwischen den beiden hinzugefügt.

```js
navigation.addEventListener("navigate", (event) => {
  if (shouldNotIntercept(event)) return;
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

- [Moderne clientseitige Routenführung: das Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demo-Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
