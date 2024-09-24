---
title: browserSettings.colorManagement
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/colorManagement
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet wird, um die Abfragen und Einstellungen der Farbverwaltungsfunktionen des Browsers vorzunehmen.

Standardmäßig wendet Firefox Farbmanagement auf getaggte Medien an und verwendet sRGB für ungetaggte Medien. Dieses Verhalten kann bedeuten, dass bei einigen ungetaggten Medien, wie sie in der Animation und Filmproduktion genutzt werden, unerwünschte Farbkorrekturen vorgenommen werden. Verwenden Sie diese Einstellungen, um dies zu verhindern.

Das Objekt hat folgende Eigenschaften:

- `mode`
  - : Ein String, der den Modus repräsentiert, der für das Farbmanagement verwendet wird. Gültige Werte sind `off`, `full` und `tagged_only`.
- `useNativeSRGB`
  - : Ein Boolean, der angibt, ob die eingebaute sRGB-Farbverwaltung verwendet wird.
- `useWebRenderCompositor`
  - : Ein Boolean, der angibt, ob der WebRender-Compositor verwendet wird.

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

Den nativen sRGB-Farbverwaltungsmodus erhalten:

```js
function logResult(result) {
  console.log(`Current useNativeSRGB value: ${result.value}`);
}

browser.browserSettings.colorManagement.useNativeSRGB.get({}).then(logResult);
```

{{WebExtExamples}}
