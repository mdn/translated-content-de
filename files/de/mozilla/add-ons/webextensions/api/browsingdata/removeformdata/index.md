---
title: browsingData.removeFormData()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeFormData
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löscht Daten, die der Browser zum automatischen Ausfüllen von Formularen gespeichert hat.

Sie können den `removalOptions`-Parameter verwenden, der ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt ist, um:

- nur Formulardaten zu löschen, die nach einem bestimmten Zeitpunkt eingegeben wurden
- zu steuern, ob nur Formulardaten gelöscht werden sollen, die auf normalen Webseiten eingegeben wurden, oder ob auch in gehosteten Apps und Erweiterungen eingegebene Daten gelöscht werden sollen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removeFormData(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, das verwendet werden kann, um nur Formulardaten zu löschen, die nach einem bestimmten Zeitpunkt eingegeben wurden, und um zu steuern, ob nur Formulardaten, die auf normalen Webseiten eingegeben wurden, gelöscht werden sollen, oder ob auch in gehosteten Apps und Erweiterungen eingegebene Daten gelöscht werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Entfernen abgeschlossen ist. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Entfernen von Formulardaten, die in der letzten Woche gespeichert wurden:

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
  .removeFormData({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

Entfernen aller gespeicherten Formulardaten:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeFormData({}).then(onRemoved, onError);
```

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.
