---
title: scripting.registerContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/registerContentScripts
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Registriert ein oder mehrere Content-Skripte.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und ab Firefox 101 verfügbar. Ab Firefox 102 ist sie auch in Manifest V2 verfügbar.

Um diese API aufzurufen, benötigen Sie die [`scripting`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Damit das eingefügte Skript ausgeführt werden kann, muss die Erweiterung über eine Berechtigung für die URL der Seite verfügen, entweder ausdrücklich als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder über die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission).

## Syntax

```js-nolint
await browser.scripting.registerContentScripts(
  scripts         // array
)
```

### Parameter

- `scripts`
  - : `array` von {{WebExtAPIRef("scripting.RegisteredContentScript")}}. Eine Liste der zu registrierenden Skripte.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt oder bei Fehlern abgelehnt wird. Fehler können beim Parsen von Skripten und beim Validieren von Dateien auftreten oder wenn die angegebenen IDs bereits existieren. Tritt ein Fehler auf, wird keines der Skripte registriert.

## Beispiele

Dieses Beispiel registriert ein Content-Skript, das die Datei `"script.js"` einfügt:

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
> Diese API basiert auf der [`chrome.scripting`-API](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-registerContentScripts) von Chromium.
