---
title: "Navigation: navigate() Methode"
short-title: navigate()
slug: Web/API/Navigation/navigate
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`navigate()`**-Methode der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle navigiert zu einer bestimmten URL und aktualisiert dabei jeden bereitgestellten Zustand in der Liste der Historieneinträge.

## Syntax

```js-nolint
navigate(url)
navigate(url, options)
```

### Parameter

- `url`
  - : Die Ziel-URL, zu der navigiert werden soll. Beachten Sie, dass beim Aufrufen von `navigate()` auf einem `navigation`-Objekt eines anderen Fensters die URL relativ zur URL des Ziel-Fensters aufgelöst wird, nicht zur URL des aufrufenden Fensters. Dies entspricht dem Verhalten der [History API](/de/docs/Web/API/History_API), aber nicht dem Verhalten der [Location API](/de/docs/Web/API/Location).
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das folgende Eigenschaften enthält:
    - `state` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden, sobald die Navigation abgeschlossen ist, abrufbar über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState). Dies kann ein beliebiger Datentyp sein. Sie möchten beispielsweise für Analysezwecke möglicherweise eine Seitenaufrufanzahl speichern oder UI-Zustandsdetails speichern, damit die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle in `state` gespeicherten Daten müssen [struktur-klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `info` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis übergeben werden, verfügbar in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info). Dies kann ein beliebiger Datentyp sein. Sie möchten beispielsweise neu navigierte Inhalte mit einer anderen Animation anzeigen, je nachdem, wie zu ihnen navigiert wurde (nach links wischen, nach rechts wischen oder nach Hause gehen). Ein String, der angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.
    - `history` {{optional_inline}}
      - : Ein enumerierter Wert, der das Historienverhalten dieser Navigation festlegt. Die verfügbaren Werte sind:
        - `auto`: Der Standardwert; wird normalerweise eine `push`-Navigation ausführen, jedoch unter besonderen Umständen eine `replace`-Navigation (siehe Beschreibung des `NotSupportedError` unten).
        - `push`: Wird einen neuen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zur Liste der Einträge hinzufügen oder unter besonderen Umständen scheitern (siehe Beschreibung des `NotSupportedError` unten).
        - `replace`: Wird den aktuellen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) ersetzen.

### Rückgabewert

Ein Objekt mit folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle von der `intercept()`-Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird.

Eines dieser Versprechen wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state`-Parameter Werte enthielt, die nicht struktur-klonbar sind.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `url`-Parameter keine gültige URL ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `history`-Option auf `push` gesetzt ist und einer der folgenden besonderen Umstände zutrifft:
    - Der Browser zeigt derzeit das initiale `about:blank`-Dokument an.
    - Das Schema der `url` ist `javascript`.

## Beispiele

### Ein Home-Button einrichten

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

Ein von der Seite bereitgestellter "Zurück"-Button kann Sie auch nach einem Neuladen zurückführen, indem er die vorherigen Historieneinträge inspiziert:

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
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne client-seitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
