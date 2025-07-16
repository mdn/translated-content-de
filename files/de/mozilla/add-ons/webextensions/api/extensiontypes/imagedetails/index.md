---
title: extensionTypes.ImageDetails
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Details zum Format, zur Qualität, zum Bereich und zur Skalierung eines aufgenommenen Bildes.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `format` {{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageFormat')}}. Das Format des resultierenden Bildes. Standardmäßig ist es `"png"`.
- `quality` {{optional_inline}}
  - : `integer`. Wenn das Format `"jpeg"` ist, steuert dies die Qualität des resultierenden Bildes. Es ist eine Zahl zwischen 0 und 100, die in einen Wert zwischen 0 und 1 umgewandelt wird und dann als `encoderOptions`-Argument an [`HTMLCanvasElement.toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) verwendet wird. Wenn diese weggelassen wird, wird 92 verwendet. Bei abnehmender Qualität hat das resultierende Bild mehr visuelle Artefakte, und die Anzahl der für die Speicherung benötigten Bytes nimmt ab. Dieser Wert wird für PNG-Bilder ignoriert.
- `rect` {{optional_inline}}
  - : Ein `object`, das den Bereich des Dokuments angibt, der erfasst werden soll, in CSS-Pixeln relativ zur Seite. Alle Eigenschaften sind standardmäßig `0`. Die Eigenschaften sind:
    - `x`: Die Koordinate der linken Seite des Rechtecks.
    - `y`: Die Koordinate der oberen Seite des Rechtecks.
    - `width`: Die Breite des Rechtecks.
    - `height`: Die Höhe des Rechtecks.

    Diese Option wurde in Firefox 82 eingeführt. Wenn weggelassen, wird der aktuell sichtbare Viewport erfasst.

- `scale` {{optional_inline}}
  - : `number`. Die Skalierung, bei der gerendert werden soll, standardmäßig [`devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio). Diese Option wurde in Firefox 82 eingeführt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extensionTypes`](https://developer.chrome.com/docs/extensions/reference/api/extensionTypes#type-ImageDetails)-API von Chromium. Diese Dokumentation ist abgeleitet von [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
