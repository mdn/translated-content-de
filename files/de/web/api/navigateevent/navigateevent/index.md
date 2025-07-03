---
title: "NavigateEvent: NavigateEvent() Konstruktor"
short-title: NavigateEvent()
slug: Web/API/NavigateEvent/NavigateEvent
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
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
  - : Ein Objekt, das _zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften besitzt:
    - `canIntercept` {{optional_inline}}
      - : Ein Boolean, der definiert, ob die Navigation abgefangen werden kann oder nicht (z.B. kann man eine Navigation über verschiedene Ursprünge nicht abfangen). Standardwert ist `false`.
    - `destination`
      - : Ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) Objekt, das den Zielort der Navigation darstellt.
    - `downloadRequest` {{optional_inline}}
      - : Der Dateiname der Datei, die im Falle einer Download-Navigation angefordert wird (z.B. ein {{htmlelement("a")}} oder {{htmlelement("area")}} Element mit einem `download` Attribut). Standardwert ist `null`.
    - `formData` {{optional_inline}}
      - : Das [`FormData`](/de/docs/Web/API/FormData) Objekt, das die übermittelten Daten im Falle einer `POST` Formularübermittlung darstellt. Standardwert ist `null`.
    - `hashChange` {{optional_inline}}
      - : Ein Boolean, der definiert, ob es sich bei der Navigation um eine Fragmentnavigation handelt (d.h. zu einem Fragmentbezeichner im selben Dokument). Standardwert ist `false`.
    - `hasUAVisualTransition` {{optional_inline}}
      - : Ein Boolean, der definiert, ob der User-Agent eine visuelle Transition für diese Navigation durchgeführt hat, bevor dieses Ereignis ausgelöst wurde. Standardwert ist `false`.
    - `info` {{optional_inline}}
      - : Der `info` Datenwert, der von der initiierten Navigationsoperation übergeben wurde (z.B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)).
    - `navigationType` {{optional_inline}}
      - : Der Typ der Navigation. Mögliche Werte — `push`, `reload`, `replace` und `traverse`. Standardwert ist `push`.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das abgebrochen wird, wenn die Navigation abgebrochen wird (z.B. durch das Drücken der "Stopp"-Taste im Browser oder durch das Starten einer anderen Navigation, die somit die laufende abbricht).
    - `sourceElement` {{optional_inline}}
      - : Ein [`Element`](/de/docs/Web/API/Element) Objekt, das das auslösende Element darstellt, wenn die Navigation von einem Element initiiert wurde, oder `null`, wenn die Navigation nicht von einem Element initiiert wurde. Standardwert ist `null`.
    - `userInitiated` {{optional_inline}}
      - : Ein Boolean, der definiert, ob die Navigation vom Benutzer initiiert wurde (z.B. durch Klicken auf einen Link, das Absenden eines Formulars oder das Drücken der "Zurück"/"Vorwärts"-Tasten im Browser). Standardwert ist `false`.

### Rückgabewert

Ein neues [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Objekt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `NavigateEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis des Feuerns des [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignisses aufgerufen wird.

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
