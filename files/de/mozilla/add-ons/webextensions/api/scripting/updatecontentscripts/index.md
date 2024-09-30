---
title: scripting.updateContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/updateContentScripts
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Aktualisiert registrierte Inhalts-Skripte. Wenn während der Skript-Analyse und der Dateiüberprüfung Fehler auftreten oder wenn die angegebenen IDs nicht existieren, werden keine Skripte aktualisiert.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die Berechtigung `"scripting"` und die Berechtigung für die URL der Seite entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mithilfe der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) besitzen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.scripting.updateContentScripts(
  scripts         // object
)
```

### Parameter

- `scripts`
  - : `array` von {{WebExtAPIRef("scripting.RegisteredContentScript")}}. Details eines Skripts, das aktualisiert werden soll. Alle Eigenschaften sind optional, außer `id`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von {{WebExtAPIRef("scripting.RegisteredContentScript")}} erfüllt wird. Tritt ein Fehler auf, wird das Versprechen abgelehnt.

## Beispiele

Dieses Beispiel aktualisiert ein Content-Skript, das mit der ID `a-script` registriert wurde, indem `allFrames` auf `true` gesetzt wird:

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
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-updateContentScripts) API von Chromium.
