---
title: browserSettings.openSearchResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs
l10n:
  sourceCommit: f0179562ad8e2a4dd1f0916c529792198d7e06b2
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolescher Ausdruck ist.

Wenn auf `true` gesetzt, werden die Suchergebnisse in einem neuen Tab angezeigt, wenn der Benutzer einen Begriff im Suchfeld des Browsers auswählt. Wenn auf `false` (der Standardwert) gesetzt, werden die Suchergebnisse im aktuellen Tab angezeigt.

Beachten Sie, dass dies das Verhalten beim Auswählen von Elementen aus der Omnibox/Awesomebar nicht beeinflusst, sondern nur das dedizierte Suchfeld.

## Beispiele

Setzen Sie die Einstellung auf `true`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openSearchResultsInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
