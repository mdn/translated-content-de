---
title: browsingData.removeDownloads()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeDownloads
l10n:
  sourceCommit: b2685e330f887359ec886b08199a22a6fcbe0caf
---

Löscht den Download-Verlauf des Browsers. Beachten Sie, dass dies nicht die heruntergeladenen Objekte selbst löscht, sondern nur die Aufzeichnungen der Downloads im Verlauf des Browsers.

Sie können den `removalOptions`-Parameter verwenden, der ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt ist, um:

- Aufzeichnungen von Elementen zu löschen, die nach einer bestimmten Zeit heruntergeladen wurden.
- zu steuern, ob Aufzeichnungen von Elementen gelöscht werden sollen, die von Webseiten oder von Webseiten und Erweiterungen heruntergeladen wurden.

## Syntax

```js-nolint
let removing = browser.browsingData.removeDownloads(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, das verwendet werden kann, um nur Aufzeichnungen zu löschen, die nach einer bestimmten Zeit erstellt wurden, und um zu steuern, ob Aufzeichnungen von Elementen gelöscht werden sollen, die von Webseiten oder von Webseiten und Erweiterungen heruntergeladen wurden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Löschen abgeschlossen ist. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Löschen von Aufzeichnungen der in der letzten Woche heruntergeladenen Objekte:

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

Löschen aller Aufzeichnungen von heruntergeladenen Objekten:

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
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData)-API von Chromium.
