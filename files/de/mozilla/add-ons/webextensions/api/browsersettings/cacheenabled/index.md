---
title: browserSettings.cacheEnabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/cacheEnabled
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um den Browser-Cache global zu aktivieren oder zu deaktivieren.

Der zugrunde liegende Wert ist ein boolescher Wert.

## Beispiele

Abrufen des aktuellen Wertes dieser Einstellung:

```js
function logResult(result) {
  console.log(`Current value: ${result.value}`);
  console.log(`Current level of control: ${result.levelOfControl}`);
}

browser.browserSettings.cacheEnabled.get({}).then(logResult);
```

Deaktivieren des Browser-Caches:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.cacheEnabled.set({ value: false }).then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
