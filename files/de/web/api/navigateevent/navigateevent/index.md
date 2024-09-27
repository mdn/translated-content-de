---
title: "NavigateEvent: NavigateEvent() Konstruktor"
short-title: NavigateEvent()
slug: Web/API/NavigateEvent/NavigateEvent
l10n:
  sourceCommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Der **`NavigateEvent()`** Konstruktor erstellt eine neue
[`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Objektinstanz.

## Syntax

```js-nolint
new NavigateEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Im Fall von `NavigateEvent` ist dies immer `navigate`.
- `init`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `canIntercept` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob die Navigation abgefangen werden kann oder nicht (z.B. können Sie keine Cross-Origin-Navigation abfangen). Standardmäßig `false`.
    - `destination`
      - : Ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) Objekt, das den Zielort der Navigation darstellt.
    - `downloadRequest` {{optional_inline}}
      - : Der Dateiname der angeforderten Datei für den Download im Falle einer Download-Navigation (z.B. ein {{htmlelement("a")}} oder {{htmlelement("area")}} Element mit einem `download` Attribut). Standardmäßig `null`.
    - `formData` {{optional_inline}}
      - : Das [`FormData`](/de/docs/Web/API/FormData) Objekt, das die übermittelten Daten im Falle einer `POST` Formularübermittlung darstellt. Standardmäßig `null`.
    - `hashChange` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob es sich bei der Navigation um eine Fragment-Navigation handelt (d.h. zu einem Fragment-Identifier im selben Dokument). Standardmäßig `false`.
    - `info` {{optional_inline}}
      - : Der `info` Datenwert, der von der initiierenden Navigationsoperation übergeben wurde (z.B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)).
    - `navigationType` {{optional_inline}}
      - : Der Typ der Navigation. Mögliche Werte — `push`, `reload`, `replace` und `traverse`. Standardmäßig `push`.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das abgebrochen wird, wenn die Navigation abgebrochen wird (z.B. durch Drücken der "Stop"-Taste des Browsers oder durch Starten einer anderen Navigation, die die laufende beendet).
    - `userInitiated` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob die Navigation vom Benutzer initiiert wurde (z.B. durch Klicken auf einen Link, Einreichen eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Tasten des Browsers). Standardmäßig `false`.

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

- [Moderne client-seitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
