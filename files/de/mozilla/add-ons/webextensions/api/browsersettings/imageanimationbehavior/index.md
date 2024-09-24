---
title: browserSettings.imageAnimationBehavior
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet werden kann, um die Art und Weise zu ändern, wie der Browser mit animierten Bildern, wie zum Beispiel GIFs, umgeht.

Der zugrundeliegende Wert ist ein String, der drei Werte annehmen kann:

- "normal": die Voreinstellung. Animierte Bilder wie gewohnt abspielen.
- "none": Bilder überhaupt nicht animieren.
- "once": die Animation einmal abspielen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Deaktivieren Sie animierte Bilder:

```js
browser.browserSettings.imageAnimationBehavior.set({ value: "none" });
```

{{WebExtExamples}}
