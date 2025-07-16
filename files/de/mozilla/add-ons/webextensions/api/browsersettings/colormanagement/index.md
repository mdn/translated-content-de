---
title: browserSettings.colorManagement
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/colorManagement
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet wird, um die Farbmanagement-Funktionen des Browsers abzufragen und einzustellen.

Standardmäßig wendet Firefox Farbmanagement auf markierte Medien an und setzt nicht markierte Medien auf sRGB. Dieses Verhalten bedeutet, dass einige nicht markierte Medien, wie sie in der Animation und Filmproduktion verwendet werden, unerwünschte Farbkorrekturen erfahren können. Verwenden Sie diese Einstellungen, um dies zu verhindern.

Das Objekt hat folgende Eigenschaften:

- `mode`
  - : Ein String, der den Modus für das Farbmanagement repräsentiert. Gültige Werte sind `off`, `full` und `tagged_only`.
- `useNativeSRGB`
  - : Ein Boolean, der darstellt, ob das integrierte sRGB-Farbmanagement verwendet wird.
- `useWebRenderCompositor`
  - : Ein Boolean, der darstellt, ob der WebRender-Kompositor verwendet wird.

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

Den nativen sRGB-Farbmanagement-Modus abrufen:

```js
function logResult(result) {
  console.log(`Current useNativeSRGB value: ${result.value}`);
}

browser.browserSettings.colorManagement.useNativeSRGB.get({}).then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
