---
title: browserAction.FarbArray
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/ColorArray
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

## Typ

Ein `Array` von vier Ganzzahlen im Bereich von 0-255, das eine RGBA-Farbe definiert. Die vier Werte spezifizieren die folgenden Kanäle:

1. Rot
2. Grün
3. Blau
4. Alpha (Deckkraft).

Zum Beispiel ist ein deckendes Rot `[255, 0, 0, 255]`.

## Kompatibilität der Browser

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#type-ColorArray) API von Chromium. Diese Dokumentation stammt aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.
