---
title: "NavigateEvent: NavigateEvent() Konstruktor"
short-title: NavigateEvent()
slug: Web/API/NavigateEvent/NavigateEvent
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Navigation API")}}

Der **`NavigateEvent()`** Konstruktor erstellt eine neue [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Objektinstanz.

## Syntax

```js-nolint
new NavigateEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt.
- `init`
  - : Ein Objekt, das, _zusätzlich zu den Eigenschaften, die in [`Event()`](/de/docs/Web/API/Event/Event) definiert sind_, die folgenden Eigenschaften hat:
    - `canIntercept` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob die Navigation abgefangen werden kann oder nicht (z. B. kann eine Cross-Origin-Navigation nicht abgefangen werden). Standard ist `false`.
    - `destination`
      - : Ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) Objekt, das den Zielort der Navigation darstellt.
    - `downloadRequest` {{optional_inline}}
      - : Der Dateiname der Datei, die im Falle einer Download-Navigation angefordert wird (z. B. ein {{htmlelement("a")}} oder {{htmlelement("area")}} Element mit einem `download`-Attribut). Standard ist `null`.
    - `formData` {{optional_inline}}
      - : Das [`FormData`](/de/docs/Web/API/FormData) Objekt, das die übermittelten Daten im Falle einer `POST`-Formularübermittlung darstellt. Standard ist `null`.
    - `hashChange` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob die Navigation eine Fragmentnavigation ist (d.h. zu einem Fragment-Identifikator im selben Dokument). Standard ist `false`.
    - `hasUAVisualTransition` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob der Benutzeragent eine visuelle Übergangsanimation für diese Navigation durchgeführt hat, bevor dieses Ereignis ausgelöst wurde. Standard ist `false`.
    - `info` {{optional_inline}}
      - : Der `info` Datenwert, der bei der einleitenden Navigationsoperation übergeben wurde (z. B. [`Navigation.back()`](/de/docs/Web/API/Navigation/back), oder [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate)).
    - `navigationType` {{optional_inline}}
      - : Der Typ der Navigation. Mögliche Werte — `push`, `reload`, `replace`, und `traverse`. Standard ist `push`.
    - `signal`
      - : Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal), das abgebrochen wird, wenn die Navigation abgebrochen wird (z. B. indem der Benutzer die "Stop"-Schaltfläche des Browsers drückt, oder eine andere Navigation startet und dadurch die laufende abbricht).
    - `sourceElement` {{optional_inline}}
      - : Ein [`Element`](/de/docs/Web/API/Element) Objekt, das das auslösende Element darstellt, wenn die Navigation durch ein Element initiiert wurde, oder `null`, wenn die Navigation nicht durch ein Element initiiert wurde. Standard ist `null`.
    - `userInitiated` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob die Navigation durch den Benutzer initiiert wurde (z. B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Schaltflächen des Browsers). Standard ist `false`.

### Rückgabewert

Ein neues [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) Objekt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `NavigateEvent`-Objekt wird erstellt, wenn ein Handler als Ergebnis des Auslösens des [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignisses aufgerufen wird.

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
- [Navigation API Erklärungsdokumentation](https://github.com/WICG/navigation-api/blob/main/README.md)
