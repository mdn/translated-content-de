---
title: NavigateEvent
slug: Web/API/NavigateEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`NavigateEvent`**-Schnittstelle der [Navigation API](/de/docs/Web/API/Navigation_API) ist das Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis, das ausgelöst wird, wenn [jede Art der Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird (dies schließt die Nutzung von Funktionen der [History API](/de/docs/Web/API/History_API) wie [`History.go()`](/de/docs/Web/API/History/go) ein). `NavigateEvent` bietet Zugriff auf Informationen über diese Navigation und erlaubt Entwicklern, die Navigation zu unterbrechen und zu steuern.

{{InheritanceDiagram}}

## Konstruktor

- [`NavigateEvent()`](/de/docs/Web/API/NavigateEvent/NavigateEvent) {{Experimental_Inline}}
  - : Erstellt eine neue Instanz eines `NavigateEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation abgefangen werden kann, oder `false` andernfalls (z. B. kann eine cross-origin Navigation nicht abgefangen werden).
- [`destination`](/de/docs/Web/API/NavigateEvent/destination) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt zurück, das das Ziel der Navigation darstellt.
- [`downloadRequest`](/de/docs/Web/API/NavigateEvent/downloadRequest) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Dateinamen der angeforderten Datei im Fall einer Download-Navigation zurück (z. B. ein {{htmlelement("a")}}- oder {{htmlelement("area")}}-Element mit einem `download`-Attribut), oder `null` andernfalls.
- [`formData`](/de/docs/Web/API/NavigateEvent/formData) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`FormData`](/de/docs/Web/API/FormData)-Objekt zurück, das die im Fall einer `POST`-Formularübermittlung übermittelten Daten darstellt, oder `null` andernfalls.
- [`hashChange`](/de/docs/Web/API/NavigateEvent/hashChange) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es sich bei der Navigation um eine Fragmentnavigation (d.h. zu einem Fragmentbezeichner im gleichen Dokument) handelt, andernfalls `false`.
- [`info`](/de/docs/Web/API/NavigateEvent/info) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den `info`-Datenwert zurück, der durch die initiierte Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), oder `undefined`, wenn keine `info`-Daten übergeben wurden.
- [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.
- [`signal`](/de/docs/Web/API/NavigateEvent/signal) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das abgebrochen wird, wenn die Navigation storniert wird (z. B. durch das Drücken des "Stop"-Buttons des Browsers, oder eine andere Navigation, die startet und die laufende somit abbricht).
- [`userInitiated`](/de/docs/Web/API/NavigateEvent/userInitiated) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation durch den Benutzer initiiert wurde (z. B. durch Klicken auf einen Link, Senden eines Formulars oder Drücken der "Zurück"/"Vor"-Buttons des Browsers), andernfalls `false`.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept) {{Experimental_Inline}}
  - : Fängt diese Navigation ab und verwandelt sie in eine Navigation im gleichen Dokument zur [`destination`](/de/docs/Web/API/NavigationDestination/url)-URL. Es kann eine Handler-Funktion akzeptieren, die das Verhalten der Navigationsbehandlung definiert, sowie `focusReset`- und `scroll`-Optionen, um das Verhalten nach Bedarf zu steuern.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll) {{Experimental_Inline}}
  - : Kann aufgerufen werden, um das browsergesteuerte Scrollverhalten, das als Reaktion auf die Navigation auftritt, manuell auszulösen, wenn Sie es passieren lassen möchten, bevor die Navigationsbehandlung abgeschlossen ist.

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
> Bevor die Navigation API verfügbar war, müssten Sie alle Klickereignisse auf Links überwachen, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und dies würde nicht alle Navigationen behandeln — nur vom Benutzer initiierte Link-Klicks.

### Handhabung des Scrollens mit `scroll()`

In diesem Beispiel einer abgefangenen Navigation beginnt die `handler()`-Funktion mit dem Abrufen und Rendern einiger Artikelinhalte und ruft dann einige sekundäre Inhalte ab und rendert diese. Es macht Sinn, die Seite auf den Hauptartikel-Inhalt zu scrollen, sobald dieser verfügbar ist, damit der Benutzer damit interagieren kann, anstatt zu warten, bis auch der sekundäre Inhalt gerendert ist. Um dies zu erreichen, haben wir zwischen den beiden einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf hinzugefügt.

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
