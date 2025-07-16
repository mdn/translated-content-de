---
title: StorageArea.remove()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/remove
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Entfernt ein oder mehrere Elemente aus dem Speicherbereich.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removingItem = browser.storage.<storageType>.remove(
  keys             // string, or array of strings
)
```

Wobei `<storageType>` einer der beschreibbaren Speichertypen ist — {{WebExtAPIRef("storage.local")}}, {{WebExtAPIRef("storage.session")}}, oder {{WebExtAPIRef("storage.sync")}}.

### Parameter

- `keys`
  - : Ein String oder ein Array von Strings, die den oder die Schlüssel der zu entfernenden Elemente darstellen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Operation erfolgreich war. Wenn die Operation fehlgeschlagen ist, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Entfernen eines einzelnen Elements:

```js
function onRemoved() {
  console.log("OK");
}

function onError(e) {
  console.log(e);
}

let removeKitten = browser.storage.sync.remove("kitten");
removeKitten.then(onRemoved, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API von Chromium. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
