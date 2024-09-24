---
title: extensionTypes.ImageDetails
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Details zum Format, zur Qualität, zum Bereich und zur Skalierung eines aufgenommenen Bildes.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `format` {{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageFormat')}}. Das Format des resultierenden Bildes. Standard ist `"png"`.
- `quality` {{optional_inline}}
  - : `integer`. Wenn das Format `"jpeg"` ist, steuert dies die Qualität des resultierenden Bildes. Es ist eine Zahl zwischen 0 und 100, die in einen Wert zwischen 0 und 1 umgewandelt wird und dann als `encoderOptions`-Argument an [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) verwendet wird. Wenn es weggelassen wird, wird 92 verwendet. Wenn die Qualität verringert wird, weist das resultierende Bild mehr visuelle Artefakte auf, und die Anzahl der Bytes, die zur Speicherung benötigt werden, nimmt ab. Dieser Wert wird bei PNG-Bildern ignoriert.
- `rect` {{optional_inline}}

  - : Ein `object`, das den zu erfassenden Bereich des Dokuments in CSS-Pixeln relativ zur Seite angibt. Alle Eigenschaften sind standardmäßig `0`. Die Eigenschaften sind:

    - `x`: Die Koordinate der linken Seite des Rechtecks.
    - `y`: Die Koordinate der oberen Seite des Rechtecks.
    - `width`: Die Breite des Rechtecks.
    - `height`: Die Höhe des Rechtecks.

    Diese Option wurde in Firefox 82 eingeführt. Wenn sie weggelassen wird, wird der aktuell sichtbare Viewport erfasst.

- `scale` {{optional_inline}}
  - : `number`. Die Skalierung, bei der gerendert werden soll, standardmäßig der [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio). Diese Option wurde in Firefox 82 eingeführt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extensionTypes`](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes#type-ImageDetails) API von Chromium. Diese Dokumentation ist abgeleitet von [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) im Chromium-Code.
