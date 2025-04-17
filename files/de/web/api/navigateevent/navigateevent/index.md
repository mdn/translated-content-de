---
title: "NavigateEvent: NavigateEvent()-Konstruktor"
short-title: NavigateEvent()
slug: Web/API/NavigateEvent/NavigateEvent
l10n:
  sourceCommit: 1831fa08612cea504bd5abe38126dad46e81c1e4
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Der **`NavigateEvent()`**-Konstruktor erstellt eine neue [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Objektinstanz.

## Syntax

```js-nolint
new NavigateEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Ereignistyp darstellt.
- `init`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften enthält:
    - `canIntercept` {{optional_inline}}
      - : Ein Boolean, der definiert, ob die Navigation abgefangen werden kann oder nicht (z. B. kann man eine Cross-Origin-Navigation nicht abfangen). Standardmäßig `false`.
    - `destination`
      - : Ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt, das den Ort darstellt, zu dem navigiert wird.
    - `downloadRequest` {{optional_inline}}
      - : Der Dateiname der Datei, die im Falle einer Download-Navigation angefordert wird (z. B. ein {{htmlelement("a")}}- oder {{htmlelement("area")}}-Element mit einem `download`-Attribut). Standardmäßig `null`.
    - `formData` {{optional_inline}}
      - : Das [`FormData`](/de/docs/Web/API/FormData)-Objekt, das die übermittelten Daten im Falle einer `POST`-Formularübermittlung darstellt. Standardmäßig `null`.
    - `hashChange` {{optional_inline}}
      - : Ein Boolean, der definiert, ob die Navigation eine Fragment-Navigation ist (d.h. zu einem Fragmentbezeichner im gleichen Dokument). Standardmäßig `false`.
    - `hasUAVisualTransition` {{optional_inline}}
      - : Ein Boolean, der definiert, ob der User-Agent vor dem Dispatch dieses Ereignisses eine visuelle Transition für diese Navigation durchgeführt hat. Standardmäßig `false`.
    - `info` {{optional_inline}}
      - : Der `info`-Datenwert, der von der initiierenden Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)).
    - `navigationType` {{optional_inline}}
      - : Der Typ der Navigation. Mögliche Werte — `push`, `reload`, `replace` und `traverse`. Standardmäßig `push`.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das abgebrochen wird, wenn die Navigation abgebrochen wird (z. B. durch den Benutzer, der die "Stop"-Taste des Browsers drückt oder eine andere Navigation beginnt und somit die laufende abbricht).
    - `sourceElement` {{optional_inline}}
      - : Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das initiierende Element in Fällen darstellt, in denen die Navigation von einem Element initiiert wurde, oder `null`, wenn die Navigation nicht von einem Element initiiert wurde. Standardmäßig `null`.
    - `userInitiated` {{optional_inline}}
      - : Ein Boolean, der definiert, ob die Navigation vom Benutzer initiiert wurde (z. B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Tasten des Browsers). Standardmäßig `false`.

### Rückgabewert

Ein neues [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Objekt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `NavigateEvent`-Objekt wird erstellt, wenn ein Handler als Ergebnis des Auslösens des [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignisses aufgerufen wird.

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

- [Moderne clientseitige Routenerstellung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
