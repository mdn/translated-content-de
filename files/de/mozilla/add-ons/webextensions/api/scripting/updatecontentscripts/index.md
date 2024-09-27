---
title: scripting.updateContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/updateContentScripts
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Aktualisiert registrierte Content-Skripte. Wenn es während der Skriptanalyse und Dateiprüfung zu Fehlern kommt oder die angegebenen IDs nicht existieren, werden keine Skripte aktualisiert.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie über die Berechtigung `"scripting"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL der Seite verfügen, entweder explizit als [host permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder unter Verwendung der [activeTab permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.scripting.updateContentScripts(
  scripts         // object
)
```

### Parameter

- `scripts`
  - : `Array` von {{WebExtAPIRef("scripting.RegisteredContentScript")}}. Details eines Skripts, das aktualisiert werden soll. Alle Eigenschaften sind optional, außer `id`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef("scripting.RegisteredContentScript")}} erfüllt wird. Wenn ein Fehler auftritt, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel aktualisiert ein registriertes Content-Skript mit der ID `a-script`, indem `allFrames` auf `true` gesetzt wird:

```js
try {
  await browser.scripting.registerContentScripts([
    {
      id: "a-script",
      js: ["script.js"],
      matches: ["*://example.org/*"],
    },
  ]);

  // Update content script registered before to allow execution
  // in all frames:
  await browser.scripting.updateContentScripts([
    {
      id: "a-script",
      allFrames: true,
    },
  ]);
} catch (err) {
  console.error(`failed to register or update content scripts: ${err}`);
}
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-updateContentScripts) von Chromium.
