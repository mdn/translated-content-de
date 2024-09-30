---
title: scripting.unregisterContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/unregisterContentScripts
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Registriert einen oder mehrere Inhaltsskripte ab.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu nutzen, müssen Sie die `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL der Seite haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mit der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.scripting.unregisterContentScripts(
  scripts         // object
)
```

### Parameter

- `scripts` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ContentScriptFilter")}}. Ein Filter zur Identifizierung der dynamischen Inhaltsskripte, die abgeriegelt werden sollen. Wenn nicht angegeben, werden alle dynamischen Inhaltsskripte abgeriegelt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn alle Skripte abgeriegelt sind. Tritt ein Fehler auf, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel registriert ein registriertes Inhaltsskript mit der ID `a-script` ab:

```js
try {
  await browser.scripting.unregisterContentScripts({
    ids: ["a-script"],
  });
} catch (err) {
  console.error(`failed to unregister content scripts: ${err}`);
}
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-unregisterContentScripts) API von Chromium.
