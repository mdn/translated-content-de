---
title: browsingData.removePasswords()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removePasswords
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Löscht gespeicherte Passwörter.

Sie können den Parameter `removalOptions`, ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, verwenden, um:

- nur Passwörter zu löschen, die nach einem bestimmten Zeitpunkt gespeichert wurden
- zu steuern, ob Passwörter gelöscht werden sollen, die auf normalen Webseiten gespeichert wurden oder ob Passwörter gelöscht werden sollen, die in gehosteten Apps und Erweiterungen gespeichert wurden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removePasswords(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, das verwendet werden kann, um nur Passwörter zu löschen, die nach einem bestimmten Zeitpunkt gespeichert wurden, und ob Passwörter gelöscht werden sollen, die auf normalen Webseiten gespeichert wurden oder ob Passwörter gelöscht werden sollen, die in gehosteten Apps und Erweiterungen gespeichert wurden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Entfernen abgeschlossen ist. Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Entfernen Sie Passwörter, die in der letzten Woche gespeichert wurden:

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

Entfernen Sie alle gespeicherten Passwörter:

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
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.
