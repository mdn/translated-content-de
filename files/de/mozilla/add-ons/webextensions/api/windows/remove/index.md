---
title: windows.remove()
slug: Mozilla/Add-ons/WebExtensions/API/windows/remove
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Schließt ein Fenster und alle darin enthaltenen Tabs, basierend auf der ID des Fensters.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.windows.remove(
  windowId        // integer
)
```

### Parameter

- `windowId`
  - : `integer`. ID des Fensters, das geschlossen werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das Fenster geschlossen wurde. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Wenn der Benutzer auf das Symbol einer Browseraktion klickt, schließen Sie das Fenster, in dem das Symbol angeklickt wurde:

```js
function onRemoved() {
  console.log(`Removed window`);
}

function onError(error) {
  console.error(`Error:`, error);
}

browser.browserAction.onClicked.addListener((tab) => {
  let removing = browser.windows.remove(tab.windowId);
  removing.then(onRemoved, onError);
});
```

Schließen Sie das aktuelle, z.B. Popup, Fenster, wenn der Benutzer auf einen Button auf der Seite klickt:

```js
// in a script loaded by the page in the window
document.querySelector("#close").addEventListener(async ({ button }) => {
  try {
    if (button) return; // not a left click
    const windowId = (await browser.windows.getCurrent()).id;
    await browser.windows.remove(windowId);
    // this point will never be reached, since the window is gone
  } catch (error) {
    console.error("Closing failed:", error);
  }
});
```

In Firefox könnte dasselbe mit der `.allowScriptsToClose`-Fenstererstellungseigenschaft und `window.close()` erreicht werden.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#method-remove)-API von Chromium. Diese Dokumentation stammt aus [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

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
