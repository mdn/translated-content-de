---
title: browserSettings.imageAnimationBehavior
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das verwendet werden kann, um zu ändern, wie der Browser mit animierten Bildern, wie z.B. GIFs, umgeht.

Der zugrunde liegende Wert ist ein String, der einen von drei Werten annehmen kann:

- "normal": der Standardwert. Animierte Bilder werden normal abgespielt.
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
