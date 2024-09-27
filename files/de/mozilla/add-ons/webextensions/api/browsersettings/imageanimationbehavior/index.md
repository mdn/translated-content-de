---
title: browserSettings.imageAnimationBehavior
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das verwendet werden kann, um die Art und Weise zu ändern, wie der Browser mit animierten Bildern, wie GIFs, umgeht.

Der zugrunde liegende Wert ist ein String, der einen von drei Werten annehmen kann:

- "normal": der Standard. Animierte Bilder werden normal abgespielt.
- "none": Bilder werden überhaupt nicht animiert.
- "once": Die Animation wird einmal abgespielt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Animierte Bilder deaktivieren:

```js
browser.browserSettings.imageAnimationBehavior.set({ value: "none" });
```

{{WebExtExamples}}
