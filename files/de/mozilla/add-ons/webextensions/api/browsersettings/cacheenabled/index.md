---
title: browserSettings.cacheEnabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/cacheEnabled
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um den Browser-Cache global zu aktivieren oder zu deaktivieren.

Der zugrundeliegende Wert ist ein boolean.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Aktuellen Wert dieser Einstellung abrufen:

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
