---
title: browserSettings.imageAnimationBehavior
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um die Art und Weise zu ändern, wie der Browser animierte Bilder, wie GIFs, behandelt.

Der zugrunde liegende Wert ist ein String, der einen von drei Werten annehmen kann:

- "normal": der Standardwert. Animierte Bilder werden normal wiedergegeben.
- "none": Bilder werden überhaupt nicht animiert.
- "once": Die Animation wird einmal abgespielt.

## Beispiele

Animierte Bilder deaktivieren:

```js
browser.browserSettings.imageAnimationBehavior.set({ value: "none" });
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
