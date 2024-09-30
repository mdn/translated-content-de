---
title: StorageArea.getBytesInUse()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermittelt die Menge des Speicherplatzes in Byte, die von einem oder mehreren Elementen im Speicherbereich verwendet wird.

Diese Funktion existiert nur in `browser.storage.sync`.
Sie existiert nicht in `browser.storage.local`.
Siehe <https://bugzil.la/1385832>

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingSpace = browser.storage.<storageType>.getBytesInUse(
  keys                      // null, string, or array of strings
)
```

`<storageType>` kann nur {{WebExtAPIRef("storage.sync")}} sein, nicht {{WebExtAPIRef("storage.local")}}, aufgrund dieses [Bugs](https://bugzil.la/1385832).

### Parameter

- `keys`
  - : Ein Schlüssel (String) oder Schlüssel (ein Array von Strings), um das oder die Elemente zu identifizieren, deren Speicherplatz Sie abrufen möchten. Wenn ein leeres Array übergeben wird, wird 0 zurückgegeben. Wenn Sie hier `null` oder `undefined` übergeben, gibt die Funktion den vom gesamten Speicherbereich genutzten Platz zurück.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Ganzzahlwert, `bytesUsed`, erfüllt wird, der den Speicherplatz repräsentiert, der von den in `keys` angegebenen Objekten verwendet wird. Wenn die Operation fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API von Chromium. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
