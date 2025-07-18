---
title: StorageArea.getBytesInUse()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ermittelt die Menge an Speicherplatz, in Bytes, die von einem oder mehreren Elementen im Speicherbereich genutzt wird.

> [!NOTE]
> In Firefox wird diese Methode:
>
> - in {{WebExtAPIRef("storage.sync")}} unterstützt.
> - ab Firefox 131 in {{WebExtAPIRef("storage.session")}} unterstützt.
> - in {{WebExtAPIRef("storage.local")}} nicht unterstützt, siehe [Firefox-Bug 1385832](https://bugzil.la/1385832).
> - in {{WebExtAPIRef("storage.managed")}} nicht bereitgestellt.

Dies ist eine asynchrone Methode, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingSpace = browser.storage.<storageType>.getBytesInUse(
  keys                      // null, string, or array of strings
)
```

Dabei ist `<storageType>` einer der Speichertypen — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}} oder {{WebExtAPIRef("storage.managed", "managed")}}.

In Firefox kann `<storageType>` nicht {{WebExtAPIRef("storage.local")}} sein, aufgrund von [Bug 1385832](https://bugzil.la/1385832).

### Parameter

- `keys`
  - : Ein Schlüssel (String) oder Schlüssel (ein Array von Strings), um die Objekte zu identifizieren, deren Speicherplatz Sie abrufen möchten. Wenn ein leeres Array übergeben wird, wird 0 zurückgegeben. Wenn Sie `null` oder `undefined` übergeben, gibt die Funktion den vom gesamten Speicherbereich genutzten Speicherplatz zurück.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Ganzzahl, `bytesUsed`, erfüllt wird und den genutzten Speicherplatz der in `keys` angegebenen Objekte darstellt. Wenn die Operation fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API von Chromium. Diese Dokumentation wird aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code abgeleitet.
