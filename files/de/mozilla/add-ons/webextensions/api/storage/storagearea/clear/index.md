---
title: StorageArea.clear()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/clear
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Entfernt alle Elemente aus dem Speicherbereich.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let clearing = browser.storage.<storageType>.clear()
```

`<storageType>` ist einer der beschreibbaren Speichertypen — {{WebExtAPIRef("storage.local")}}, {{WebExtAPIRef("storage.session")}}, oder {{WebExtAPIRef("storage.sync")}}

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Operation erfolgreich war. Falls die Operation fehlschlug, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function onCleared() {
  console.log("OK");
}

function onError(e) {
  console.log(e);
}

let clearStorage = browser.storage.local.clear();
clearStorage.then(onCleared, onError);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. Diese Dokumentation ist aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code abgeleitet.
