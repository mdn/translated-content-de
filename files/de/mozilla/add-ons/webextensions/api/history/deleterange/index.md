---
title: history.deleteRange()
slug: Mozilla/Add-ons/WebExtensions/API/history/deleteRange
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Entfernt alle Seitenbesuche, die der Benutzer während des angegebenen Zeitbereichs gemacht hat. Wenn dadurch alle Besuche einer bestimmten Seite entfernt werden, wird die Seite nicht mehr im Browserverlauf angezeigt und {{WebExtAPIRef("history.onVisitRemoved")}} wird dafür ausgelöst.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let deletingRange = browser.history.deleteRange(
  range           // object
)
```

### Parameter

- `range`
  - : `object`. Spezifikation des Zeitbereichs, für den Besuche gelöscht werden sollen.
    - `startTime`
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt, ein [ISO 8601 Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der [Millisekunden seit dem Epoch](https://en.wikipedia.org/wiki/Unix_time). Gibt die Startzeit des Bereichs an.
    - `endTime`
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt, ein [ISO 8601 Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der [Millisekunden seit dem Epoch](https://en.wikipedia.org/wiki/Unix_time). Gibt die Endzeit des Bereichs an.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird ohne Parameter erfüllt, wenn der Bereich gelöscht wurde.

## Beispiele

Alle Besuche der letzten Minute löschen:

```js
const MINUTE = 60 * 1000;

function oneMinuteAgo() {
  return Date.now() - MINUTE;
}

browser.history.deleteRange({
  startTime: oneMinuteAgo(),
  endTime: Date.now(),
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-deleteRange) API von Chromium. Diese Dokumentation stammt von [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.
