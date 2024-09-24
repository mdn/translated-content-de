---
title: StorageArea.getBytesInUse()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
l10n:
  sourceCommit: dd98fd4cac10cfa3f516536aaefe523170d6d3e4
---

{{AddonSidebar}}

Ermittelt den Speicherplatz in Bytes, der von einem oder mehreren Elementen im Speicherbereich genutzt wird.

> [!NOTE]
> In Firefox wird diese Methode:
>
> - in {{WebExtAPIRef("storage.sync")}} unterstützt.
> - ab Firefox 131 in {{WebExtAPIRef("storage.session")}} unterstützt.
> - nicht in {{WebExtAPIRef("storage.local")}} unterstützt, siehe [Firefox Fehler 1385832](https://bugzil.la/1385832).
> - nicht in {{WebExtAPIRef("storage.managed")}} bereitgestellt.

Dies ist eine asynchrone Methode, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingSpace = browser.storage.<storageType>.getBytesInUse(
  keys                      // null, string, or array of strings
)
```

Wobei `<storageType>` einer der Speichertypen ist — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, oder {{WebExtAPIRef("storage.managed", "managed")}}.

In Firefox kann `<storageType>` nicht {{WebExtAPIRef("storage.local")}} sein, aufgrund von [Fehler 1385832](https://bugzil.la/1385832).

### Parameter

- `keys`
  - : Ein Schlüssel (string) oder Schlüssel (ein Array von Strings), um die Elemente zu identifizieren, deren Speicherplatz Sie abrufen möchten. Wenn ein leeres Array übergeben wird, wird 0 zurückgegeben. Wenn Sie `null` oder `undefined` übergeben, gibt die Funktion den Speicherplatz zurück, der vom gesamten Speicherbereich genutzt wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Integer, `bytesUsed`, erfüllt wird. Dieser repräsentiert den Speicherplatz, der von den in `keys` angegebenen Objekten genutzt wird. Wenn die Operation fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage). Diese Dokumentation stammt von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
