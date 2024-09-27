---
title: browserSettings.openUrlbarResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolescher Wert ist.

Wenn der Benutzer die Adressleiste fokussiert und zu tippen beginnt, bietet der Browser Autovervollständigungsvorschläge an: eine Dropdown-Liste von Webseiten basierend auf der unvollständigen Eingabe des Benutzers und dessen Browser-Verlauf.

Ist der Wert auf `true` gesetzt, wird das ausgewählte Element in einem neuen Tab geöffnet. Wenn er auf `false` gesetzt ist (Standard), wird das Element im aktuellen Tab geöffnet.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Einstellung auf `true` setzen:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openUrlbarResultsInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}
