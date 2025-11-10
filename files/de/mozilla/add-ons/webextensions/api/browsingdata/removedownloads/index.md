---
title: browsingData.removeDownloads()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeDownloads
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Löscht den Downloadverlauf des Browsers. Beachten Sie, dass dabei nicht die heruntergeladenen Objekte selbst gelöscht werden, sondern nur die Download-Einträge im Verlauf des Browsers.

Sie können den Parameter `removalOptions`, ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, verwenden, um:

- Einträge von nach einem bestimmten Zeitpunkt heruntergeladenen Objekten zu löschen
- zu steuern, ob nur Einträge von normal heruntergeladenen Objekten oder auch Einträge von gehosteten Apps und Erweiterungen gelöscht werden sollen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.removeDownloads(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, das verwendet werden kann, um nur Einträge zu löschen, die nach einem bestimmten Zeitpunkt erstellt wurden, und um zu entscheiden, ob nur Einträge von normal heruntergeladenen Objekten oder auch von gehosteten Apps und Erweiterungen gelöscht werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Löschen abgeschlossen ist. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

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

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API von Chromium.
