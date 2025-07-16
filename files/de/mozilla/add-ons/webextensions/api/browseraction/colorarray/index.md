---
title: browserAction.ColorArray
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/ColorArray
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

## Typ

Ein `array` aus vier ganzen Zahlen im Bereich von 0-255, das eine RGBA-Farbe definiert. Die vier Werte spezifizieren die folgenden Kanäle:

1. Rot
2. Grün
3. Blau
4. Alpha (Deckkraft).

Zum Beispiel ist undurchsichtiges Rot `[255, 0, 0, 255]`.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#type-ColorArray) API. Diese Dokumentation ist aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code abgeleitet.
