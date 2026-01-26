---
title: "Navigation: reload() Methode"
short-title: reload()
slug: Web/API/Navigation/reload
l10n:
  sourceCommit: d761f12b87a1cc18e37ed9b889ee1aecdb64c255
---

{{APIRef("Navigation API")}}

Die **`reload()`** Methode der [`Navigation`](/de/docs/Web/API/Navigation) Schnittstelle lädt die aktuelle URL neu und aktualisiert dabei alle im Verlaufseinträge enthaltenen Zustände.

Beachten Sie, dass `reload()` nicht das [`popstate` Ereignis](/de/docs/Web/API/Window/popstate_event) auslöst, da dieses nur bei "weichen" Navigationen ausgelöst wird, die ein „Durchlaufen“ der Verlaufseinträge verursachen.

## Syntax

```js-nolint
reload()
reload(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `state` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden, sobald die Navigation abgeschlossen ist und die über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) abgerufen werden können.
        Dies kann jeder Datentyp sein. Sie möchten beispielsweise möglicherweise die Anzahl der Seitenbesuche zu Analysezwecken speichern oder UI-Statusdetails speichern, damit die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat.
        Alle in `state` gespeicherten Daten müssen [struktur-klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.
    - `info` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis übergeben und in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info) verfügbar gemacht werden.
        Dies kann jeder Datentyp sein. Sie möchten beispielsweise den neu navigierten Inhalt mit einer anderen Animation anzeigen, je nachdem, wie er navigiert wurde (nach links wischen, nach rechts wischen oder nach Hause gehen).
        Eine Zeichenfolge, die angibt, welche Animation verwendet werden soll, kann als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn die sichtbare URL geändert wurde und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle von dem `intercept()` Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht der Erfüllung des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis ausgelöst wird.

Eines dieser Versprechen wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state` Parameter Werte enthalten hatte, die nicht struktur-klonbar sind.

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

Seite neu laden und ein neues Statusobjekt hinzufügen:

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

- [Moderne client-seitige Routing: Die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
