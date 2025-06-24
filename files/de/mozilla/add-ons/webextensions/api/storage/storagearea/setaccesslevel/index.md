---
title: StorageArea.setAccessLevel()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/setAccessLevel
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Legt das Zugriffslevel für den Speicherbereich fest.

Diese Methode wird nur für den `storage.session` StorageArea unterstützt.

Im Gegensatz zu anderen Speicherbereichen ist `storage.session` nur für privilegierte (vertrauenswürdige) Erweiterungskontexte verfügbar. Diese `setAccessLevel`-Methode wird verwendet, um den Session-Speicherbereich auch für Inhalts-Skripte verfügbar zu machen. Standardmäßig sind alle anderen Speicherbereiche für alle Erweiterungskontexte, einschließlich Inhalts-Skripten, zugänglich.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.storage.<storageType>.setAccessLevel(
  accessLevel             // string
)
```

Wobei `<storageType>` der {{WebExtAPIRef("storage.session")}} Speicherbereichstyp ist.

### Parameter

- `accessLevel`
  - : `String`. Das Zugriffslevel des Speicherbereichs. Mögliche Werte sind `TRUSTED_CONTEXTS` oder `TRUSTED_AND_UNTRUSTED_CONTEXTS`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ohne Argumente erfüllt wird, wenn die Operation erfolgreich war. Wenn die Operation fehlschlug, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API von Chromium. Diese Dokumentation leitet sich von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code ab.
