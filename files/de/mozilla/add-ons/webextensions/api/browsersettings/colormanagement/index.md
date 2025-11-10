---
title: browserSettings.colorManagement
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/colorManagement
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet wird, um die Farbmanagementfunktionen des Browsers abzufragen und festzulegen.

Standardmäßig wendet Firefox Farbmanagement auf markierte Medien an und setzt nicht markierte Medien auf sRGB. Dieses Verhalten bedeutet, dass einige nicht markierte Medien, wie die in der Animation und Filmproduktion verwendeten, unerwünschte Farbkorrekturen erfahren können. Verwenden Sie diese Einstellungen, um dies zu verhindern.

Das Objekt hat folgende Eigenschaften:

- `mode`
  - : Ein String, der den Modus darstellt, der für das Farbmanagement verwendet wird. Gültige Werte sind `off`, `full` und `tagged_only`.
- `useNativeSRGB`
  - : Ein boolescher Wert, der angibt, ob das eingebaute sRGB-Farbmanagement verwendet wird.
- `useWebRenderCompositor`
  - : Ein boolescher Wert, der angibt, ob der WebRender-Kompositor verwendet wird.

## Beispiele

Setzen Sie den Farbmodus auf "full":

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.colorManagement.mode
  .set({ value: "full" })
  .then(logResult);
```

Holen Sie sich den nativen sRGB-Farbmanagement-Farbmodus:

```js
function logResult(result) {
  console.log(`Current useNativeSRGB value: ${result.value}`);
}

browser.browserSettings.colorManagement.useNativeSRGB.get({}).then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
