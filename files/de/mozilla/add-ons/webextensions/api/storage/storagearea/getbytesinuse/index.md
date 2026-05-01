---
title: StorageArea.getBytesInUse()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
l10n:
  sourceCommit: 81c80db5f9f98dd2ac197474829fe52cd75acf1b
---

Ermittelt die Menge des Speicherplatzes, in Bytes, der von einem oder mehreren im Speicherbereich gespeicherten Elementen genutzt wird.

> [!NOTE]
> In Firefox wird diese Methode unterstützt in:
>
> - {{WebExtAPIRef("storage.sync")}}.
> - {{WebExtAPIRef("storage.session")}} ab Firefox 131.
> - {{WebExtAPIRef("storage.local")}} und {{WebExtAPIRef("storage.managed")}} ab Firefox 144.

> [!NOTE]
> `storage.managed.getBytesInUse()` gibt immer 0 zurück, zumindest in Chrome und Firefox.

## Syntax

```js-nolint
let gettingSpace = browser.storage.<storageType>.getBytesInUse(
  keys                      // null, string, or array of strings
)
```

Dabei ist `<storageType>` einer der Speichertypen: {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, oder {{WebExtAPIRef("storage.managed", "managed")}}.

### Parameter

- `keys`
  - : Ein Schlüssel (String) oder Schlüssel (ein Array von Strings), um die Elemente zu identifizieren, deren Speicherplatz Sie abrufen möchten. Wenn ein leeres Array übergeben wird, wird 0 zurückgegeben. Wenn Sie `null` oder `undefined` übergeben, gibt die Funktion den Speicherplatz zurück, der vom gesamten Speicherbereich genutzt wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der mit einem Integer, `bytesUsed`, erfüllt wird, der den Speicherplatz darstellt, der von den in `keys` angegebenen Objekten genutzt wird. Wenn der Vorgang fehlschlägt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API von Chromium. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
