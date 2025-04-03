---
title: "NavigateEvent: NavigateEvent() Konstruktor"
short-title: NavigateEvent()
slug: Web/API/NavigateEvent/NavigateEvent
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Der **`NavigateEvent()`** Konstruktor erstellt eine neue Instanz des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Objekts.

## Syntax

```js-nolint
new NavigateEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt.
- `init`
  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in [`Event()`](/de/docs/Web/API/Event/Event) definiert sind_, die folgenden Eigenschaften besitzt:
    - `canIntercept` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob die Navigation abgefangen werden kann oder nicht (z. B. kann man eine Cross-Origin Navigation nicht abfangen). Standardwert ist `false`.
    - `destination`
      - : Ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) Objekt, das den Ort darstellt, zu dem navigiert wird.
    - `downloadRequest` {{optional_inline}}
      - : Der Dateiname der für den Download angeforderten Datei im Falle einer Download-Navigation (z. B. ein {{htmlelement("a")}} oder {{htmlelement("area")}} Element mit einem `download` Attribut). Standardwert ist `null`.
    - `formData` {{optional_inline}}
      - : Das [`FormData`](/de/docs/Web/API/FormData) Objekt, das die übermittelten Daten im Falle einer `POST` Formularübermittlung darstellt. Standardwert ist `null`.
    - `hashChange` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob die Navigation eine Fragment-Navigation ist (d.h. zu einem Fragmentbezeichner im selben Dokument). Standardwert ist `false`.
    - `hasUAVisualTransition` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob der Benutzeragent vor dem Auslösen dieses Ereignisses eine visuelle Transition für diese Navigation durchgeführt hat. Standardwert ist `false`.
    - `info` {{optional_inline}}
      - : Der `info` Datenwert, der von der auslösenden Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)).
    - `navigationType` {{optional_inline}}
      - : Der Typ der Navigation. Mögliche Werte — `push`, `reload`, `replace` und `traverse`. Standardwert ist `push`.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das abgebrochen wird, wenn die Navigation abgebrochen wird (z. B. wenn der Benutzer die "Stop"-Taste des Browsers drückt oder eine andere Navigation gestartet wird und somit die laufende abbricht).
    - `userInitiated` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob die Navigation vom Benutzer initiiert wurde (z. B. durch Klicken auf einen Link, Übermitteln eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Tasten des Browsers). Standardwert ist `false`.

### Rückgabewert

Ein neues [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Objekt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `NavigateEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis des Auslösens des [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignisses aufgerufen wird.

```js
navigation.addEventListener("navigate", (event) => {
  // Exit early if this navigation shouldn't be intercepted,
  // e.g. if the navigation is cross-origin, or a download request
  if (shouldNotIntercept(event)) {
    return;
  }

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
