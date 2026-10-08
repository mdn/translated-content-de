---
title: scripting.unregisterContentScripts()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/unregisterContentScripts
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Hebt die Registrierung eines oder mehrerer Content-Skripte auf.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und ab Firefox 101 verfügbar. Ab Firefox 102 ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, benötigen Sie die [`scripting`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.scripting.unregisterContentScripts(
  scripts         // object
)
```

### Parameter

- `scripts` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ContentScriptFilter")}}. Ein Filter, der die dynamischen Content-Skripte angibt, deren Registrierung aufgehoben werden soll. Wenn er nicht angegeben wird, wird die Registrierung aller dynamischen Content-Skripte aufgehoben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald die Registrierung aller angegebenen Skripte aufgehoben wurde. Wenn ein Fehler auftritt, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel hebt die Registrierung eines Content-Skripts mit der ID `a-script` auf:

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
> Diese API basiert auf der API [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-unregisterContentScripts) von Chromium.
