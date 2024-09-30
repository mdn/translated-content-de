---
title: NavigateEvent
slug: Web/API/NavigateEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Das **`NavigateEvent`**-Interface der [Navigations-API](/de/docs/Web/API/Navigation_API) ist das Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis, das ausgelöst wird, wenn [eine beliebige Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird (dies umfasst die Nutzung von [History-API](/de/docs/Web/API/History_API)-Funktionen wie [`History.go()`](/de/docs/Web/API/History/go)). `NavigateEvent` bietet Zugriff auf Informationen über diese Navigation und ermöglicht es Entwicklern, die Navigation abzufangen und zu steuern.

{{InheritanceDiagram}}

## Konstruktor

- [`NavigateEvent()`](/de/docs/Web/API/NavigateEvent/NavigateEvent) {{Experimental_Inline}}
  - : Erstellt eine neue `NavigateEvent`-Objektinstanz.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation abgefangen werden kann, oder `false` andernfalls (z.B. Sie können keine Cross-Origin-Navigation abfangen).
- [`destination`](/de/docs/Web/API/NavigateEvent/destination) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt zurück, das das Ziel der Navigation darstellt.
- [`downloadRequest`](/de/docs/Web/API/NavigateEvent/downloadRequest) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Dateinamen der heruntergeladenen Datei im Falle einer Download-Navigation zurück (z.B. ein {{htmlelement("a")}}- oder {{htmlelement("area")}}-Element mit einem `download`-Attribut) oder `null` andernfalls.
- [`formData`](/de/docs/Web/API/NavigateEvent/formData) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`FormData`](/de/docs/Web/API/FormData)-Objekt zurück, das die übermittelten Daten im Falle einer `POST`-Formularübertragung darstellt, oder `null` andernfalls.
- [`hashChange`](/de/docs/Web/API/NavigateEvent/hashChange) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es sich bei der Navigation um eine Fragmentnavigation handelt (d.h. zu einem Fragment-Identifikator im selben Dokument), oder `false` andernfalls.
- [`info`](/de/docs/Web/API/NavigateEvent/info) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den `info`-Datenwert zurück, der von der initiierten Navigationsoperation (z.B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)) übergeben wurde, oder `undefined`, wenn keine `info`-Daten übergeben wurden.
- [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.
- [`signal`](/de/docs/Web/API/NavigateEvent/signal) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das abgebrochen wird, wenn die Navigation abgebrochen wird (z.B. durch das Drücken des "Stop"-Schalters im Browser oder eine andere Navigation, die die laufende abbricht).
- [`userInitiated`](/de/docs/Web/API/NavigateEvent/userInitiated) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation vom Benutzer initiiert wurde (z.B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Schaltflächen im Browser) oder `false` andernfalls.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) {{Experimental_Inline}}
  - : Fängt diese Navigation ab und verwandelt sie in eine gleichseitige Dokumentnavigation zur URL des [`destination`](/de/docs/Web/API/NavigationDestination/url). Es kann eine Handlerfunktion akzeptieren, die definiert, wie das Navigationsverhalten sein soll, sowie `focusReset` und `scroll`-Optionen, um das Verhalten nach Bedarf zu steuern.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) {{Experimental_Inline}}
  - : Kann aufgerufen werden, um das browsergesteuerte Scrollverhalten manuell auszulösen, das als Antwort auf die Navigation auftritt, wenn es geschehen soll, bevor die Navigation Verarbeitung abschließt.

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
> Bevor die Navigations-API verfügbar war, musste man, um etwas Ähnliches zu tun, alle Klick-Ereignisse auf Links abhören, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf ausführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und dies würde nicht alle Navigationen abdecken — nur benutzerinitiierte Linkklicks.

### Handhabung von Scrolling mit `scroll()`

In diesem Beispiel des Abfangens einer Navigation beginnt die `handler()`-Funktion damit, einige Artikelinhalte abzurufen und darzustellen, holt dann anschließend einige sekundäre Inhalte und stellt sie dar. Es ist sinnvoll, die Seite zum Hauptartikelinhalt zu scrollen, sobald dieser verfügbar ist, damit der Benutzer mit ihm interagieren kann, anstatt zu warten, bis auch der sekundäre Inhalt dargestellt ist. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf zwischen den beiden hinzugefügt.

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

- [Modernes clientseitiges Routing: die Navigations-API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigations-API-Erklärungsentwurf](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigations-API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
