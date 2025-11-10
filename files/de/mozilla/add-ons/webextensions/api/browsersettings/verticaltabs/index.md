---
title: browserSettings.verticalTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/verticalTabs
l10n:
  sourceCommit: 0883a7eca5c44d65daea8d73163a89d66a8d2f13
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das darstellt, ob der Browser vertikale Tabs aktiviert hat. Der zugrunde liegende Wert des Objekts ist ein boolescher Wert.

## Beispiele

Setzen Sie die Einstellung auf `false`, um zu horizontalen Tabs zurückzukehren:

```js
browser.browserSettings.verticalTabs
  .set({ value: false })
  .then((result) => console.log(`Tabs setting was modified: ${result}`));
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
