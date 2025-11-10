---
title: "Navigation: updateCurrentEntry() Methode"
short-title: updateCurrentEntry()
slug: Web/API/Navigation/updateCurrentEntry
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`updateCurrentEntry()`**-Methode des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces aktualisiert den `state` des [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry); wird in Fällen verwendet, in denen die Statusänderung unabhängig von einer Navigation oder einem Neuladen erfolgt.

## Syntax

```js-nolint
updateCurrentEntry(options)
```

### Parameter

- `options`
  - : Ein Options-Objekt, das die folgenden Eigenschaften enthält:
    - `state`
      - : Entwicklerdefinierte Informationen, die im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden sollen, nachdem die Navigation abgeschlossen ist, abrufbar über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState). Dies kann ein beliebiger Datentyp sein. Sie könnten beispielsweise die Anzahl der Seitenbesuche für Analysezwecke speichern oder Details des UI-Zustands speichern, sodass die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle im `state` gespeicherten Daten müssen [struktur-klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state`-Parameter Werte enthielt, die nicht struktur-klonbar sind.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) `null` ist, d.h. es gibt keinen aktuellen Verlaufseintrag. Dies könnte beispielsweise der Fall sein, wenn die aktuelle Seite `about:blank` ist.

## Beispiele

Sie könnten etwas wie das Folgende verwenden, um den geöffneten/geschlossenen Zustand eines {{htmlelement("details")}}-Elements zu aktualisieren, sodass der Zustand beim Neuladen der Seite oder bei der Rückkehr von einem anderen Ort wiederhergestellt werden kann.

```js
detailsElem.addEventListener("toggle", () => {
  navigation.updateCurrentEntry({ state: { detailOpen: detailsElem.open } });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
