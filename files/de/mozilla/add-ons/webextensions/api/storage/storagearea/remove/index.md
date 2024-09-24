---
title: StorageArea.remove()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/remove
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
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

`<storageType>` ist einer der beschreibbaren Speicherarten — {{WebExtAPIRef("storage.local")}}, {{WebExtAPIRef("storage.session")}}, oder {{WebExtAPIRef("storage.sync")}}.

### Parameter

- `keys`
  - : Ein String oder ein Array von Strings, das die Schlüssel der zu entfernenden Elemente darstellt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn der Vorgang erfolgreich war. Wenn der Vorgang fehlgeschlagen ist, wird das Promise mit einer Fehlermeldung abgelehnt.

## Kompatibilität mit Browsern

{{Compat}}

## Beispiele

Ein einzelnes Element entfernen:

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

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
