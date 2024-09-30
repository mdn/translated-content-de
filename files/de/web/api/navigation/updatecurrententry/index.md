---
title: "Navigation: updateCurrentEntry() Methode"
short-title: updateCurrentEntry()
slug: Web/API/Navigation/updateCurrentEntry
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`updateCurrentEntry()`**-Methode des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces aktualisiert den `state` des [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry); dies wird in Fällen verwendet, in denen die Zustandsänderung unabhängig von einer Navigation oder einem Neuladen erfolgt.

## Syntax

```js-nolint
updateCurrentEntry()
updateCurrentEntry(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `state`
      - : Vom Entwickler definierte Informationen, die im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden sollen, sobald die Navigation abgeschlossen ist, und abrufbar über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState). Dies kann ein beliebiger Datentyp sein. Sie möchten beispielsweise möglicherweise die Anzahl der Seitenbesuche für Analysezwecke speichern oder UI-Zustandsdetails speichern, damit die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle im `state` gespeicherten Daten müssen [struktur-klonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state`-Parameter Werte enthält, die nicht struktur-klonbar sind.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) `null` ist, d. h. es gibt keinen aktuellen Verlaufseintrag. Dies könnte zum Beispiel auftreten, wenn die aktuelle Seite `about:blank` ist.

## Beispiele

Sie könnten etwa Folgendes verwenden, um den offenen/geschlossenen Zustand eines {{htmlelement("details")}}-Elements zu aktualisieren, sodass der Zustand beim Neuladen der Seite oder beim Zurückkehren von anderswoher wiederhergestellt werden kann.

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

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
