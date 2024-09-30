---
title: "NavigateEvent: NavigateEvent() Konstruktor"
short-title: NavigateEvent()
slug: Web/API/NavigateEvent/NavigateEvent
l10n:
  sourceCommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Der **`NavigateEvent()`** Konstruktor erstellt eine neue Instanz eines [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Objekt.

## Syntax

```js-nolint
new NavigateEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses repräsentiert. Im Fall von `NavigateEvent` ist dies immer `navigate`.
- `init`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `canIntercept` {{optional_inline}}
      - : Ein Boolean, der definiert, ob die Navigation abgefangen werden kann oder nicht (z. B. kann eine Cross-Origin-Navigation nicht abgefangen werden). Standardmäßig `false`.
    - `destination`
      - : Ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) Objekt, das das Ziel der Navigation repräsentiert.
    - `downloadRequest` {{optional_inline}}
      - : Der Dateiname der angeforderten Datei im Fall einer Download-Navigation (z. B. ein {{htmlelement("a")}} oder {{htmlelement("area")}} Element mit einem `download` Attribut). Standardmäßig `null`.
    - `formData` {{optional_inline}}
      - : Das [`FormData`](/de/docs/Web/API/FormData) Objekt, das die übermittelten Daten im Fall eines `POST`-Formularabsendung repräsentiert. Standardmäßig `null`.
    - `hashChange` {{optional_inline}}
      - : Ein Boolean, der definiert, ob die Navigation eine Fragmentnavigation ist (d. h. zu einem Fragmentbezeichner im selben Dokument). Standardmäßig `false`.
    - `info` {{optional_inline}}
      - : Der `info` Datenwert, der durch die initiierende Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back), oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)).
    - `navigationType` {{optional_inline}}
      - : Der Typ der Navigation. Mögliche Werte — `push`, `reload`, `replace` und `traverse`. Standardmäßig `push`.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das abgebrochen wird, wenn die Navigation abgebrochen wird (z. B. wenn der Benutzer die "Stop"-Schaltfläche des Browsers drückt oder eine andere Navigation beginnt und damit die laufende abbricht).
    - `userInitiated` {{optional_inline}}
      - : Ein Boolean, der definiert, ob die Navigation vom Benutzer initiiert wurde (z. B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Tasten des Browsers). Standardmäßig `false`.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `NavigateEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis des [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignisses aufgerufen wird.

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

- [Moderne client-seitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärungsdokument](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
