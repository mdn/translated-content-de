---
title: "NavigateEvent: NavigateEvent() Konstruktor"
short-title: NavigateEvent()
slug: Web/API/NavigateEvent/NavigateEvent
l10n:
  sourceCommit: 7c44de6d40778dbfb6eeb1163d7d850e911cd706
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Der **`NavigateEvent()`** Konstruktor erstellt eine neue Instanz eines {{domxref("NavigateEvent")}} Objekts.

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
      - : Ein Boolean, der definiert, ob die Navigation abgefangen werden kann oder nicht (z.B. kann man eine Navigation zwischen verschiedenen Ursprüngen nicht abfangen). Standardmäßig `false`.
    - `destination`
      - : Ein {{domxref("NavigationDestination")}} Objekt, das den Zielort darstellt, zu dem navigiert wird.
    - `downloadRequest` {{optional_inline}}
      - : Der Dateiname der angeforderten Datei für den Download im Falle einer Download-Navigation (z.B. ein {{htmlelement("a")}} oder {{htmlelement("area")}} Element mit einem `download` Attribut). Standardmäßig `null`.
    - `formData` {{optional_inline}}
      - : Das {{domxref("FormData")}} Objekt, das die abgeschickten Daten im Falle einer `POST` Formularübermittlung darstellt. Standardmäßig `null`.
    - `hashChange` {{optional_inline}}
      - : Ein Boolean, das definiert, ob die Navigation eine Fragment-Navigation ist (d.h. zu einem Fragmentbezeichner im selben Dokument). Standardmäßig `false`.
    - `info` {{optional_inline}}
      - : Der `info` Datenwert, der von der initiierenden Navigationsoperation übergeben wird (z.B. {{domxref("Navigation.back()")}}, oder {{domxref("Navigation.navigate()")}}).
    - `navigationType` {{optional_inline}}
      - : Der Typ der Navigation. Mögliche Werte — `push`, `reload`, `replace` und `traverse`. Standardmäßig `push`.
    - `signal`
      - : Ein {{domxref("AbortSignal")}}, der abgebrochen wird, wenn die Navigation abgebrochen wird (z.B. durch den Benutzer, der die "Stop"-Taste des Browsers drückt, oder eine andere Navigation, die beginnt und somit die laufende abbricht).
    - `userInitiated` {{optional_inline}}
      - : Ein Boolean, der definiert, ob die Navigation vom Benutzer initiiert wurde (z.B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Tasten des Browsers). Standardmäßig `false`.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `NavigateEvent` Objekt wird konstruiert, wenn ein Handler als Ergebnis des {{domxref("Navigation.navigate_event", "navigate")}} Ereignisses aufgerufen wird.

```js
navigation.addEventListener("navigate", (event) => {
  // Frühes Beenden, wenn diese Navigation nicht abgefangen werden sollte,
  // z.B. wenn die Navigation zwischen verschiedenen Ursprüngen oder eine Download-Anforderung ist
  if (shouldNotIntercept(event)) {
    return;
  }

  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/articles/")) {
    event.intercept({
      async handler() {
        // Die URL hat sich bereits geändert, also zeigen Sie einen Platzhalter an, während
        // die neuen Inhalte geladen werden, wie z.B. einen Spinner oder eine Ladeanzeige
        renderArticlePagePlaceholder();

        // Laden Sie die neuen Inhalte und zeigen Sie diese an, wenn sie bereit sind
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

- [Modernes clientseitiges Routing: Die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
