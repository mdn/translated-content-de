---
title: browserSettings.openSearchResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein boolean ist.

Wenn auf `true` gesetzt, werden die Suchergebnisse in einem neuen Tab angezeigt, wenn der Benutzer einen Begriff im Suchfeld des Browsers auswählt. Wenn auf `false` (die Standardeinstellung) gesetzt, werden die Suchergebnisse im aktuellen Tab angezeigt.

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
