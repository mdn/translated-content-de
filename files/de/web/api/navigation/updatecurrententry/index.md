---
title: "Navigation: updateCurrentEntry() Methode"
short-title: updateCurrentEntry()
slug: Web/API/Navigation/updateCurrentEntry
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`updateCurrentEntry()`** Methode des [`Navigation`](/de/docs/Web/API/Navigation) Interface aktualisiert den `state` des [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry). Dies wird in Fällen verwendet, in denen die Statusänderung unabhängig von einer Navigation oder einem Neuladungsvorgang erfolgen soll.

## Syntax

```js-nolint
updateCurrentEntry(options)
```

### Parameter

- `options`
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `state`
      - : Entwicklerdefinierte Informationen, die im zugehörigen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gespeichert werden sollen, sobald die Navigation abgeschlossen ist, und die über [`getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) abgerufen werden können. Dies kann jeder Datentyp sein. Sie könnten beispielsweise die Anzahl der Seitenbesuche für Analysezwecke speichern oder Details zum UI-Status speichern, sodass die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle im `state` gespeicherten Daten müssen [strukturierbar kopierbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `state`-Parameter Werte enthält, die nicht strukturierbar kopierbar sind.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) `null` ist, d.h. es gibt keinen aktuellen Verlaufseintrag. Dies könnte zum Beispiel der Fall sein, wenn die aktuelle Seite `about:blank` ist.

## Beispiele

Sie könnten etwas wie das Folgende verwenden, um den offenen/geschlossenen Status eines {{htmlelement("details")}}-Elements zu aktualisieren, sodass der Status beim Neuladen der Seite oder beim Zurücknavigieren von einem anderen Ort aus wiederhergestellt werden kann.

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
