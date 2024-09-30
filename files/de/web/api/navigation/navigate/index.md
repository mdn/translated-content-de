---
title: "Navigation: navigate() Methode"
short-title: navigate()
slug: Web/API/Navigation/navigate
l10n:
  sourceCommit: 6e26603d67a00cc23f0c52afc27055a901d004b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`navigate()`** Methode der [`Navigation`](/de/docs/Web/API/Navigation) Schnittstelle navigiert zu einer bestimmten URL und aktualisiert jeden angegebenen Zustand in der Liste der Historieneinträge.

## Syntax

```js-nolint
navigate(url)
navigate(url, options)
```

### Parameter

- `url`
  - : Die Ziel-URL, zu der navigiert werden soll. Beachten Sie, dass beim Aufrufen von `navigate()` auf dem `navigation`-Objekt eines anderen Fensters die URL relativ zur URL des Ziel-Fensters aufgelöst wird, nicht relativ zur URL des aufrufenden Fensters. Dies entspricht dem Verhalten der [History API](/de/docs/Web/API/History_API), aber nicht dem Verhalten der [Location API](/de/docs/Web/API/Location).
- `options` {{optional_inline}}
  - : Ein Optionen-Objekt, das die folgenden Eigenschaften enthält:
    - `state` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden sollen, sobald die Navigation abgeschlossen ist, abrufbar über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState). Dies kann jeder Datentyp sein. Sie könnten beispielsweise die Anzahl der Seitenaufrufe für Analysezwecke speichern oder Details zum UI-Zustand speichern, damit die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle im `state` gespeicherten Daten müssen [strukturierte-kopierbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `info` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis übermittelt und in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info) verfügbar gemacht werden. Dies kann jeder Datentyp sein. Sie könnten beispielsweise neu navigierte Inhalte mit einer anderen Animation basierend darauf anzeigen, wie sie navigiert wurden (Wischen nach links, Wischen nach rechts oder Zurückkehren). Eine Zeichenkette, die angibt, welche Animation verwendet werden soll, könnte als `info` übermittelt werden.
    - `history` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verhalten der Historie bei dieser Navigation festlegt. Die verfügbaren Werte sind:
        - `auto`: Der Standardwert; führt normalerweise eine `push`-Navigation durch, kann aber unter besonderen Umständen eine `replace`-Navigation durchführen (siehe die Beschreibung des `NotSupportedError` unten).
        - `push`: Fügt einen neuen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) der Liste der Einträge hinzu oder schlägt unter besonderen Umständen fehl (siehe die Beschreibung des `NotSupportedError` unten).
        - `replace`: Ersetzt den aktuellen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry).

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle Versprechen, die vom `intercept()`-Handler zurückgegeben werden, erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis ausgelöst wird.

Eines dieser Versprechen wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state` Parameter Werte enthalten hat, die nicht strukturierte-kopierbar sind.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `url` Parameter keine gültige URL ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `history` Option auf `push` gesetzt ist und einer der folgenden speziellen Umstände zutrifft:
    - Der Browser zeigt derzeit das initiale `about:blank` Dokument an.
    - Das Schema der `url` ist `javascript`.

## Beispiele

### Home-Button einrichten

```js
function initHomeBtn() {
  // Get the key of the first loaded entry
  // so the user can always go back to this view.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// Intercept navigate events, such as link clicks, and
// replace them with single-page navigations
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // Navigate to a different view,
      // but the "home" button will always work.
    },
  });
});
```

### Ein intelligenter Zurück-Button

Ein von der Seite bereitgestellter "Zurück"-Button kann Sie zurückbringen, auch nach einem Neuladen, indem er die vorherigen Historieneinträge inspiziert:

```js
backButtonEl.addEventListener("click", () => {
  if (
    navigation.entries()[navigation.currentEntry.index - 1]?.url ===
    "/product-listing"
  ) {
    navigation.back();
  } else {
    // If the user arrived here in some other way
    // e.g. by typing the URL directly:
    navigation.navigate("/product-listing", { history: "replace" });
  }
});
```

### Verwendung von info und state

```js
async function navigateHandler() {
  await navigation.navigate(url, {
    info: { animation: "swipe-right" },
    state: { infoPaneOpen: true },
  }).finished;

  // Update application state
  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderner client-seitiger Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API-Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
