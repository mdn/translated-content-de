---
title: browsingData.removePluginData()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removePluginData
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Löscht von Browser-Plugins gespeicherte Daten.

Sie können den `removalOptions`-Parameter verwenden, der ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt ist, um:

- nur Plugin-Daten zu löschen, die nach einem bestimmten Zeitpunkt gespeichert wurden
- zu steuern, ob nur Daten gelöscht werden sollen, die von Plugins in normalen Webseiten gespeichert wurden, oder ob auch Daten gelöscht werden sollen, die von Plugins in gehosteten Apps und Erweiterungen gespeichert wurden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removePluginData(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, das verwendet werden kann, um nur Plugin-Daten zu löschen, die nach einem bestimmten Zeitpunkt gespeichert wurden und ob nur Daten gelöscht werden sollen, die von Plugins in normalen Webseiten gespeichert wurden, oder ob auch Daten gelöscht werden sollen, die von Plugins in gehosteten Apps und Erweiterungen gespeichert wurden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Entfernen abgeschlossen ist. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Entfernen Sie Daten, die von Plugins in der letzten Woche gespeichert wurden:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

function weekInMilliseconds() {
  return 1000 * 60 * 60 * 24 * 7;
}

let oneWeekAgo = new Date().getTime() - weekInMilliseconds();

browser.browsingData
  .removePluginData({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

Entfernen Sie alle von Plugins gespeicherten Daten:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removePluginData({}).then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.
