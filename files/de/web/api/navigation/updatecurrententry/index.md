---
title: "Navigation: Methode updateCurrentEntry()"
short-title: updateCurrentEntry()
slug: Web/API/Navigation/updateCurrentEntry
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`updateCurrentEntry()`**-Methode der {{domxref("Navigation")}}-Schnittstelle aktualisiert den `state` des {{domxref("Navigation.currentEntry","currentEntry")}}; verwendet in Fällen, in denen die Statusänderung unabhängig von einer Navigation oder einem Neuladen erfolgt.

## Syntax

```js-nolint
updateCurrentEntry()
updateCurrentEntry(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `state`
      - : Vom Entwickler definierte Informationen, die im zugehörigen {{domxref("NavigationHistoryEntry")}} gespeichert werden sollen, sobald die Navigation abgeschlossen ist, abrufbar über {{domxref("NavigationHistoryEntry.getState", "getState()")}}. Dies kann jeden Datentyp umfassen. Sie könnten beispielsweise die Anzahl der Seitenbesuche für analytische Zwecke speichern oder UI-Zustandsdetails speichern, sodass die Ansicht genau so angezeigt werden kann, wie der Benutzer sie zuletzt verlassen hat. Alle in `state` gespeicherten Daten müssen [strukturklonbar](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) sein.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `DataCloneError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `state`-Parameter Werte enthält, die nicht strukturklonbar sind.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("Navigation.currentEntry")}} `null` ist, d.h. es gibt keinen aktuellen Verlaufseintrag. Dies könnte beispielsweise passieren, wenn die aktuelle Seite `about:blank` ist.

## Beispiele

Sie könnten etwas wie das Folgende verwenden, um den geöffnet/geschlossen-Zustand eines {{htmlelement("details")}}-Elements zu aktualisieren, sodass der Zustand beim Neuladen der Seite oder beim Zurücknavigieren von einem anderen Ort wiederhergestellt werden kann.

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

- [Moderne clientseitige Routennavigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
