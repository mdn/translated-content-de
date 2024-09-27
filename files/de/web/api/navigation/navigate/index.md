---
title: "Navigation: navigate() Methode"
short-title: navigate()
slug: Web/API/Navigation/navigate
l10n:
  sourceCommit: 6e26603d67a00cc23f0c52afc27055a901d004b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`navigate()`** Methode des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces navigiert zu einer bestimmten URL und aktualisiert gegebenenfalls einen bereitgestellten Zustand in der Historieneintragsliste.

## Syntax

```js-nolint
navigate(url)
navigate(url, options)
```

### Parameter

- `url`
  - : Die Ziel-URL, zu der navigiert werden soll. Beachten Sie, dass bei einem Aufruf von `navigate()` auf dem `navigation`-Objekt eines anderen Fensters, die URL relativ zur URL des Ziel-Fensters und nicht zur URL des aufrufenden Fensters aufgelöst wird. Dies entspricht dem Verhalten der [History API](/de/docs/Web/API/History_API), aber nicht dem der [Location API](/de/docs/Web/API/Location).
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `state` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden sollen, sobald die Navigation abgeschlossen ist, abrufbar über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState). Dies kann jeder Datentyp sein. Beispielsweise möchten Sie möglicherweise eine Seitenbesuchsanzahl für Analysezwecke speichern oder Details zum UI-Zustand speichern, damit die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle im `state` gespeicherten Daten müssen [strukturklonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `info` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis übergeben werden sollen und in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info) verfügbar sind. Dies kann jeder Datentyp sein. Sie möchten beispielsweise möglicherweise neu navigierte Inhalte mit einer anderen Animation anzeigen, abhängig davon, wie zu ihnen navigiert wurde (nach links wischen, nach rechts wischen oder nach Hause gehen). Ein String, der angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.
    - `history` {{optional_inline}}
      - : Ein enumerierter Wert, der das Historienverhalten dieser Navigation festlegt. Die verfügbaren Werte sind:
        - `auto`: Der Standardwert; führt normalerweise eine `push`-Navigation aus, führt jedoch unter besonderen Umständen eine `replace`-Navigation aus (siehe die Beschreibung von `NotSupportedError` unten).
        - `push`: Fügt einen neuen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zur Eintragsliste hinzu oder schlägt unter besonderen Umständen fehl (siehe die Beschreibung von `NotSupportedError` unten).
        - `replace`: Ersetzt den aktuellen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry).

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle von dem `intercept()`-Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis ausgelöst wird.

Eines dieser Versprechen wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der `state`-Parameter Werte enthält, die nicht strukturklonbar sind.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der `url`-Parameter keine gültige URL ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die `history`-Option auf `push` gesetzt ist und eine der folgenden besonderen Umstände zutrifft:
    - Der Browser zeigt derzeit das anfängliche `about:blank` Dokument an.
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

Ein vom Benutzer bereitgestellter "Zurück"-Button kann Sie zurückführen, sogar nach einem Neuladen der Seite, indem er die vorherigen Historieneinträge überprüft:

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

- [Moderne clientseitige Router: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
