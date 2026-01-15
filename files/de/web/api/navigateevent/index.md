---
title: NavigateEvent
slug: Web/API/NavigateEvent
l10n:
  sourceCommit: c003d1aa42ba81ef07be3d65e5000a3a91fe1249
---

{{APIRef("Navigation API")}}

Das **`NavigateEvent`** Interface der [Navigation API](/de/docs/Web/API/Navigation_API) ist das Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis, das ausgelöst wird, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird (dies schließt die Verwendung von [History API](/de/docs/Web/API/History_API) Funktionen wie [`History.go()`](/de/docs/Web/API/History/go) ein). `NavigateEvent` bietet Zugriff auf Informationen über diese Navigation und ermöglicht es Entwicklern, den Navigationsvorgang abzufangen und zu steuern.

{{InheritanceDiagram}}

## Konstruktor

- [`NavigateEvent()`](/de/docs/Web/API/NavigateEvent/NavigateEvent)
  - : Erstellt eine neue Instanz des `NavigateEvent` Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Navigation abgefangen werden kann, oder `false` sonst (z. B. kann eine Navigation über verschiedene Herkunftsgebiete nicht abgefangen werden).
- [`destination`](/de/docs/Web/API/NavigateEvent/destination) {{ReadOnlyInline}}
  - : Gibt ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) Objekt zurück, das das Ziel der Navigation repräsentiert.
- [`downloadRequest`](/de/docs/Web/API/NavigateEvent/downloadRequest) {{ReadOnlyInline}}
  - : Gibt den Dateinamen der angeforderten Datei für den Download zurück, im Falle einer Download-Navigation (z. B. ein {{htmlelement("a")}} oder {{htmlelement("area")}} Element mit einem `download` Attribut), oder `null` sonst.
- [`formData`](/de/docs/Web/API/NavigateEvent/formData) {{ReadOnlyInline}}
  - : Gibt das [`FormData`](/de/docs/Web/API/FormData) Objekt zurück, das die übermittelten Daten im Falle einer `POST`-Formularübertragung repräsentiert, oder `null` sonst.
- [`hashChange`](/de/docs/Web/API/NavigateEvent/hashChange) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn es sich um eine Fragmentnavigation handelt (d.h. zu einem Fragmentbezeichner im selben Dokument), oder `false` sonst.
- [`hasUAVisualTransition`](/de/docs/Web/API/NavigateEvent/hasUAVisualTransition) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Benutzeragent eine visuelle Übergangsnavigation durchgeführt hat, bevor dieses Ereignis ausgelöst wurde, oder `false` sonst.
- [`info`](/de/docs/Web/API/NavigateEvent/info) {{ReadOnlyInline}}
  - : Gibt die `info`-Datendaten zurück, die durch den initiierenden Navigationsvorgang übermittelt wurden (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), oder `undefined`, wenn keine `info`-Daten übermittelt wurden.
- [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) {{ReadOnlyInline}}
  - : Gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.
- [`signal`](/de/docs/Web/API/NavigateEvent/signal) {{ReadOnlyInline}}
  - : Gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das abgebrochen wird, wenn die Navigation abgebrochen wird (z. B. durch Drücken der "Stop"-Taste des Browsers oder durch Beginn einer neuen Navigation, die die laufende Navigation abbricht).
- [`sourceElement`](/de/docs/Web/API/NavigateEvent/sourceElement) {{ReadOnlyInline}}
  - : Wenn die Navigation durch ein Element initiiert wurde (zum Beispiel durch Klicken auf einen Link), wird ein [`Element`](/de/docs/Web/API/Element) Objekt zurückgegeben, das das auslösende Element darstellt.
- [`userInitiated`](/de/docs/Web/API/NavigateEvent/userInitiated) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Navigation vom Benutzer initiiert wurde (z. B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Tasten des Browsers), oder `false` sonst.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept)
  - : Fängt diese Navigation ab, indem sie in eine gleiche Dokumentnavigation zur [`destination`](/de/docs/Web/API/NavigationDestination/url) URL umgewandelt wird. Es können Handler-Funktionen übergeben werden, die definieren, wie das Navigationsverhalten aussehen soll, sowie `focusReset` und `scroll` Optionen, um das Standardfokus- und -scrollverhalten des Browsers nach Belieben ein- oder auszuschalten.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)
  - : Kann aufgerufen werden, um das browsergesteuerte Scrollverhalten zu manuell auszulösen, das als Reaktion auf die Navigation auftritt, wenn Sie möchten, dass es passiert, bevor der Navigationsvorgang abgeschlossen ist.

## Beispiele

### Handhabung einer Navigation mit `intercept()`

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
> Bevor die Navigation API verfügbar war, musste man für eine ähnliche Funktionalität alle Klickereignisse auf Links überwachen, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState) Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und dies würde nicht alle Navigationen behandeln — nur Benutzer-initiierten Linkklicks.

### Handhabung des Scrollens mit `scroll()`

In diesem Beispiel der Abfangung einer Navigation beginnt die `handler()` Funktion damit, einige Artikelinhalte abzurufen und darzustellen, lädt aber danach noch sekundäre Inhalte nach. Es ist sinnvoll, die Seite zum Hauptartikelinhalt zu scrollen, sobald dieser verfügbar ist, sodass der Benutzer damit interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte dargestellt sind. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) Aufruf zwischen den beiden eingefügt.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demo-Quellcode anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
