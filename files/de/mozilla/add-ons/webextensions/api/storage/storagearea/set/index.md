---
title: StorageArea.set()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Speichert ein oder mehrere Elemente im Speicherbereich oder aktualisiert gespeicherte Elemente.

Wenn Sie einen Wert mit dieser API speichern oder aktualisieren, wird das {{WebExtAPIRef("storage.onChanged")}}-Ereignis ausgelöst.

Beachten Sie, dass beim Speichern von Elementen im [`sync`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)-Speicherbereich der Browser Quoten für die Datenmenge durchsetzt, die jede Erweiterung speichern kann. Siehe [Speicherquoten für synchronisierte Daten](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync#storage_quotas_for_sync_data).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingItem = browser.storage.<storageType>.set(
  keys             // object
)
```

`<storageType>` ist einer der beschreibbaren Speicherarten — {{WebExtAPIRef("storage.local")}}, {{WebExtAPIRef("storage.session")}} oder {{WebExtAPIRef("storage.sync")}}.

### Parameter

- `keys`

  - : Ein Objekt, das ein oder mehrere Schlüssel/Wert-Paare enthält, die gespeichert werden sollen. Wenn ein Element im Speicher vorhanden ist, wird dessen Wert aktualisiert.

    Werte können {{Glossary("Primitive", "primitive")}} Typen (wie eine Zahl, boolean oder string), {{jsxref("Array")}}- oder {{jsxref("Object")}}-Typen sein.

    Es ist im Allgemeinen nicht möglich, andere Typen wie `Function`, `Date`, `RegExp`, `Set`, `Map`, `ArrayBuffer` usw. zu speichern. Einige nicht unterstützte Typen werden als leeres Objekt wiederhergestellt, während andere dazu führen, dass `set()` einen Fehler auslöst. Das Verhalten ist browser-spezifisch.

> [!NOTE]
> Wenn Sie Schlüssel aus dem Speicher entfernen möchten, verwenden Sie {{WebExtAPIRef("storage.storageArea.remove")}}. Wenn Sie einen Wert mit einem leeren Wert überschreiben möchten, verwenden Sie `null`, also z.B. `key: null`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ohne Argumente erfüllt wird, wenn die Operation erfolgreich ist. Wenn die Operation fehlschlägt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

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
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
