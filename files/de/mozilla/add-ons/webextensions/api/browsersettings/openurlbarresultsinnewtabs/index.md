---
title: browserSettings.openUrlbarResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolean ist.

Wenn der Benutzer die Adressleiste fokussiert und zu tippen beginnt, bietet der Browser Autovervollständigungsvorschläge an: eine Dropdown-Liste von Webseiten basierend auf den unvollständigen Eingaben des Benutzers und seinem Browserverlauf.

Wenn auf `true` gesetzt, wird das ausgewählte Element in einem neuen Tab geöffnet, wenn der Benutzer eines dieser Elemente auswählt. Wenn auf `false` (Standard) gesetzt, wird das Element im aktuellen Tab geöffnet.

## Beispiele

Setzen Sie die Einstellung auf `true`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openUrlbarResultsInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
