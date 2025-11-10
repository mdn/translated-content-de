---
title: tabs.setZoom()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/setZoom
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Vergrößert den angegebenen Tab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let zooming = browser.tabs.setZoom(
  tabId,           // optional integer
  zoomFactor       // number
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der vergrößert werden soll. Standardmäßig ist der aktive Tab des aktuellen Fensters ausgewählt.
- `zoomFactor`
  - : `number`. Der neue Zoomfaktor. Verwenden Sie hier einen Wert von 0, um den Tab auf seinen aktuellen Standardzoomfaktor zu setzen. Ansonsten muss dies eine Zahl zwischen 0,3 und 5 sein, die einen Zoomfaktor angibt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, nachdem der Zoomfaktor geändert wurde. Wenn der Tab nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Setzen Sie den Zoomfaktor für den aktuellen Tab auf 2:

```js
function onError(error) {
  console.log(`Error: ${error}`);
}

let setting = browser.tabs.setZoom(2);
setting.then(null, onError);
```

Setzen Sie den Zoomfaktor für den Tab, dessen ID 16 ist, auf 0,5:

```js
function onError(error) {
  console.log(`Error: ${error}`);
}

let setting = browser.tabs.setZoom(16, 0.5);
setting.then(null, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-setZoom) API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
