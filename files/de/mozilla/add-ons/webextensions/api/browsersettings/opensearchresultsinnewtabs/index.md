---
title: browserSettings.openSearchResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein boolescher Wert ist.

Wenn auf `true` gesetzt, werden die Suchergebnisse, wenn der Benutzer einen Begriff im Suchfeld des Browsers auswählt, in einem neuen Tab angezeigt. Wenn auf `false` gesetzt (Standard), werden die Suchergebnisse im aktuellen Tab angezeigt.

Bitte beachten Sie, dass dies das Verhalten beim Auswählen von Elementen in der Omnibox/Awesomebar nicht beeinflusst, sondern nur das dedizierte Suchfeld.

## Browserkompatibilität

{{Compat}}

## Beispiele

Die Einstellung auf `true` setzen:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openSearchResultsInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}
