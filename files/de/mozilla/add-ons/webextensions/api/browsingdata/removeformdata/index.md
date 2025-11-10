---
title: browsingData.removeFormData()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeFormData
l10n:
  sourceCommit: b2685e330f887359ec886b08199a22a6fcbe0caf
---

Löscht Daten, die der Browser zum automatischen Ausfüllen von Formularen gespeichert hat.

Sie können den Parameter `removalOptions`, welcher ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt ist, verwenden, um:

- Formulardaten zu löschen, die nach einer bestimmten Zeit eingegeben wurden.
- zu steuern, ob Daten auf Webseiten oder sowohl auf Webseiten als auch in Erweiterungen gelöscht werden.

## Syntax

```js-nolint
let removing = browser.browsingData.removeFormData(
  removalOptions            // RemovalOptions object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, welches verwendet werden kann, um nur Formulardaten zu löschen, die nach einer bestimmten Zeit eingegeben wurden, und um zu steuern, ob Formulardaten auf Webseiten oder sowohl auf Webseiten als auch in Erweiterungen gelöscht werden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der ohne Argument erfüllt wird, wenn das Entfernen abgeschlossen ist. Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Löschen von Formulardaten, die in der letzten Woche gespeichert wurden:

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

Löschen aller gespeicherten Formulardaten:

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
> Diese API basiert auf der [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData)-API von Chromium.
