---
title: "Navigation: updateCurrentEntry() Methode"
short-title: updateCurrentEntry()
slug: Web/API/Navigation/updateCurrentEntry
l10n:
  sourceCommit: b55f5ca413d0b8115ecbafa19b3afbca72900e97
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`updateCurrentEntry()`** Methode des [`Navigation`](/de/docs/Web/API/Navigation) Interfaces aktualisiert den `state` des [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry); verwendet in Fällen, in denen der Zustandswechsel unabhängig von einer Navigation oder einem Neuladen erfolgt.

## Syntax

```js-nolint
updateCurrentEntry(options)
```

### Parameter

- `options`
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `state`
      - : Entwicklerdefinierte Informationen, die im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden sollen, sobald die Navigation abgeschlossen ist, und über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) abgerufen werden können. Dies kann jeder Datentyp sein. Sie könnten beispielsweise die Anzahl der Seitenbesuche für Analysezwecke speichern oder UI-Zustandsdetails speichern, damit die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle in `state` gespeicherten Daten müssen [strukturiert klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state` Parameter Werte enthält, die nicht strukturiert klonbar sind.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) `null` ist, d.h. es gibt keinen aktuellen Verlaufs-Eintrag. Dies könnte zum Beispiel vorkommen, wenn die aktuelle Seite `about:blank` ist.

## Beispiele

Sie könnten etwas Ähnliches wie das Folgende verwenden, um den geöffneten/geschlossenen Zustand eines {{htmlelement("details")}} Elements zu aktualisieren, sodass der Zustand beim Neuladen der Seite oder beim Zurücknavigieren von einer anderen Stelle wiederhergestellt werden kann.

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

- [Moderne client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
