---
title: browsingData.remove()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/remove
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Entfernt die angegebenen Browserdaten.

Die zu entfernenden Browserdaten werden in der `dataTypes`-Option spezifiziert, die ein {{WebExtAPIRef("browsingData.DataTypeSet")}}-Objekt ist.

Sie können die `removalOptions`-Option verwenden, die ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt ist, um zu steuern, wie weit in die Vergangenheit die Daten entfernt werden sollen und ob die Daten nur von normalen Webseiten oder auch von gehosteten Apps und Erweiterungen entfernt werden sollen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.browsingData.remove(
  removalOptions,            // RemovalOptions object
  dataTypes                  // DataTypeSet object
)
```

### Parameter

- `removalOptions`
  - : `object`. Ein {{WebExtAPIRef("browsingData.RemovalOptions")}}-Objekt, das verwendet werden kann, um zu steuern, wie weit in die Vergangenheit die Daten entfernt werden sollen und ob die Daten von gehosteten Web-Apps und Erweiterungen oder nur von normalen Webseiten entfernt werden sollen.
- `dataTypes`
  - : `object`. Ein {{WebExtAPIRef("browsingData.DataTypeSet")}}-Objekt, das die zu entfernenden Datentypen beschreibt (z. B. Verlauf, Downloads, …).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Entfernung abgeschlossen ist. Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Entfernen Sie den Download-Verlauf und den Browserverlauf der letzten Woche:

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
  .remove({ since: oneWeekAgo }, { downloads: true, history: true })
  .then(onRemoved, onError);
```

Entfernen Sie alle Download- und Browserverläufe:

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData
  .remove({}, { downloads: true, history: true })
  .then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium [`chrome.browsingData`](https://developer.chrome.com/docs/extensions/reference/api/browsingData) API.
