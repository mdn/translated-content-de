---
title: browserSettings.openUrlbarResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openUrlbarResultsInNewTabs
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist.

Wenn der Benutzer die Adressleiste fokussiert und zu tippen beginnt, bietet der Browser Autovervollständigungsvorschläge an: eine Dropdown-Liste mit Webseiten basierend auf der unvollständigen Eingabe des Benutzers und seinem Browserverlauf.

Ist dieser Wert auf `true` gesetzt, wird der ausgewählte Eintrag in einem neuen Tab geöffnet. Ist der Wert auf `false` gesetzt (Standardeinstellung), wird der Eintrag im aktuellen Tab geöffnet.

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
