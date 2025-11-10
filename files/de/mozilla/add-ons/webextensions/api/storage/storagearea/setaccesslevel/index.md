---
title: StorageArea.setAccessLevel()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/setAccessLevel
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Legt die Zugriffsebene für den Speicherbereich fest.

Diese Methode wird nur für den `storage.session` StorageArea unterstützt.

Im Gegensatz zu anderen Speicherbereichen ist `storage.session` nur für privilegierte (vertrauenswürdige) Erweiterungskontexte verfügbar. Diese `setAccessLevel` Methode wird verwendet, um den Zugriff auf den Sitzungsspeicherbereich auch für Content-Skripte zu ermöglichen. Standardmäßig sind alle anderen Speicherbereiche für alle Erweiterungskontexte, einschließlich Content-Skripten, zugänglich.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.storage.<storageType>.setAccessLevel(
  accessLevel             // string
)
```

Wo `<storageType>` der {{WebExtAPIRef("storage.session")}} Speichertyp ist.

### Parameter

- `accessLevel`
  - : `String`. Die Zugriffsebene des Speicherbereichs. Mögliche Werte sind `TRUSTED_CONTEXTS` oder `TRUSTED_AND_UNTRUSTED_CONTEXTS`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ohne Argumente erfüllt wird, wenn die Operation erfolgreich war. Wenn die Operation fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
