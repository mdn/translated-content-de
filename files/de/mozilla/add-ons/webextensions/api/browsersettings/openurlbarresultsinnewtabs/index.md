---
title: browserSettings.openUrlbarResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein Boolean ist.

Wenn der Benutzer die Adressleiste fokussiert und zu tippen beginnt, bietet der Browser Autovervollständigungsvorschläge an: Eine Dropdown-Liste von Webseiten basierend auf den unvollständigen Eingaben des Benutzers und seinem Browserverlauf.

Wenn auf `true` gesetzt, wird das ausgewählte Element in einem neuen Tab geöffnet, wenn der Benutzer eines dieser Elemente auswählt. Wenn auf `false` (Standard) gesetzt, wird das Element im aktuellen Tab geöffnet.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Die Einstellung auf `true` setzen:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openUrlbarResultsInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}
