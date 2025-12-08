---
title: NavigateEvent
slug: Web/API/NavigateEvent
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`NavigateEvent`**-Schnittstelle der [Navigation API](/de/docs/Web/API/Navigation_API) ist das Ereignisobjekt für das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis, das ausgelöst wird, wenn [jede Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird (einschließlich der Nutzung von [History API](/de/docs/Web/API/History_API)-Funktionen wie [`History.go()`](/de/docs/Web/API/History/go)). `NavigateEvent` bietet Zugriff auf Informationen über diese Navigation und ermöglicht es Entwicklern, die Navigation zu unterbrechen und zu steuern.

{{InheritanceDiagram}}

## Konstruktor

- [`NavigateEvent()`](/de/docs/Web/API/NavigateEvent/NavigateEvent)
  - : Erstellt eine neue Instanz eines `NavigateEvent`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`canIntercept`](/de/docs/Web/API/NavigateEvent/canIntercept) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Navigation abgefangen werden kann, oder `false`, andernfalls (z. B. können Sie eine DOM-Grenzen überschreitende Navigation nicht abfangen).
- [`destination`](/de/docs/Web/API/NavigateEvent/destination) {{ReadOnlyInline}}
  - : Gibt ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt zurück, das das Ziel repräsentiert, zu dem navigiert wird.
- [`downloadRequest`](/de/docs/Web/API/NavigateEvent/downloadRequest) {{ReadOnlyInline}}
  - : Gibt den Dateinamen der angeforderten Datei für den Download zurück, im Falle einer Download-Navigation (z. B. ein {{htmlelement("a")}}- oder {{htmlelement("area")}}-Element mit einem `download`-Attribut) oder `null`, andernfalls.
- [`formData`](/de/docs/Web/API/NavigateEvent/formData) {{ReadOnlyInline}}
  - : Gibt das [`FormData`](/de/docs/Web/API/FormData)-Objekt zurück, das die übermittelten Daten im Falle einer `POST`-Formularübermittlung repräsentiert, oder `null` andernfalls.
- [`hashChange`](/de/docs/Web/API/NavigateEvent/hashChange) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Navigation eine Fragment-Navigation ist (d.h. zu einem Fragmentbezeichner im selben Dokument), andernfalls `false`.
- [`hasUAVisualTransition`](/de/docs/Web/API/NavigateEvent/hasUAVisualTransition) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der User-Agent für diese Navigation eine visuelle Übergangsanimation durchgeführt hat, bevor dieses Ereignis ausgelöst wurde, andernfalls `false`.
- [`info`](/de/docs/Web/API/NavigateEvent/info) {{ReadOnlyInline}}
  - : Gibt den `info`-Datumswert zurück, der von der initiierenden Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)), oder `undefined`, wenn keine `info`-Daten übergeben wurden.
- [`navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) {{ReadOnlyInline}}
  - : Gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.
- [`signal`](/de/docs/Web/API/NavigateEvent/signal) {{ReadOnlyInline}}
  - : Gibt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das abgebrochen wird, wenn die Navigation storniert wird (z. B. durch das Drücken der "Stop"-Schaltfläche des Browsers oder durch den Start einer anderen Navigation, die dadurch die laufende Navigation storniert).
- [`sourceElement`](/de/docs/Web/API/NavigateEvent/sourceElement) {{ReadOnlyInline}}
  - : Wenn die Navigation durch ein Element initiiert wurde (zum Beispiel durch Klicken auf einen Link), wird ein [`Element`](/de/docs/Web/API/Element)-Objekt zurückgegeben, das das initiierende Element repräsentiert.
- [`userInitiated`](/de/docs/Web/API/NavigateEvent/userInitiated) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Navigation vom Benutzer initiiert wurde (z. B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Schaltflächen des Browsers), andernfalls `false`.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Event`](/de/docs/Web/API/Event)._

- [`intercept()`](/de/docs/Web/API/NavigateEvent/intercept)
  - : Fängt diese Navigation ab und verwandelt sie in eine Navigation innerhalb des Dokuments zur [`destination`](/de/docs/Web/API/NavigationDestination/url) URL. Es kann Handler-Funktionen akzeptieren, die das gewünschte Navigationsverhalten definieren, sowie `focusReset`- und `scroll`-Optionen, um das standardmäßige Fokussierungs- und Scroll-Verhalten des Browsers nach Wunsch zu aktivieren oder zu deaktivieren.
- [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)
  - : Kann aufgerufen werden, um das browsergesteuerte Scroll-Verhalten manuell auszulösen, das als Reaktion auf die Navigation auftritt, falls Sie es vor Abschluss der Navigation aktivieren möchten.

## Beispiele

### Bearbeiten einer Navigation mit `intercept()`

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
> Bevor die Navigation API verfügbar war, mussten Sie, um etwas Ähnliches zu tun, alle Klickereignisse auf Links überwachen, `e.preventDefault()` ausführen, den entsprechenden [`History.pushState()`](/de/docs/Web/API/History/pushState)-Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Dies würde jedoch nicht alle Navigationsvorgänge abdecken – nur die vom Benutzer initiierten Link-Klicks.

### Scrollen mit `scroll()` bearbeiten

In diesem Beispiel der Abfangung einer Navigation beginnt die `handler()`-Funktion mit dem Abrufen und Rendern von einigen Artikelinhalten, rendern danach jedoch einige sekundäre Inhalte. Es ist sinnvoll, die Seite so schnell wie möglich zum Hauptartikelinhalt zu scrollen, damit der Benutzer damit interagieren kann, anstatt zu warten, bis auch die sekundären Inhalte gerendert sind. Um dies zu erreichen, haben wir einen [`scroll()`](/de/docs/Web/API/NavigateEvent/scroll)-Aufruf zwischen den beiden hinzugefügt.

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
- [Navigation API Live-Demo](https://mdn.github.io/dom-examples/navigation-api/) ([Demo-Quelltext anzeigen](https://github.com/mdn/dom-examples/tree/main/navigation-api))
