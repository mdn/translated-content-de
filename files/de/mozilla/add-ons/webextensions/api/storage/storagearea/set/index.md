---
title: StorageArea.set()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Speichert ein oder mehrere Elemente im Speicherbereich oder aktualisiert gespeicherte Elemente.

Wenn Sie einen Wert mit dieser API speichern oder aktualisieren, wird das {{WebExtAPIRef("storage.onChanged")}} Ereignis ausgelöst.

Beachten Sie, dass beim Speichern von Elementen im [`sync`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)-Speicherbereich der Browser Quoten für die Menge der Daten, die jede Erweiterung speichern kann, durchsetzt. Siehe [Speicherquoten für Sync-Daten](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync#storage_quotas_for_sync_data).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingItem = browser.storage.<storageType>.set(
  keys             // object
)
```

`<storageType>` ist einer der beschreibbaren Speichertypen — {{WebExtAPIRef("storage.local")}}, {{WebExtAPIRef("storage.session")}} oder {{WebExtAPIRef("storage.sync")}}.

### Parameter

- `keys`

  - : Ein Objekt, das ein oder mehrere Schlüssel/Wert-Paare enthält, die gespeichert werden sollen. Wenn ein Element im Speicher vorhanden ist, wird sein Wert aktualisiert.

    Werte können [primitive](/de/docs/Glossary/Primitive) (wie Zahl, Boolean oder String), {{jsxref("Array")}} oder {{jsxref("Object")}} Typen sein.

    Im Allgemeinen ist es nicht möglich, andere Typen zu speichern, wie `Function`, `Date`, `RegExp`, `Set`, `Map`, `ArrayBuffer` usw. Einige nicht unterstützte Typen werden als leeres Objekt wiederhergestellt, während andere dazu führen, dass `set()` einen Fehler auslöst. Dieses Verhalten ist browserabhängig.

> [!NOTE]
> Wenn Sie Schlüssel aus dem Speicher entfernen möchten, verwenden Sie {{WebExtAPIRef("storage.storageArea.remove")}}. Wenn Sie einen Wert mit einem leeren Wert überschreiben möchten, verwenden Sie `null`, also `key: null`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird ohne Argumente, wenn die Operation erfolgreich ist. Wenn die Operation fehlschlägt, wird das `Promise` mit einer Fehlermeldung abgelehnt.

## Beispiele

```js
function setItem() {
  console.log("OK");
}

function gotKitten(item) {
  console.log(`${item.kitten.name} has ${item.kitten.eyeCount} eyes`);
}

function gotMonster(item) {
  console.log(`${item.monster.name} has ${item.monster.eyeCount} eyes`);
}

function onError(error) {
  console.log(error);
}

// define 2 objects
let monster = {
  name: "Kraken",
  tentacles: true,
  eyeCount: 10,
};

let kitten = {
  name: "Moggy",
  tentacles: false,
  eyeCount: 2,
};

// store the objects
browser.storage.local.set({ kitten, monster }).then(setItem, onError);

browser.storage.local.get("kitten").then(gotKitten, onError);
browser.storage.local.get("monster").then(gotMonster, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
