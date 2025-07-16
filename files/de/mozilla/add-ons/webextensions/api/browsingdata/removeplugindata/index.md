---
title: browsingData.removePluginData()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removePluginData
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Löscht Daten, die von Browser-Plugins gespeichert wurden.

Sie können den Parameter `removalOptions` verwenden, der ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt ist, um:

- nur die Plugin-Daten zu löschen, die nach einer bestimmten Zeit gespeichert wurden
- zu steuern, ob nur Daten von Plugins gelöscht werden, die in normalen Webseiten ausgeführt werden, oder ob auch Daten von Plugins gelöscht werden sollen, die in gehosteten Apps und Erweiterungen ausgeführt werden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removePluginData(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, das verwendet werden kann, um nur die Plugin-Daten zu löschen, die nach einer bestimmten Zeit gespeichert wurden, und ob nur Daten von Plugins gelöscht werden sollen, die in normalen Webseiten ausgeführt werden, oder auch Daten von Plugins, die in gehosteten Apps und Erweiterungen laufen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Entfernen beendet ist. Wenn ein Fehler auftritt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

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

Entfernen Sie alle Daten, die von Plugins gespeichert wurden:

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
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData)-API von Chromium.
