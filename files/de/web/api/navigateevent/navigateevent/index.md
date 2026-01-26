---
title: "NavigateEvent: NavigateEvent() Konstruktor"
short-title: NavigateEvent()
slug: Web/API/NavigateEvent/NavigateEvent
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Der **`NavigateEvent()`** Konstruktor erstellt eine neue Instanz eines [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Objekts.

## Syntax

```js-nolint
new NavigateEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt.
- `init`
  - : Ein Objekt, das _zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften enthält:
    - `canIntercept` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob die Navigation abgefangen werden kann oder nicht (z.B. kann eine cross-origin Navigation nicht abgefangen werden). Standardwert ist `false`.
    - `destination`
      - : Ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt, das den Ort darstellt, zu dem navigiert wird.
    - `downloadRequest` {{optional_inline}}
      - : Der Dateiname der Datei, die im Falle einer Download-Navigation angefordert wird (z.B. ein {{htmlelement("a")}} oder {{htmlelement("area")}} Element mit einem `download` Attribut). Standardwert ist `null`.
    - `formData` {{optional_inline}}
      - : Das [`FormData`](/de/docs/Web/API/FormData)-Objekt, das die übermittelten Daten im Falle einer `POST` Formularübermittlung darstellt. Standardwert ist `null`.
    - `hashChange` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob die Navigation eine Fragmentnavigation ist (d.h. zu einem Fragment-Identifier im selben Dokument). Standardwert ist `false`.
    - `hasUAVisualTransition` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob der Benutzeragent eine visuelle Überblendung für diese Navigation durchgeführt hat, bevor dieses Ereignis ausgelöst wurde. Standardwert ist `false`.
    - `info` {{optional_inline}}
      - : Der `info`-Datenwert, der von der auslösenden Navigationsoperation übergeben wurde (z.B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back) oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)).
    - `navigationType` {{optional_inline}}
      - : Der Typ der Navigation. Mögliche Werte — `push`, `reload`, `replace` und `traverse`. Standardwert ist `push`.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das abgebrochen wird, wenn die Navigation abgebrochen wird (z.B. durch das Drücken der "Stopp"-Taste des Browsers durch den Nutzer oder wenn eine andere Navigation beginnt und somit die laufende abbricht).
    - `sourceElement` {{optional_inline}}
      - : Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das auslösende Element darstellt, in Fällen in denen die Navigation von einem Element initiiert wurde, oder `null`, wenn die Navigation nicht von einem Element initiiert wurde. Standardwert ist `null`.
    - `userInitiated` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob die Navigation vom Nutzer initiiert wurde (z.B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Weiter"-Tasten des Browsers). Standardwert ist `false`.

### Rückgabewert

Ein neues [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Objekt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `NavigateEvent`-Objekt wird erstellt, wenn ein Handler infolge des Auslösens des [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignisses aufgerufen wird.

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

- [Moderne Client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärungsdokument](https://github.com/WICG/navigation-api/blob/main/README.md)
