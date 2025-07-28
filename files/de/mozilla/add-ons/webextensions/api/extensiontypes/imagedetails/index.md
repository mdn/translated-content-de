---
title: extensionTypes.ImageDetails
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails
l10n:
  sourceCommit: fa880ff934afd905ea7bafb5beb8fa6d36a1b18a
---

Details zum Format, der Qualität, dem Bereich und der Skalierung eines aufgenommenen Bildes.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `format` {{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageFormat')}}. Das Format des resultierenden Bildes. In Firefox ist das Standardformat `"png"`, während in Chrome das Standardformat `"jpeg"` ist.
- `quality` {{optional_inline}}
  - : `integer`. Wenn das Format `"jpeg"` ist, steuert dies die Qualität des resultierenden Bildes. Es ist eine Zahl zwischen 0 und 100, die in einen Wert zwischen 0 und 1 umgewandelt wird und dann als Argument `encoderOptions` an [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) verwendet wird. Wenn es weggelassen wird, wird 92 verwendet. Bei abnehmender Qualität weist das resultierende Bild mehr visuelle Artefakte auf, und die Speichergröße in Bytes verringert sich. Dieser Wert wird bei PNG-Bildern ignoriert.
- `rect` {{optional_inline}}
  - : Ein `object`, das den Bereich des Dokuments angibt, der erfasst werden soll, in CSS-Pixeln, relativ zur Seite. Alle Eigenschaften standardmäßig auf `0`. Die Eigenschaften sind:
    - `x`: Die Koordinate der linken Seite des Rechtecks.
    - `y`: Die Koordinate der oberen Seite des Rechtecks.
    - `width`: Die Breite des Rechtecks.
    - `height`: Die Höhe des Rechtecks.

    Diese Option wurde in Firefox 82 eingeführt. Wenn sie weggelassen wird, wird der aktuell sichtbare Viewport erfasst.

- `scale` {{optional_inline}}
  - : `number`. Die Skalierung, mit der gerendert wird, standardmäßig auf [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio). Diese Option wurde in Firefox 82 eingeführt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extensionTypes`](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes#type-ImageDetails)-API von Chromium. Diese Dokumentation stammt von [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) im Chromium-Code.
