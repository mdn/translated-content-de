---
title: StorageArea.getBytesInUse()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
l10n:
  sourceCommit: 50d87c226cf66d76bb8fac6fdae9592c5c674ad4
---

Ermittelt den Speicherplatzbedarf in Bytes für ein oder mehrere Objekte, die im Speicherbereich gespeichert sind.

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

Dabei ist `<storageType>` einer der Speicherarten — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, oder {{WebExtAPIRef("storage.managed", "managed")}}.

In Firefox kann `<storageType>` nicht {{WebExtAPIRef("storage.local")}} sein, aufgrund von [Bug 1385832](https://bugzil.la/1385832).

### Parameter

- `keys`
  - : Ein Schlüssel (String) oder Schlüssel (ein Array von Strings), um die Objekte zu identifizieren, deren Speicherplatz Sie abrufen möchten. Wenn ein leeres Array übergeben wird, wird 0 zurückgegeben. Wenn Sie `null` oder `undefined` übergeben, gibt die Funktion den von dem gesamten Speicherbereich genutzten Speicherplatz zurück.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Integer, `bytesUsed`, erfüllt wird, der den Speicherplatz repräsentiert, der von den in `keys` spezifizierten Objekten genutzt wird. Wenn der Vorgang fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API von Chromium. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
