---
title: StorageArea.getBytesInUse()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
l10n:
  sourceCommit: 79c20479f582a6cb2df84f51558dcf92fe8ba889
---

Ermittelt die Menge des belegten Speicherplatzes in Bytes, die von einem oder mehreren Elementen im Speicherbereich genutzt werden.

> [!NOTE]
> In Firefox wird diese Methode unterstützt in:
>
> - {{WebExtAPIRef("storage.sync")}}.
> - {{WebExtAPIRef("storage.session")}} ab Firefox 131.
> - {{WebExtAPIRef("storage.local")}} und {{WebExtAPIRef("storage.managed")}} ab Firefox 144.

> [!NOTE]
> `storage.managed.getBytesInUse()` gibt in Chrome und Firefox immer 0 zurück.

## Syntax

```js-nolint
let gettingSpace = browser.storage.<storageType>.getBytesInUse(
  keys                      // null, string, or array of strings
)
```

Wobei `<storageType>` einer der Speichertypen ist — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, oder {{WebExtAPIRef("storage.managed", "managed")}}.

### Parameter

- `keys`
  - : Ein Schlüssel (String) oder Schlüssel (ein Array von Strings), um die Elemente zu identifizieren, deren Speicherplatz Sie abrufen möchten. Wird ein leeres Array übergeben, wird 0 zurückgegeben. Wenn Sie `null` oder `undefined` übergeben, gibt die Funktion den gesamten Speicherplatz des Speicherbereichs zurück.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Integer, `bytesUsed`, erfüllt wird, der den Speicherplatz darstellt, der von den in `keys` angegebenen Objekten genutzt wird. Wenn die Operation fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage)-API von Chromium. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
