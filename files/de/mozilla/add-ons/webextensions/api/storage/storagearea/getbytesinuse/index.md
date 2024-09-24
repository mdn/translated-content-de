---
title: StorageArea.getBytesInUse()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermittelt die Menge an Speicherplatz, in Bytes, die von einem oder mehreren Elementen im Speicherbereich verwendet wird.

Diese Funktion existiert nur in browser.storage.sync.
Sie existiert nicht in browser.storage.local.
Siehe <https://bugzil.la/1385832>

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingSpace = browser.storage.<storageType>.getBytesInUse(
  keys                      // null, string, oder Array von Strings
)
```

`<storageType>` kann nur {{WebExtAPIRef("storage.sync")}} sein, nicht {{WebExtAPIRef("storage.local")}} wegen [diesem Fehler](https://bugzil.la/1385832).

### Parameter

- `keys`
  - : Ein Schlüssel (String) oder Schlüssel (ein Array von Strings), um das oder die Elemente zu identifizieren, deren Speicherplatz Sie abrufen möchten. Wenn ein leeres Array übergeben wird, wird 0 zurückgegeben. Wenn Sie hier `null` oder `undefined` übergeben, gibt die Funktion den von dem gesamten Speicherbereich verwendeten Platz zurück.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Integer, `bytesUsed`, erfüllt wird, der den von den in `keys` angegebenen Objekten verwendeten Speicherplatz repräsentiert. Wenn die Operation fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API von Chromium. Diese Dokumentation basiert auf [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
