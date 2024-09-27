---
title: StorageArea.setAccessLevel()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/setAccessLevel
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Setzt die Zugriffsberechtigung für den Speicherbereich.

Diese Methode wird nur für den `storage.session` Speicherbereich unterstützt.

Im Gegensatz zu anderen Speicherbereichen ist `storage.session` nur für privilegierte (vertrauenswürdige) Erweiterungskontexte verfügbar. Diese `setAccessLevel`-Methode wird verwendet, um den Sitzungsspeicherbereich auch für Inhalts-Skripte zugänglich zu machen. Standardmäßig sind alle anderen Speicherbereiche für alle Erweiterungskontexte zugänglich, einschließlich Inhalts-Skripte.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.storage.<storageType>.setAccessLevel(
  accessLevel             // string
)
```

`<storageType>` kann der {{WebExtAPIRef("storage.session")}} Speichertyp sein.

### Parameter

- `accessLevel`

  - : `String`. Das Zugriffslevel des Speicherbereichs. Mögliche Werte sind `TRUSTED_CONTEXTS` oder `TRUSTED_AND_UNTRUSTED_CONTEXTS`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ohne Argumente erfüllt wird, wenn der Vorgang erfolgreich war. Wenn der Vorgang fehlschlug, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. Diese Dokumentation ist von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code abgeleitet.
