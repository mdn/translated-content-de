---
title: scripting.registerContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/registerContentScripts
l10n:
  sourceCommit: 425b1e0ef0c91cee5abf780f16452379796c0bd1
---

Registriert ein oder mehrere Inhalts-Skripte.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API aufzurufen, müssen Sie die `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben. Um das injizierte Skript auszuführen, muss die Erweiterung über eine Berechtigung für die URL der Seite verfügen, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder unter Verwendung der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

## Syntax

```js-nolint
await browser.scripting.registerContentScripts(
  scripts         // array
)
```

### Parameter

- `scripts`
  - : `array` von {{WebExtAPIRef("scripting.RegisteredContentScript")}}. Eine Liste von Skripten, die registriert werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird oder abgelehnt wird, wenn Fehler auftreten. Fehler können während der Skript-Analyse und Datei-Validierung auftreten oder wenn die angegebenen IDs existieren. Wenn ein Fehler auftritt, werden keine Skripte registriert.

## Beispiele

Dieses Beispiel registriert ein Inhalts-Skript, das die Datei `"script.js"` injiziert:

```js
const script = {
  id: "a-script",
  js: ["script.js"],
  matches: ["https://example.com/*"],
};

try {
  await browser.scripting.registerContentScripts([script]);
} catch (err) {
  console.error(`failed to register content scripts: ${err}`);
}
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-registerContentScripts) API.
