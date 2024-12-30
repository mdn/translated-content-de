---
title: browserAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setIcon
l10n:
  sourceCommit: 53c832f09b5f55b2cbe040907bff8abfb7b57f72
---

{{AddonSidebar}}

Setzt das Symbol für die Browser-Aktion.

Sie können ein einzelnes Symbol angeben, entweder als Pfad zu einer Bilddatei oder als {{WebExtAPIRef('browserAction.ImageDataType')}}-Objekt.

Sie können mehrere Symbole in verschiedenen Größen angeben, indem Sie ein Wörterbuch mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Dies bedeutet, dass das Symbol nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss.

Tabs ohne ein spezifisches Symbol erben das globale Symbol, das standardmäßig das im Manifest angegebene [`default_icon`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) ist.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingIcon = browser.browserAction.setIcon(
  details         // object
)
```

### Parameter

- `details`

  - : `object`. Ein Objekt, das die Eigenschaft `imageData` oder `path` enthält und optional entweder oder beide der Eigenschaften `tabId` und `windowId`.

    - `imageData` {{optional_inline}}

      - : `{{WebExtAPIRef('browserAction.ImageDataType')}}` oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere `ImageData`-Objekte in verschiedenen Größen anzugeben, sodass das Symbol nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt und dessen Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.browserAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wird das zu verwendende Bild abhängig von der Pixeldichte des Bildschirms wählen. Siehe [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für weitere Informationen.

    - `path` {{optional_inline}}

      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Symboldatei oder ein Wörterbuchobjekt.

        Verwenden Sie ein Wörterbuchobjekt, um mehrere Symboldateien in verschiedenen Größen anzugeben, sodass das Symbol nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad und dessen Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.browserAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wird das zu verwendende Bild abhängig von der Pixeldichte des Bildschirms wählen. Siehe [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für weitere Informationen.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Symbol nur für den angegebenen Tab. Das Symbol wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Symbol für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und das Symbol wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird das globale Symbol gesetzt.

Wenn `imageData` und `path` jeweils `undefined`, `null` oder ein leeres Objekt sind:

- Wenn `tabId` angegeben ist und der Tab ein tabspezifisches Symbol hat, dann wird der Tab das Symbol des Fensters erben, zu dem er gehört.
- Wenn `windowId` angegeben ist und das Fenster ein fensterspezifisches Symbol hat, dann wird das Fenster das globale Symbol erben.
- Andernfalls wird das globale Symbol auf das Manifestsymbol zurückgesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Symbol gesetzt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Der untenstehende Code verwendet eine Browser-Aktion, um einen Listener für {{WebExtAPIRef("webRequest.onHeadersReceived")}} umzuschalten, und verwendet `setIcon()`, um anzuzeigen, ob das Zuhören aktiv ist oder nicht:

```js
function logResponseHeaders(requestDetails) {
  console.log(requestDetails);
}

function startListening() {
  browser.webRequest.onHeadersReceived.addListener(
    logResponseHeaders,
    { urls: ["<all_urls>"] },
    ["responseHeaders"],
  );
  browser.browserAction.setIcon({ path: "icons/listening-on.svg" });
}

function stopListening() {
  browser.webRequest.onHeadersReceived.removeListener(logResponseHeaders);
  browser.browserAction.setIcon({ path: "icons/listening-off.svg" });
}

function toggleListener() {
  if (browser.webRequest.onHeadersReceived.hasListener(logResponseHeaders)) {
    stopListening();
  } else {
    startListening();
  }
}

browser.browserAction.onClicked.addListener(toggleListener);
```

Der folgende Code setzt das Symbol mit einem [`ImageData`](/de/docs/Web/API/ImageData)-Objekt:

```js
function getImageData() {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 100);

  return ctx.getImageData(50, 50, 100, 100);
}

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setIcon({ imageData: getImageData() });
});
```

Das folgende Snippet aktualisiert das Symbol, wenn der Benutzer darauf klickt, jedoch nur für den aktiven Tab:

```js
browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.setIcon({
    tabId: tab.id,
    path: "icons/updated-48.png",
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setIcon)-API von Chromium. Diese Dokumentation stammt aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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
