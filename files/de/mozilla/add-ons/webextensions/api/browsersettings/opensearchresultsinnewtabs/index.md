---
title: browserSettings.openSearchResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein boolescher Wert ist.

Wenn auf `true` gesetzt, werden die Suchergebnisse in einem neuen Tab angezeigt, wenn der Benutzer einen Begriff im Suchfeld des Browsers auswählt. Wenn auf `false` (die Standardeinstellung) gesetzt, werden die Suchergebnisse im aktuellen Tab angezeigt.

Beachten Sie, dass dies das Verhalten beim Auswählen von Elementen aus der Omnibox/Awesomebar nicht beeinflusst, sondern nur das dedizierte Suchfeld.

## Beispiele

Stellen Sie die Einstellung auf `true`:

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
