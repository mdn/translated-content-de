---
title: StorageArea.clear()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/clear
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Entfernt alle Elemente aus dem Speicherbereich.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let clearing = browser.storage.<storageType>.clear()
```

Wobei `<storageType>` einer der beschreibbaren Speichertypen ist — {{WebExtAPIRef("storage.local")}}, {{WebExtAPIRef("storage.session")}} oder {{WebExtAPIRef("storage.sync")}}

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Operation erfolgreich war. Wenn die Operation fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API von Chromium. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
