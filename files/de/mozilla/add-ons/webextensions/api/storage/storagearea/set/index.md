---
title: StorageArea.set()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Speichert ein oder mehrere Elemente im Speicherbereich oder aktualisiert gespeicherte Elemente.

Wenn Sie einen Wert mit dieser API speichern oder aktualisieren, wird das Ereignis {{WebExtAPIRef("storage.onChanged")}} ausgelöst.

Beachten Sie, dass bei der Speicherung von Elementen im [`sync`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync) Speicherbereich der Browser Quoten für die Menge an Daten erzwingt, die jede Erweiterung speichern kann. Siehe [Speicherquoten für synchrone Daten](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync#storage_quotas_for_sync_data).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingItem = browser.storage.<storageType>.set(
  keys             // object
)
```

Wo `<storageType>` einer der beschreibbaren Speichertypen ist — {{WebExtAPIRef("storage.local")}}, {{WebExtAPIRef("storage.session")}} oder {{WebExtAPIRef("storage.sync")}}.

### Parameter

- `keys`

  - : Ein Objekt, das ein oder mehrere Schlüssel/Wert-Paare enthält, die gespeichert werden sollen. Wenn ein Element im Speicher ist, wird dessen Wert aktualisiert.

    Werte können {{Glossary("Primitive", "primitive")}} (wie eine Zahl, Boolean oder String), {{jsxref("Array")}} oder {{jsxref("Object")}} Typen sein.

    Es ist generell nicht möglich, andere Typen zu speichern, wie `Function`, `Date`, `RegExp`, `Set`, `Map`, `ArrayBuffer` usw. Einige nicht unterstützte Typen werden als leeres Objekt wiederhergestellt, während andere dazu führen, dass `set()` einen Fehler auslöst. Das Verhalten ist browserspezifisch.

> [!NOTE]
> Wenn Sie Schlüssel aus dem Speicher entfernen möchten, verwenden Sie {{WebExtAPIRef("storage.storageArea.remove")}}. Wenn Sie einen Wert mit einem leeren Wert überschreiben möchten, verwenden Sie `null`, also `key: null`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ohne Argumente erfüllt wird, wenn die Operation erfolgreich ist. Wenn die Operation fehlschlägt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

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
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API von Chromium. Diese Dokumentation stammt von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
