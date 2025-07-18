---
title: pageAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/setIcon
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Legt das Symbol für die Page Action fest.

Sie können ein einzelnes Symbol entweder als Pfad zu einer Bilddatei oder als ein {{WebExtAPIRef('pageAction.ImageDataType')}}-Objekt angeben.

Sie können multiple Symbole in verschiedenen Größen angeben, indem Sie ein Wörterbuch verwenden, das mehrere Pfade oder `ImageData`-Objekte enthält. Dies bedeutet, dass das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingIcon = browser.pageAction.setIcon(
  details         // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt, das entweder `imageData`- oder `path`-Eigenschaften und eine `tabId`-Eigenschaft enthält.
    - `imageData` {{optional_inline}}
      - : {{WebExtAPIRef('pageAction.ImageDataType')}} oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere `ImageData`-Objekte in verschiedenen Größen anzugeben, sodass das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt, und sein Name ist seine Größe, so:

        ```js
        let settingIcon = browser.pageAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das Bild aus, das je nach Pixeldichte des Bildschirms verwendet wird. Weitere Informationen dazu finden Sie unter [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

    - `path` {{optional_inline}}
      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Symboldatei oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere Symboldateien in verschiedenen Größen anzugeben, sodass das Symbol nicht für ein Gerät mit unterschiedlicher Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad, und sein Name ist seine Größe, so:

        ```js
        let settingIcon = browser.pageAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das Bild aus, das je nach Pixeldichte des Bildschirms verwendet wird. Weitere Informationen dazu finden Sie unter [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes).

        Wenn `path` `null` ist, wird das Symbol der Page Action auf das Symbol zurückgesetzt, das im [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Manifesteintrag angegeben wurde.

        Wenn `path` `""` ist, wird das Symbol auf das globale Standardsymbol des Browsers zurückgesetzt (d.h. das Symbol, das verwendet wird, wenn im [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)-Manifesteintrag kein Symbol angegeben wurde).

        Wenn `path` nicht auf ein gültiges Symbol verweist, wird kein Symbol angezeigt.

    - `tabId`
      - : `integer`. Die ID des Tabs, dessen Symbol Sie festlegen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Symbol festgelegt wurde.

## Beispiele

Setzen Sie das Symbol für die Page Action, wenn der Benutzer darauf klickt:

```js
browser.pageAction.onClicked.addListener((tab) => {
  browser.pageAction.setIcon({
    tabId: tab.id,
    path: "icons/icon-48.png",
  });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#method-setIcon)-API von Chromium. Diese Dokumentation basiert auf [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code.

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
