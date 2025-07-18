---
title: scripting.unregisterContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/unregisterContentScripts
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Hebt die Registrierung eines oder mehrerer Content-Skripte auf.

> [!NOTE]
> Diese Methode ist ab Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die `"scripting"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) sowie die Berechtigung für die URL der Seite besitzen, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mithilfe der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.scripting.unregisterContentScripts(
  scripts         // object
)
```

### Parameter

- `scripts` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ContentScriptFilter")}}. Ein Filter, um die dynamischen Content-Skripte zu identifizieren, die aufgehoben werden sollen. Wenn nicht angegeben, werden alle dynamischen Content-Skripte aufgehoben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn alle Skripte aufgehoben sind. Falls ein Fehler auftritt, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel hebt die Registrierung eines registrierten Content-Skripts mit der ID `a-script` auf:

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
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-unregisterContentScripts)-API von Chromium.
