---
title: "Navigation: reload() Methode"
short-title: reload()
slug: Web/API/Navigation/reload
l10n:
  sourceCommit: eb7531ab58621ef93a76520b91bc3550357a64df
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`reload()`**-Methode der [`Navigation`](/de/docs/Web/API/Navigation)-Schnittstelle lädt die aktuelle URL neu und aktualisiert jeden bereitgestellten Zustand in der Liste der Verlaufs-Einträge.

## Syntax

```js-nolint
reload()
reload(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `state` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die nach Abschluss der Navigation im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden sollen und über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) abrufbar sind. Dies kann jeder Datentyp sein. Sie könnten beispielsweise eine Seitenbesuchsanzahl für Analysezwecke speichern oder Details zum UI-Zustand speichern, damit die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle im `state` gespeicherten Daten müssen [struktur-klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `info` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis weitergegeben werden sollen und in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info) verfügbar sind. Dies kann jeder Datentyp sein. Beispielsweise könnten Sie neu navigierte Inhalte mit einer anderen Animation je nach Navigationsmethode (nach links wischen, nach rechts wischen oder nach Hause gehen) anzeigen. Ein String, die angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neues [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle vom `intercept()` Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird.

Entweder eines dieser Versprechen wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state`-Parameter Werte enthält, die nicht struktur-klonbar sind.

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

Seite neu laden und einen neuen Zustands-Eintrag hinzufügen:

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
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
