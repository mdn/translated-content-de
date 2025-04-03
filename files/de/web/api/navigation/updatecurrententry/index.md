---
title: "Navigation: updateCurrentEntry() Methode"
short-title: updateCurrentEntry()
slug: Web/API/Navigation/updateCurrentEntry
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`updateCurrentEntry()`** Methode des [`Navigation`](/de/docs/Web/API/Navigation) Interfaces aktualisiert den `state` des [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry); sie wird in Fällen verwendet, in denen die Statusänderung unabhängig von einer Navigation oder einem Neuladen erfolgt.

## Syntax

```js-nolint
updateCurrentEntry(options)
```

### Parameter

- `options`
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `state`
      - : Vom Entwickler definierte Information, die im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry), gespeichert wird, sobald die Navigation abgeschlossen ist. Abrufbar über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState). Dies kann jeder Datentyp sein. Sie könnten beispielsweise die Anzahl der Seitenbesuche für Analysezwecke speichern oder UI-Zustandsdetails speichern, sodass die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle im `state` gespeicherten Daten müssen [strukturklonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state` Parameter Werte enthält, die nicht strukturklonbar sind.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) `null` ist, d.h. kein aktueller Verlaufs-Eintrag vorhanden ist. Dies könnte zum Beispiel passieren, wenn die aktuelle Seite `about:blank` ist.

## Beispiele

Sie könnten beispielsweise Folgendes verwenden, um den geöffneten/geschlossenen Zustand eines {{htmlelement("details")}} Elements zu aktualisieren, sodass der Zustand beim Neuladen der Seite oder beim Navigieren von einer anderen Seite zurück wiederhergestellt werden kann.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erklärung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
