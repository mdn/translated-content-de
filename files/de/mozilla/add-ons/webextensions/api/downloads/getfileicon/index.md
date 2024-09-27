---
title: downloads.getFileIcon()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/getFileIcon
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die Funktion **`getFileIcon()`** der {{WebExtAPIRef("downloads")}} API ruft ein Icon für den angegebenen Download ab.

Bei neuen Downloads sind Dateisymbole verfügbar, nachdem das {{WebExtAPIRef("downloads.onCreated")}} Ereignis empfangen wurde. Das Bild, das von dieser Funktion zurückgegeben wird, während ein Download im Gange ist, kann sich von dem Bild unterscheiden, das nach Abschluss des Downloads zurückgegeben wird.

Das Abrufen des Symbols erfolgt durch Abfrage der zugrunde liegenden Plattform. Das zurückgegebene Symbol hängt daher von einer Reihe von Faktoren ab, einschließlich des Download-Status, der Plattform, registrierter Dateitypen und des visuellen Themas.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingIcon = browser.downloads.getFileIcon(
  downloadId,           // integer
  options               // optional object
)
```

### Parameter

- `downloadId`
  - : Ein `integer`, der die ID des Downloads darstellt.
- `options` {{optional_inline}}

  - : Ein Options-`object`, das Präferenzen für das abzurufende Symbol darstellt. Es kann die folgenden Eigenschaften haben:

    - `size` {{optional_inline}}
      - : Ein `integer`, der die Größe des Symbols darstellt. Die zurückgegebene Symbolgröße wird das Quadrat der angegebenen Größe (in Pixeln) sein. Wird keine Größe angegeben, beträgt die Standardgröße für das Symbol 32x32 Pixel.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich ist, wird das Promise mit einer Zeichenfolge erfüllt, die die absolute URL des Symbols darstellt. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel protokolliert die Symbol-URL für den neuesten Download:

```js
function gotIcon(iconUrl) {
  console.log(iconUrl);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function getIcon(downloadItems) {
  if (downloadItems.length > 0) {
    latestDownloadId = downloadItems[0].id;
    let gettingIcon = browser.downloads.getFileIcon(latestDownloadId);
    gettingIcon.then(gotIcon, onError);
  }
}

let searching = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"],
});

searching.then(getIcon, onError);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-getFileIcon) API von Chromium.

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
