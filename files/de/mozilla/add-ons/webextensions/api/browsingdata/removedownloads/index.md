---
title: browsingData.removeDownloads()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeDownloads
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Löscht den Downloadverlauf des Browsers. Beachten Sie, dass dies nicht die heruntergeladenen Objekte selbst löscht, sondern nur die Einträge der Downloads im Browserverlauf.

Sie können den Parameter `removalOptions` verwenden, ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, um:

- Einträge von nach einer bestimmten Zeit heruntergeladenen Objekten zu löschen
- zu steuern, ob nur Einträge von Objekten gelöscht werden sollen, die von normalen Webseiten heruntergeladen wurden, oder auch Einträge von gehosteten Apps und Erweiterungen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removeDownloads(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, mit dem nur Einträge gelöscht werden können, die nach einem bestimmten Zeitpunkt erstellt wurden, und ob nur Einträge von Objekten, die von normalen Webseiten heruntergeladen wurden, gelöscht werden sollen oder auch Einträge von gehosteten Apps und Erweiterungen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn der Löschvorgang abgeschlossen ist. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Löschen Sie Einträge von in der letzten Woche heruntergeladenen Objekten:

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
  .removeDownloads({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

Löschen Sie alle Einträge heruntergeladener Objekte:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeDownloads({}).then(onRemoved, onError);
```

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.
