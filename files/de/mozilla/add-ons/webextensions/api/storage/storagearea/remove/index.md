---
title: StorageArea.remove()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/remove
l10n:
  sourceCommit: 81c80db5f9f98dd2ac197474829fe52cd75acf1b
---

Entfernt ein oder mehrere Elemente aus dem Speicherbereich.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removingItem = browser.storage.<storageType>.remove(
  keys             // string, or array of strings
)
```

Wobei `<storageType>` einer der beschreibbaren Speicherarten ist: {{WebExtAPIRef("storage.local")}}, {{WebExtAPIRef("storage.session")}}, oder {{WebExtAPIRef("storage.sync")}}.

### Parameter

- `keys`
  - : Ein String oder ein Array von Strings, die den/die Schlüssel des/der zu entfernenden Elements/Elemente darstellen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, ohne dass Argumente übergeben werden, wenn der Vorgang erfolgreich war. Wenn der Vorgang fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
