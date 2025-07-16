---
title: StorageArea.getBytesInUse()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ermittelt die Menge an Speicherplatz in Bytes, die von einem oder mehreren im Speicherbereich gespeicherten Elementen verwendet wird.

> [!NOTE]
> In Firefox wird diese Methode:
>
> - in {{WebExtAPIRef("storage.sync")}} unterstützt.
> - ab Firefox 131 in {{WebExtAPIRef("storage.session")}} unterstützt.
> - nicht in {{WebExtAPIRef("storage.local")}} unterstützt, siehe [Firefox-Bug 1385832](https://bugzil.la/1385832).
> - nicht in {{WebExtAPIRef("storage.managed")}} bereitgestellt.

Dies ist eine asynchrone Methode, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingSpace = browser.storage.<storageType>.getBytesInUse(
  keys                      // null, string, or array of strings
)
```

Dabei ist `<storageType>` einer der Speichertypen — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}} oder {{WebExtAPIRef("storage.managed", "managed")}}.

In Firefox kann `<storageType>` wegen [Bug 1385832](https://bugzil.la/1385832) nicht {{WebExtAPIRef("storage.local")}} sein.

### Parameter

- `keys`
  - : Ein Schlüssel (String) oder Schlüssel (ein Array von Strings), um die Elemente zu identifizieren, deren Speicherplatz Sie abrufen möchten. Wenn ein leeres Array übergeben wird, wird 0 zurückgegeben. Wenn Sie `null` oder `undefined` übergeben, gibt die Funktion den von dem gesamten Speicherbereich verwendeten Speicherplatz zurück.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Integer, `bytesUsed`, erfüllt wird. Dieser repräsentiert den von den in `keys` angegebenen Objekten verwendeten Speicherplatz. Wenn die Operation fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage)-API von Chromium. Diese Dokumentation leitet sich von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code ab.
