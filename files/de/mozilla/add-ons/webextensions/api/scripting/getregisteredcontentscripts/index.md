---
title: scripting.getRegisteredContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/getRegisteredContentScripts
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Gibt alle mit {{WebExtAPIRef("scripting.registerContentScripts()")}} registrierten Content Scripts zurück oder, wenn ein Filter verwendet wird, eine Teilmenge der registrierten Skripte.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und ab Firefox 101 verfügbar. Ab Firefox 102 ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, benötigen Sie die [`scripting`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Um Skripte auszuführen, muss die Erweiterung über eine Berechtigung für die URL der Seite verfügen – entweder ausdrücklich als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder über die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let scripts = await browser.scripting.getRegisteredContentScripts(
  filter          // object
)
```

### Parameter

- `filter` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ContentScriptFilter")}}. Ein Filter für die zurückzugebenden Details der registrierten Skripte.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef("scripting.RegisteredContentScript")}} erfüllt wird. Tritt ein Fehler auf, wird das Promise zurückgewiesen.

## Beispiele

Dieses Beispiel gibt alle registrierten Content Scripts zurück:

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
> Diese API basiert auf der [`chrome.scripting`-API](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-getRegisteredContentScripts) von Chromium.
