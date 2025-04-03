---
title: NavigateEvent
slug: Web/API/NavigateEvent
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigateEvent`**-Interface der [Navigation API](/de/docs/Web/API/Navigation_API) ist das Event-Objekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis, welches ausgelöst wird, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) gestartet wird (dies umfasst die Nutzung von [History API](/de/docs/Web/API/History_API)-Funktionen wie [`History.go()`](/de/docs/Web/API/History/go)). `NavigateEvent` bietet Zugriff auf Informationen über diese Navigation und ermöglicht es Entwicklern, den Ablauf der Navigation abzufangen und zu steuern.

{{InheritanceDiagram}}

## Konstruktor

- [`NavigateEvent()`](/de/docs/Web/API/NavigateEvent/NavigateEvent) {{Experimental_Inline}}
  - : Erstellt eine neue `NavigateEvent`-Objektinstanz.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation abgefangen werden kann, oder `false` andernfalls (z. B. können Sie keine Cross-Origin-Navigation abfangen).
- [`destination`](/de/docs/Web/API/NavigateEvent/destination) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt zurück, das das Ziel darstellt, zu dem navigiert wird.
- [`downloadRequest`](/de/docs/Web/API/NavigateEvent/downloadRequest) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Dateinamen der Datei zurück, die zum Herunterladen angefordert wurde, im Falle einer Download-Navigation (z. B. ein {{htmlelement("a")}}- oder {{htmlelement("area")}}-Element mit einem `download`-Attribut) oder `null` andernfalls.
- [`formData`](/de/docs/Web/API/NavigateEvent/formData) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`FormData`](/de/docs/Web/API/FormData)-Objekt zurück, das die übermittelten Daten im Falle einer `POST`-Formularübermittlung darstellt, oder `null` andernfalls.
- [`hashChange`](/de/docs/Web/API/NavigateEvent/hashChange) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es sich um eine Fragment-Navigation handelt (d.h. zu einem Fragment-Identifikator im selben Dokument), oder `false` andernfalls.
- [`hasUAVisualTransition`](/de/docs/Web/API/NavigateEvent/hasUAVisualTransition) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn der User Agent eine visuelle Transition für diese Navigation durchgeführt hat, bevor dieses Ereignis ausgelöst wurde, oder `false` andernfalls.
- [`info`](/de/docs/Web/API/NavigateEvent/info) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den `info`-Datenwert zurück, der durch die initiierende Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), oder `undefined`, wenn keine `info`-Daten übergeben wurden.
- [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.
- [`signal`](/de/docs/Web/API/NavigateEvent/signal) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das abgebrochen wird, wenn die Navigation abgebrochen wird (z. B., wenn der Benutzer die "Stop"-Taste des Browsers drückt oder eine andere Navigation startet und somit die laufende abbricht).
- [`userInitiated`](/de/docs/Web/API/NavigateEvent/userInitiated) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation vom Benutzer initiiert wurde (z. B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Tasten des Browsers), oder `false` andernfalls.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) {{Experimental_Inline}}
  - : Fängt diese Navigation ab und wandelt sie in eine indokumentariologische Navigation zur [`destination`](/de/docs/Web/API/NavigationDestination/url)-URL um. Es kann eine Handler-Funktion akzeptieren, die definiert, wie das Navigationsverhalten aussehen soll, plus `focusReset`- und `scroll`-Optionen, um das Verhalten nach Wunsch zu steuern.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) {{Experimental_Inline}}
  - : Kann aufgerufen werden, um das browsergesteuerte Scroll-Verhalten, das als Reaktion auf die Navigation auftritt, manuell auszulösen, wenn Sie möchten, dass es vor Abschluss der Navigationsverarbeitung geschieht.

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

> [!NOTE]
> Bevor die Navigation API verfügbar war, mussten Sie, um etwas Ähnliches zu tun, alle Klickereignisse auf Links überwachen, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und das würde nicht alle Navigationsarten abdecken — nur benutzerinitiierte Linkklicks.

### Umgang mit Scrollen mittels `scroll()`

In diesem Beispiel einer abgefangenen Navigation beginnt die `handler()`-Funktion mit dem Abrufen und Rendern einiger Artikelinhalte, um anschließend einige sekundäre Inhalte abzurufen und zu rendern. Es ist sinnvoll, die Seite auf den Hauptartikelinhalt zu scrollen, sobald dieser verfügbar ist, damit der Benutzer damit interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte gerendert sind. Um dies zu erreichen, haben wir zwischen den beiden einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf hinzugefügt.

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

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)
