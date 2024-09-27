---
title: "Navigation: reload() Methode"
short-title: reload()
slug: Web/API/Navigation/reload
l10n:
  sourceCommit: 6e26603d67a00cc23f0c52afc27055a901d004b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`reload()`**-Methode des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces lädt die aktuelle URL neu und aktualisiert dabei beliebige bereitgestellte Zustände in der Liste der Verlaufseinträge.

## Syntax

```js-nolint
navigate(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `state` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die in dem zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden, sobald die Navigation abgeschlossen ist. Diese können über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) abgerufen werden. Dies kann jeder Datentyp sein. Sie möchten beispielsweise die Anzahl der Seitenbesuche für Analysezwecke speichern oder Details zur UI-Zustand speichern, damit die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle Daten, die in `state` gespeichert werden, müssen [strukturiert klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `info` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis übergeben werden, verfügbar in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info). Dies kann jeder Datentyp sein. Sie möchten beispielsweise neu navigierte Inhalte mit einer anderen Animation anzeigen, abhängig davon, wie sie navigiert wurden (nach links wischen, nach rechts wischen oder nach Hause gehen). Eine Zeichenkette, die angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, der erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, der erfüllt wird, wenn alle von der `intercept()`-Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Promise, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird.

Eines dieser Versprechen wird abgelehnt, falls die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state`-Parameter Werte enthält, die nicht strukturiert klonbar sind.

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

Seite neu laden und ein neues Zustandselement hinzufügen:

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
