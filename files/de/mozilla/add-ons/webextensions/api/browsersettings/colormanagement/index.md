---
title: browserSettings.colorManagement
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/colorManagement
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet wird, um die Farbeinstellungen des Browsers abzufragen und einzustellen.

Standardmäßig wendet Firefox Farbmanagement auf markierte Medien an und verwendet für nicht markierte Medien sRGB als Standardeinstellung. Dieses Verhalten bedeutet, dass einige nicht markierte Medien, wie die in Animationen und Filmproduktionen verwendeten, unerwünschte Farbkorrekturen erfahren können. Verwenden Sie diese Einstellungen, um dies zu verhindern.

Das Objekt hat die folgenden Eigenschaften:

- `mode`
  - : Ein String, der den Modus darstellt, der für das Farbmanagement verwendet wird. Gültige Werte sind `off`, `full` und `tagged_only`.
- `useNativeSRGB`
  - : Ein boolscher Wert, der angibt, ob das integrierte sRGB-Farbmanagement verwendet wird oder nicht.
- `useWebRenderCompositor`
  - : Ein boolscher Wert, der angibt, ob der WebRender-Compositor verwendet wird oder nicht.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Farbmodus auf "full" setzen:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.colorManagement.mode
  .set({ value: "full" })
  .then(logResult);
```

Den nativen sRGB-Farbverwaltungsmodus abrufen:

```js
function logResult(result) {
  console.log(`Current useNativeSRGB value: ${result.value}`);
}

browser.browserSettings.colorManagement.useNativeSRGB.get({}).then(logResult);
```

{{WebExtExamples}}
