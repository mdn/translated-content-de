---
title: browserSettings.openSearchResultsInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openSearchResultsInNewTabs
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein boolean ist.

Wenn auf `true` gesetzt, werden die Suchergebnisse in einem neuen Tab angezeigt, wenn der Benutzer einen Begriff im Suchfeld des Browsers auswählt. Wenn auf `false` gesetzt (Standard), werden die Suchergebnisse im aktuellen Tab angezeigt.

Beachten Sie, dass dies das Verhalten beim Auswählen von Einträgen aus der Omnibox/Awesomebar nicht beeinflusst, sondern nur das dedizierte Suchfeld.

## Browser-Kompatibilität

{{Compat}}

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
