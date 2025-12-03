---
title: "Navigation: navigate() Methode"
short-title: navigate()
slug: Web/API/Navigation/navigate
l10n:
  sourceCommit: b5a7c2098c667c24c5434e5036524034269f9e9c
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`navigate()`** Methode der
[`Navigation`](/de/docs/Web/API/Navigation) Schnittstelle navigiert zu einer bestimmten URL und aktualisiert dabei jeden bereitgestellten Zustand in der Liste der Verlaufseinträge.

## Syntax

```js-nolint
navigate(url)
navigate(url, options)
```

### Parameter

- `url`
  - : Die Ziel-URL, zu der navigiert werden soll. Beachten Sie, dass bei einem Aufruf von `navigate()` auf dem `navigation`-Objekt eines anderen Fensters die URL relativ zur URL des Ziel-Fensters und nicht zur URL des aufrufenden Fensters aufgelöst wird. Dies entspricht dem Verhalten der [History API](/de/docs/Web/API/History_API), jedoch nicht dem Verhalten der [Location API](/de/docs/Web/API/Location). Beachten Sie auch, dass `javascript:` URLs aus Sicherheitsgründen nicht erlaubt sind.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `state` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden, sobald die Navigation abgeschlossen ist. Diese Informationen können über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) abgerufen werden. Es kann sich um jeden Datentyp handeln. Sie könnten beispielsweise die Anzahl der Seitenbesuche zu Analysezwecken speichern oder Details des UI-Zustands speichern, sodass die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle in `state` gespeicherten Daten müssen [strukturiert klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `info` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die dem [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis übergeben werden, verfügbar in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info). Es kann sich um jeden Datentyp handeln. Sie möchten beispielsweise neu navigierte Inhalte mit einer anderen Animation anzeigen, je nachdem, wie dorthin navigiert wurde (nach links wischen, nach rechts wischen oder nach Hause gehen). Ein String, der angibt, welche Animation verwendet werden soll, könnte in `info` übergeben werden.
    - `history` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verlaufsverhalten dieser Navigation festlegt. Die verfügbaren Werte sind:
        - `auto`: Der Standardwert; wird normalerweise eine `push` Navigation durchführen, aber unter besonderen Umständen eine `replace` Navigation durchführen (siehe die Beschreibung des `NotSupportedError` unten).
        - `push`: Fügt einen neuen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zur Liste der Einträge hinzu oder schlägt unter besonderen Umständen fehl (siehe die Beschreibung des `NotSupportedError` unten).
        - `replace`: Ersetzt den aktuellen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry).

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle von dem `intercept()` Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht der Erfüllung des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis ausgelöst wird.

Eines dieser Versprechen schlägt fehl, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state` Parameter Werte enthält, die nicht strukturiert klonbar sind.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Dokument derzeit nicht aktiv ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `url` Parameter keine gültige URL ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die `history` Option auf `push` gesetzt ist und der Browser derzeit das initiale `about:blank` Dokument anzeigt.
    - Das Schema der `url` `javascript` ist.

## Beispiele

### Einrichtung des Home-Buttons

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

### Ein intelligenter Rückwärts-Button

Ein von der Seite bereitgestellter "Zurück"-Button kann Sie zurücknavigieren, selbst nach einem Neuladen, indem er die vorherigen Verlaufseinträge inspiziert:

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

- [Moderne clientseitige Routinen: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
