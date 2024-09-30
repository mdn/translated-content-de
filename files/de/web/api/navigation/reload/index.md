---
title: "Navigation: reload() Methode"
short-title: reload()
slug: Web/API/Navigation/reload
l10n:
  sourceCommit: 6e26603d67a00cc23f0c52afc27055a901d004b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`reload()`** Methode des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces lädt die aktuelle URL neu und aktualisiert dabei gegebenenfalls bereitgestellten Zustand in der Liste der Historieneinträge.

## Syntax

```js-nolint
navigate(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `state` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die in dem zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden sollten, sobald die Navigation abgeschlossen ist. Diese Informationen können über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) abgerufen werden. Dies kann jeder Datentyp sein. Sie möchten beispielsweise die Anzahl der Seitenbesuche für Analysezwecke speichern oder Details zum UI-Zustand speichern, sodass die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle im `state` gespeicherten Daten müssen [strukturiert kopierbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `info` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis übergeben werden sollen und in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info) verfügbar sind. Dies kann jeder Datentyp sein. Sie könnten beispielsweise den neu geladenen Inhalt mit einer anderen Animation anzeigen, je nachdem, wie die Navigation erfolgte (nach links wischen, nach rechts wischen oder nach Hause gehen). Ein String, der angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neues [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle durch den `intercept()`-Handler zurückgegebenen Promises erfüllt sind. Dies entspricht der Erfüllung des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Promises, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis ausgelöst wird.

Eines dieser Promises schlägt fehl, wenn die Navigation aus irgendeinem Grund fehlschlägt.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der `state` Parameter Werte enthält, die nicht strukturiert kopierbar sind.

## Beispiele

### Verwendung von info und state

```js
async function handleReload() {
  await navigation.reload({
    info: { animation: "fade-in" },
    state: { infoPaneOpen: true },
  }).finished;

  // Update application state
  // ...
}
```

Seite neu laden und ein neues State-Element hinzufügen:

```js
async function handleReload() {
  await navigation.reload({
    state: { ...navigation.currentEntry.getState(), newState: 3 },
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

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erklärung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
