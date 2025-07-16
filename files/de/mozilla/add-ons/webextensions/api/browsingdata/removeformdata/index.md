---
title: browsingData.removeFormData()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeFormData
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Löscht Daten, die der Browser zum automatischen Ausfüllen von Formularen gespeichert hat.

Sie können den Parameter `removalOptions` verwenden, der ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt ist, um:

- nur Formulardaten zu löschen, die nach einem bestimmten Zeitpunkt eingegeben wurden
- zu steuern, ob nur Formulardaten gelöscht werden, die auf normalen Webseiten eingegeben wurden, oder ob auch Daten gelöscht werden sollen, die in gehosteten Apps und Erweiterungen eingegeben wurden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removeFormData(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt, das verwendet werden kann, um nur Formulardaten zu löschen, die nach einem bestimmten Zeitpunkt eingegeben wurden, und um zu steuern, ob nur Formulardaten gelöscht werden, die auf normalen Webseiten eingegeben wurden, oder ob auch Daten gelöscht werden sollen, die in gehosteten Apps und Erweiterungen eingegeben wurden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Löschung abgeschlossen ist. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Löschen Sie gespeicherte Formulardaten der letzten Woche:

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

Löschen Sie alle gespeicherten Formulardaten:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeFormData({}).then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.
