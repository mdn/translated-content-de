---
title: "Navigation: reload() Methode"
short-title: reload()
slug: Web/API/Navigation/reload
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`reload()`** Methode des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces lädt die aktuelle URL neu und aktualisiert dabei jeden bereitgestellten Zustand in der Liste der Verlaufseinträge.

## Syntax

```js-nolint
reload()
reload(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `state` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden, sobald die Navigation abgeschlossen ist und über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) abgerufen werden können. Dies kann jeder Datentyp sein. Sie könnten beispielsweise die Besuche einer Seite zu Analysezwecken speichern oder Details zum UI-Zustand speichern, damit die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle in `state` gespeicherten Daten müssen [strukturiert klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `info` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die dem [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Event übergeben werden, verfügbar in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info). Dies kann jeder Datentyp sein. Sie könnten beispielsweise neu navigierte Inhalte mit einer anderen Animation abhängig davon anzeigen wollen, wie navigiert wurde (nach links wischen, nach rechts wischen oder zurück zur Startseite). Ein String, der angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn die sichtbare URL geändert wurde und ein neues [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle von dem `intercept()` Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Event ausgelöst wird.

Eines dieser Versprechen wird zurückgewiesen, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state`-Parameter Werte enthielt, die nicht strukturiert klonbar sind.

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

Seite neu laden und ein neues State-Element hinzufügen:

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
