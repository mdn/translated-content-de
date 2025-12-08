---
title: "Navigation: reload() Methode"
short-title: reload()
slug: Web/API/Navigation/reload
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`reload()`**-Methode der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle lädt die aktuelle URL neu und aktualisiert ggf. bereitgestellten Zustand in der Liste der Verlaufseinträge.

## Syntax

```js-nolint
reload()
reload(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `state` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden, sobald die Navigation abgeschlossen ist und über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) abrufbar sind. Dies kann beliebiger Datentyp sein. Sie könnten zum Beispiel eine Seitenaufrufanzahl für Analysezwecke speichern oder UI-Zustandsdetails speichern, damit die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle im `state` gespeicherten Daten müssen [strukturierte-klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `info` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis übergeben werden und in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info) verfügbar sind. Dies kann beliebiger Datentyp sein. Sie könnten zum Beispiel den neu navigierten Inhalt mit einer anderen Animation anzeigen, je nachdem, wie er navigiert wurde (nach links wischen, nach rechts wischen oder zur Startseite gehen). Eine Zeichenkette, die angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle `intercept()`-Handler-Promises erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Promise, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird.

Einer dieser Promises wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state`-Parameter Werte enthält, die nicht strukturierte-klonbar sind.

## Beispiele

### Verwendung von info und state

```js
async function handleReload() {
  await navigation.reload({
    info: { animation: "fade-in" },
    state: { infoPaneOpen: true },
  }).finished;

  // Update application state
  // …
}
```

Seite neu laden und einen neuen Zustandselement hinzufügen:

```js
async function handleReload() {
  await navigation.reload({
    state: { ...navigation.currentEntry.getState(), newState: 3 },
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

- [Moderne client-seitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
