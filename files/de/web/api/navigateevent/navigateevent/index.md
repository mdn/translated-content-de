---
title: "NavigateEvent: NavigateEvent() Konstruktor"
short-title: NavigateEvent()
slug: Web/API/NavigateEvent/NavigateEvent
l10n:
  sourceCommit: 1bd08bc0642029f650d2da7df5fd1baef09148ef
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Der **`NavigateEvent()`**-Konstruktor erstellt eine neue Instanz des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Objekts.

## Syntax

```js-nolint
new NavigateEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt.
- `init`
  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in [`Event()`](/de/docs/Web/API/Event/Event) definiert sind,_ die folgenden Eigenschaften hat:
    - `canIntercept` {{optional_inline}}
      - : Ein Boolescher Wert, der definiert, ob die Navigation abgefangen werden kann oder nicht (z. B. kann eine Cross-Origin-Navigation nicht abgefangen werden). Standardwert ist `false`.
    - `destination`
      - : Ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt, das den Zielort beschreibt, zu dem navigiert wird.
    - `downloadRequest` {{optional_inline}}
      - : Der Dateiname der angeforderten Datei im Falle einer Download-Navigation (z. B. ein {{htmlelement("a")}}- oder {{htmlelement("area")}}-Element mit einem `download`-Attribut). Standardwert ist `null`.
    - `formData` {{optional_inline}}
      - : Das [`FormData`](/de/docs/Web/API/FormData)-Objekt, das die übermittelten Daten bei einer `POST`-Formularübermittlung repräsentiert. Standardwert ist `null`.
    - `hashChange` {{optional_inline}}
      - : Ein Boolescher Wert, der definiert, ob es sich bei der Navigation um eine Fragment-Navigation handelt (d.h. zu einem Fragment-Identifier im selben Dokument). Standardwert ist `false`.
    - `hasUAVisualTransition` {{optional_inline}}
      - : Ein Boolescher Wert, der angibt, ob der User-Agent vor dem Auslösen dieses Ereignisses eine visuelle Transition für diese Navigation durchgeführt hat. Standardwert ist `false`.
    - `info` {{optional_inline}}
      - : Der `info`-Datenwert, der von der auslösenden Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)).
    - `navigationType` {{optional_inline}}
      - : Der Typ der Navigation. Mögliche Werte — `push`, `reload`, `replace` und `traverse`. Standardwert ist `push`.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das abgebrochen wird, wenn die Navigation abgebrochen wird (z. B. durch Betätigung der "Stop"-Taste im Browser oder durch Start einer anderen Navigation, die die laufende Navigation abbricht).
    - `userInitiated` {{optional_inline}}
      - : Ein Boolescher Wert, der definiert, ob die Navigation vom Benutzer initiiert wurde (z. B. durch das Klicken auf einen Link, das Absenden eines Formulars oder das Drücken der "Zurück-/Vorwärts"-Tasten im Browser). Standardwert ist `false`.

### Rückgabewert

Ein neues [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Objekt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `NavigateEvent`-Objekt wird erzeugt, wenn ein Handler als Ergebnis des [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignisses ausgelöst wird.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API-Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
