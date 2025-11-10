---
title: "Navigation: navigate() Methode"
short-title: navigate()
slug: Web/API/Navigation/navigate
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`navigate()`**-Methode des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces navigiert zu einer spezifischen URL und aktualisiert dabei jeden bereitgestellten Zustand in der Liste der Verlaufs-Einträge.

## Syntax

```js-nolint
navigate(url)
navigate(url, options)
```

### Parameter

- `url`
  - : Die Ziel-URL, zu der navigiert werden soll. Beachten Sie, dass beim Aufruf von `navigate()` auf einem `navigation`-Objekt eines anderen Fensters die URL relativ zur URL des Ziel-Fensters und nicht zur URL des aufrufenden Fensters aufgelöst wird. Dies entspricht dem Verhalten der [History API](/de/docs/Web/API/History_API), jedoch nicht dem Verhalten der [Location API](/de/docs/Web/API/Location).
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `state` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die beim Abschluss der Navigation im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden sollen und über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) abrufbar sind. Dies kann jeder Datentyp sein. Zum Beispiel könnten Sie wünschen, eine Seiten-Besuchszählung für Analysezwecke zu speichern oder UI-Zustandsdetails zu speichern, damit die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle im `state` gespeicherten Daten müssen [struktur-klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `info` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die im [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Event verfügbar gemacht werden sollen und in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info) abrufbar sind. Dies kann jeder Datentyp sein. Zum Beispiel könnten Sie wünschen, neu-navigierten Inhalt mit einer anderen Animation anzuzeigen, je nachdem, wie er navigiert wurde (links wischen, rechts wischen oder zur Startseite gehen). Ein String, der angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.
    - `history` {{optional_inline}}
      - : Ein enumerierter Wert, der das Verlauf-Verhalten dieser Navigation festlegt. Die verfügbaren Werte sind:
        - `auto`: Der Standardwert; führt normalerweise eine `push`-Navigation aus, führt jedoch unter besonderen Umständen eine `replace`-Navigation durch (siehe Beschreibung des `NotSupportedError` weiter unten).
        - `push`: Fügt einen neuen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zur Eintragsliste hinzu oder schlägt unter besonderen Umständen fehl (siehe Beschreibung des `NotSupportedError` weiter unten).
        - `replace`: Ersetzt den aktuellen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry).

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle Promise-Zurückgaben des `intercept()`-Handlers erfüllt werden. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Promise, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Event ausgelöst wird.

Eines dieser Promises wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state`-Parameter Werte enthält, die nicht struktur-klonbar sind.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `url`-Parameter keine gültige URL ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Option `history` auf `push` gesetzt ist und einer der folgenden besonderen Umstände zutrifft:
    - Der Browser zeigt derzeit das initiale `about:blank`-Dokument an.
    - Das Schema der `url` ist `javascript`.

## Beispiele

### Einrichtung einer Home-Schaltfläche

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

### Eine intelligente Zurück-Schaltfläche

Eine von der Seite bereitgestellte "Zurück"-Schaltfläche kann Sie zurückführen, selbst nach einem Neuladen, indem sie die vorherigen Verlaufs-Einträge inspiziert:

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

- [Moderne client-seitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
