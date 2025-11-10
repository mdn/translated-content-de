---
title: browserAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setIcon
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Setzt das Symbol für die Browseraktion.

Sie können ein einzelnes Symbol entweder als Pfad zu einer Bilddatei oder als ein {{WebExtAPIRef('browserAction.ImageDataType')}}-Objekt angeben.

Sie können mehrere Symbole in verschiedenen Größen angeben, indem Sie ein Wörterbuch mit mehreren Pfaden oder `ImageData`-Objekten bereitstellen. Dies bedeutet, dass das Symbol nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss.

Registerkarten ohne ein spezifisches Symbol übernehmen das globale Symbol, das standardmäßig dem [`default_icon`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) entspricht, das im Manifest angegeben ist.

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
      - : {{WebExtAPIRef('browserAction.ImageDataType')}} oder `object`. Dies ist entweder ein einzelnes `ImageData`-Objekt oder ein Wörterbuch-Objekt.

        Verwenden Sie ein Wörterbuch-Objekt, um mehrere `ImageData`-Objekte in unterschiedlichen Größen anzugeben, damit das Symbol nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `imageData` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein `ImageData`-Objekt und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.browserAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        Der Browser wählt das Bild, das verwendet werden soll, abhängig von der Pixeldichte des Bildschirms. Siehe [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für weitere Informationen hierzu.

    - `path` {{optional_inline}}
      - : `string` oder `object`. Dies ist entweder ein relativer Pfad zu einer Symboldatei oder ein Wörterbuch-Objekt.

        Verwenden Sie ein Wörterbuch-Objekt, um mehrere Symboldateien in verschiedenen Größen anzugeben, damit das Symbol nicht für ein Gerät mit einer anderen Pixeldichte skaliert werden muss. Wenn `path` ein Wörterbuch ist, ist der Wert jeder Eigenschaft ein relativer Pfad und sein Name ist seine Größe, wie folgt:

        ```js
        let settingIcon = browser.browserAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        Der Browser wählt das Bild, das verwendet werden soll, abhängig von der Pixeldichte des Bildschirms. Siehe [Auswahl von Symbolgrößen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#choosing_icon_sizes) für weitere Informationen hierzu.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt das Symbol nur für die angegebene Registerkarte. Das Symbol wird zurückgesetzt, wenn der Benutzer diese Registerkarte zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt das Symbol für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und das Symbol wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird das globale Symbol gesetzt.

Wenn jedes der `imageData` und `path` eines der folgenden ist: `undefined`, `null` oder leeres Objekt:

- Wenn `tabId` angegeben ist und die Registerkarte ein spezifisches Symbol hat, erbt die Registerkarte das Symbol von dem Fenster, zu dem sie gehört.
- Wenn `windowId` angegeben ist und das Fenster ein fensterspezifisches Symbol hat, erbt das Fenster das globale Symbol.
- Andernfalls wird das globale Symbol auf das Manifestsymbol zurückgesetzt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Symbol gesetzt wurde.

## Beispiele

Der folgende Code verwendet eine Browseraktion zum Umschalten eines Listeners für {{WebExtAPIRef("webRequest.onHeadersReceived")}} und verwendet `setIcon()`, um anzuzeigen, ob das Abhören ein- oder ausgeschaltet ist:

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

Der folgende Code setzt das Symbol mithilfe eines [`ImageData`](/de/docs/Web/API/ImageData)-Objekts:

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

Der folgende Ausschnitt aktualisiert das Symbol, wenn der Benutzer darauf klickt, jedoch nur für die aktive Registerkarte:

```js
browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.setIcon({
    tabId: tab.id,
    path: "icons/updated-48.png",
  });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setIcon) API. Diese Dokumentation stammt aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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
