---
title: browsingData.removePasswords()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removePasswords
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Löscht gespeicherte Passwörter.

Sie können den Parameter `removalOptions` verwenden, welcher ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt ist, um:

- nur Passwörter zu löschen, die nach einem bestimmten Zeitpunkt gespeichert wurden
- zu steuern, ob Passwörter, die auf normalen Webseiten gespeichert wurden, gelöscht werden sollen oder ob auch Passwörter von gehosteten Apps und Erweiterungen gelöscht werden sollen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removePasswords(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}} Objekt, das verwendet werden kann, um nur Passwörter zu löschen, die nach einem bestimmten Zeitpunkt gespeichert wurden, und ob Passwörter, die auf normalen Webseiten gespeichert wurden oder auf gehosteten Apps und Erweiterungen, gelöscht werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente abgeschlossen wird, wenn das Löschen abgeschlossen ist. Falls ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Passwörter entfernen, die in der letzten Woche gespeichert wurden:

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
  .removePasswords({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

Alle gespeicherten Passwörter entfernen:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removePasswords({}).then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.
