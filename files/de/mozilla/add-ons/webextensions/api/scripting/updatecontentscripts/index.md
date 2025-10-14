---
title: scripting.updateContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/updateContentScripts
l10n:
  sourceCommit: 425b1e0ef0c91cee5abf780f16452379796c0bd1
---

Aktualisiert registrierte Inhaltsskripte. Wenn es Fehler bei der Skriptanalyse und Dateivalidierung gibt oder wenn die angegebenen IDs nicht existieren, werden keine Skripte aktualisiert.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API aufzurufen, müssen Sie die Berechtigung `"scripting"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben. Um das eingefügte Skript auszuführen, muss die Erweiterung die Berechtigung für die URL der Seite haben, entweder explizit als [host permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder unter Verwendung der [activeTab permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

## Syntax

```js-nolint
await browser.scripting.updateContentScripts(
  scripts         // object
)
```

### Parameter

- `scripts`
  - : `array` von {{WebExtAPIRef("scripting.RegisteredContentScript")}}. Details eines Skriptes, das aktualisiert werden soll. Alle Eigenschaften sind optional, außer `id`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef("scripting.RegisteredContentScript")}} erfüllt wird. Wenn ein Fehler auftritt, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel aktualisiert ein Inhaltsskript, das mit der ID `a-script` registriert ist, indem `allFrames` auf `true` gesetzt wird:

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
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-updateContentScripts) API.
