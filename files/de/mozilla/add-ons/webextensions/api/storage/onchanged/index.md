---
title: storage.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/storage/onChanged
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ausgelöst, wenn {{WebExtAPIRef('storage.StorageArea.set','storageArea.set')}}, {{WebExtAPIRef('storage.StorageArea.remove','storageArea.remove')}} oder {{WebExtAPIRef('storage.StorageArea.clear','storageArea.clear')}} gegen einen Speicherbereich ausgeführt wird, und liefert Details nur zu den geänderten Schlüsseln zurück. Ein Rückruf wird nur aufgerufen, wenn es Änderungen an den zugrunde liegenden Daten gibt.

> [!NOTE]
> In Firefox enthält die zurückgegebene Information alle Schlüssel innerhalb des Speicherbereichs, gegen den {{WebExtAPIRef('storage.StorageArea.set','storageArea.set')}} ausgeführt wurde, unabhängig davon, ob sie sich geändert haben oder nicht. Ein Rückruf kann auch aufgerufen werden, wenn es keine Änderung der zugrunde liegenden Daten gibt. Details der geänderten Elemente finden Sie, indem Sie jedes zurückgegebene Schlüssel-{{WebExtAPIRef('storage.StorageChange')}}-Objekt untersuchen. Siehe [Firefox Bug 1833153](https://bugzil.la/1833153).

## Syntax

```js-nolint
browser.storage.onChanged.addListener(listener)
browser.storage.onChanged.removeListener(listener)
browser.storage.onChanged.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zuzuhören. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüfen, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn zugehört wird, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `changes`
      - : `object`. Objekt, das die Änderung beschreibt. Der Name jeder Eigenschaft ist der Name jedes Schlüssels. Der Wert jedes Schlüssels ist ein {{WebExtAPIRef('storage.StorageChange')}}-Objekt, das die Änderung dieses Elements beschreibt.
    - `areaName`
      - : `string`. Der Name des Speicherbereichs (`"sync"`, `"local"` oder `"managed"`), in dem die Änderungen vorgenommen wurden.

## Beispiele

```js
/*
Log the storage area that changed,
then for each item changed,
log its old value and its new value.
*/
function logStorageChange(changes, area) {
  console.log(`Change in storage area: ${area}`);

  const changedItems = Object.keys(changes);

  for (const item of changedItems) {
    console.log(`${item} has changed:`);
    console.log("Old value: ", changes[item].oldValue);
    console.log("New value: ", changes[item].newValue);
  }
}

browser.storage.onChanged.addListener(logStorageChange);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#event-onChanged)-API von Chromium. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
