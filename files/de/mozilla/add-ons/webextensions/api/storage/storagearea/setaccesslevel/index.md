---
title: StorageArea.setAccessLevel()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/setAccessLevel
l10n:
  sourceCommit: dd98fd4cac10cfa3f516536aaefe523170d6d3e4
---

{{AddonSidebar}}

Legt die Zugriffsebene für den Speicherbereich fest.

Diese Methode wird nur für den `storage.session` StorageArea unterstützt.

Im Gegensatz zu anderen Speicherbereichen ist `storage.session` nur in privilegierten (vertrauenswürdigen) Erweiterungskontexten verfügbar. Diese `setAccessLevel`-Methode wird verwendet, um den Sitzungspeicherbereich auch für Inhaltsskripte zugänglich zu machen. Standardmäßig sind alle anderen Speicherbereiche in allen Erweiterungskontexten, einschließlich Inhaltsskripten, verfügbar.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.storage.<storageType>.setAccessLevel(
  accessLevel             // string
)
```

Wo `<storageType>` der {{WebExtAPIRef("storage.session")}}-Speichertyp ist.

### Parameter

- `accessLevel`

  - : `String`. Die Zugriffsebene des Speicherbereichs. Mögliche Werte sind `TRUSTED_CONTEXTS` oder `TRUSTED_AND_UNTRUSTED_CONTEXTS`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ohne Argumente erfüllt wird, wenn die Operation erfolgreich war. Wenn die Operation fehlgeschlagen ist, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API von Chromium. Diese Dokumentation wird aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code abgeleitet.
