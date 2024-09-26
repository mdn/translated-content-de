---
title: scripting.registerContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/registerContentScripts
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Registriert ein oder mehrere Content-Skripte.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die Berechtigung `"scripting"` und die Berechtigung für die URL der Seite haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mithilfe der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

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

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird oder abgelehnt wird, wenn Fehler auftreten. Fehler können während der Skriptanalyse und der Dateiprüfung oder wenn die angegebenen IDs existieren, auftreten. Wenn ein Fehler auftritt, werden keine Skripte registriert.

## Beispiele

Dieses Beispiel registriert ein Content-Skript, das die Datei `"script.js"` einfügt:

```js
const aScript = {
  id: "a-script",
  js: ["script.js"],
  matches: ["https://example.com/*"],
};

try {
  await browser.scripting.registerContentScripts([aScript]);
} catch (err) {
  console.error(`failed to register content scripts: ${err}`);
}
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-registerContentScripts) API von Chromium.