---
title: NavigateEvent
slug: Web/API/NavigateEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`NavigateEvent`**-Schnittstelle der {{domxref("Navigation API", "Navigation API", "", "nocode")}} ist das Ereignisobjekt für das {{domxref("Navigation/navigate_event", "navigate")}}-Ereignis, welches ausgelöst wird, wenn [eine beliebige Art von Navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) initiiert wird (dies schließt die Verwendung von {{domxref("History API", "History API", "", "nocode")}}-Funktionen wie {{domxref("History.go()")}} ein). `NavigateEvent` bietet Zugriff auf Informationen über diese Navigation und ermöglicht es Entwicklern, das Navigationshandling abzufangen und zu steuern.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("NavigateEvent.NavigateEvent", "NavigateEvent()")}} {{Experimental_Inline}}
  - : Erstellt eine neue Instanz des `NavigateEvent`-Objekts.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("Event")}}._

- {{domxref("NavigateEvent.canIntercept", "canIntercept")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation abgefangen werden kann, oder `false`, wenn nicht (zum Beispiel kann eine Cross-Origin-Navigation nicht abgefangen werden).
- {{domxref("NavigateEvent.destination", "destination")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("NavigationDestination")}}-Objekt zurück, das das Ziel der Navigation darstellt.
- {{domxref("NavigateEvent.downloadRequest", "downloadRequest")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Dateinamen der angeforderten Datei im Falle einer Download-Navigation zurück (z. B. bei einem {{htmlelement("a")}} oder {{htmlelement("area")}}-Element mit einem `download`-Attribut), oder `null` andernfalls.
- {{domxref("NavigateEvent.formData", "formData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das {{domxref("FormData")}}-Objekt zurück, das die übermittelten Daten im Falle einer `POST`-Formularübermittlung darstellt, oder `null` andernfalls.
- {{domxref("NavigateEvent.hashChange", "hashChange")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn es sich um eine Fragmentnavigation handelt (d. h. zu einem Fragmentbezeichner im selben Dokument), oder `false` andernfalls.
- {{domxref("NavigateEvent.info", "info")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den `info`-Datensatz zurück, der von der initiierenden Navigationsoperation übergeben wurde (z. B. {{domxref("Navigation.back()")}} oder {{domxref("Navigation.navigate()")}}), oder `undefined`, wenn keine `info`-Daten übergeben wurden.
- {{domxref("NavigateEvent.navigationType", "navigationType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ der Navigation zurück — `push`, `reload`, `replace` oder `traverse`.
- {{domxref("NavigateEvent.signal", "signal")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("AbortSignal")}} zurück, das abgebrochen wird, wenn die Navigation abgebrochen wird (z. B. durch das Drücken der "Stopp"-Taste des Browsers oder das Starten einer anderen Navigation, die die laufende Navigation somit abbricht).
- {{domxref("NavigateEvent.userInitiated", "userInitiated")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn die Navigation vom Benutzer initiiert wurde (z. B. durch Anklicken eines Links, das Absenden eines Formulars oder das Drücken der "Zurück"/"Vorwärts"-Tasten des Browsers), oder `false` andernfalls.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{DOMxRef("Event")}}._

- {{domxref("NavigateEvent.intercept", "intercept()")}} {{Experimental_Inline}}
  - : Fängt diese Navigation ab und verwandelt sie in eine gleichseitige Navigation zur {{domxref("NavigationDestination.url", "destination")}} URL. Es kann eine Handlerfunktion akzeptieren, die definiert, wie das Navigationsverhalten sein soll, sowie `focusReset`- und `scroll`-Optionen, um das Verhalten nach Wunsch zu steuern.
- {{domxref("NavigateEvent.scroll", "scroll()")}} {{Experimental_Inline}}
  - : Kann aufgerufen werden, um das vom Browser gesteuerte Scrollverhalten, das als Reaktion auf die Navigation auftritt, manuell auszulösen, wenn Sie möchten, dass es vor dem Abschluss des Navigationshandlings geschieht.

## Beispiele

### Verarbeitung einer Navigation mit `intercept()`

```js
navigation.addEventListener("navigate", (event) => {
  // Gehe frühzeitig zurück, wenn diese Navigation nicht abgefangen werden soll,
  // z. B. wenn die Navigation Cross-Origin oder eine Download-Anfrage ist
  if (shouldNotIntercept(event)) return;

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // Die URL hat sich bereits geändert, also zeigen Sie einen Platzhalter an, während
        // der neuen Inhalt abrufbar ist, z. B. einen Spinner oder eine Ladeanzeige
        renderArticlePagePlaceholder();

        // Rufen Sie den neuen Inhalt ab und zeigen Sie ihn an, sobald er verfügbar ist
        const articleContent = await getArticleContent(url.pathname);
        renderArticlePage(articleContent);
      },
    });
  }
});
```

> [!NOTE]
> Bevor die Navigation API verfügbar war, musste man, um etwas Ähnliches zu erreichen, alle Klickereignisse auf Links überwachen, `e.preventDefault()` ausführen, den entsprechenden {{domxref("History.pushState()")}}-Aufruf durchführen und dann die Seitenansicht basierend auf der neuen URL einrichten. Und dies würde nicht alle Navigationsvorgänge behandeln — nur vom Benutzer initiierte Linkklicks.

### Scrollen mit `scroll()` behandeln

In diesem Beispiel des Abfangens einer Navigation beginnt die `handler()`-Funktion mit dem Abrufen und Rendern von einigen Artikelinhalten, und danach werden einige sekundäre Inhalte abgerufen und angezeigt. Es macht Sinn, die Seite auf die Hauptartikelinhalte zu scrollen, sobald diese verfügbar sind, damit der Benutzer damit interagieren kann, anstatt darauf zu warten, dass auch die sekundären Inhalte gerendert werden. Um dies zu erreichen, haben wir einen {{domxref("NavigateEvent.scroll", "scroll()")}}-Aufruf zwischen den beiden eingefügt.

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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erklärung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
