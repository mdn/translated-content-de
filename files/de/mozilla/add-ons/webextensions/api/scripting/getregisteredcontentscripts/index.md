---
title: scripting.getRegisteredContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/getRegisteredContentScripts
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Gibt alle Inhalts-Skripte zurück, die mit {{WebExtAPIRef("scripting.registerContentScripts()")}} registriert wurden, oder eine Teilmenge der registrierten Skripte, wenn ein Filter verwendet wird.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die `"scripting"`- [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL der Seite haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder unter Verwendung der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let scripts = await browser.scripting.getRegisteredContentScripts(
  filter          // object
)
```

### Parameter

- `filter` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ContentScriptFilter")}}. Ein Filter für die registrierten Skript-Details, die zurückgegeben werden sollen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef("scripting.RegisteredContentScript")}} erfüllt wird. Wenn ein Fehler auftritt, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel gibt alle registrierten Inhalts-Skripte zurück:

```js
// Register two content scripts.
await browser.scripting.registerContentScripts([
  {
    id: "script-1",
    js: ["script-1.js"],
    matches: ["*://example.com/*"],
  },
  {
    id: "script-2",
    js: ["script-2.js"],
    matches: ["*://example.com/*"],
  },
]);

// Retrieve all content scripts.
let scripts = await browser.scripting.getRegisteredContentScripts();
console.log(scripts.map((script) => script.id)); // ["script-1", "script-2"]

// Only retrieve the second script.
scripts = await browser.scripting.getRegisteredContentScripts({
  ids: ["script-2"],
});
console.log(scripts.map((script) => script.id)); // ["script-2"]
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-getRegisteredContentScripts) API.
