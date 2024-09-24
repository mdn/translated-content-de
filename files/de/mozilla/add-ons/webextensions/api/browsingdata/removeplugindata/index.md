---
title: browsingData.removePluginData()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removePluginData
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löscht Daten, die von Browser-Plugins gespeichert wurden.

Sie können den Parameter `removalOptions` verwenden, welcher ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt ist, um:

- nur Plugin-Daten zu löschen, die nach einem bestimmten Zeitpunkt gespeichert wurden
- zu steuern, ob nur Daten gelöscht werden sollen, die von Plugins in normalen Webseiten gespeichert wurden oder auch Daten von Plugins, die in gehosteten Apps und Erweiterungen betrieben werden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removePluginData(
  removalOptions            // RemovalOptions-Objekt
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, das verwendet werden kann, um nur Plugin-Daten zu löschen, die nach einem bestimmten Zeitpunkt gespeichert wurden, und ob nur Daten von Plugins gelöscht werden sollen, die in normalen Webseiten betrieben werden, oder auch Daten von Plugins, die in gehosteten Apps und Erweiterungen betrieben werden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Löschen abgeschlossen ist. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Daten, die von Plugins in der letzten Woche gespeichert wurden, entfernen:

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

Alle Daten, die von Plugins gespeichert wurden, entfernen:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removePluginData({}).then(onRemoved, onError);
```

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.
