---
title: tabs.captureTab()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/captureTab
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erstellt eine Daten-URL, die das Bild eines Bereichs des angegebenen Tabs kodiert. Sie müssen die Berechtigung `<all_urls>` haben, um diese Methode zu verwenden. Weitere Informationen finden Sie unter [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let capturing = browser.tabs.captureTab(
  tabId,               // optional integer
  options              // optional extensionTypes.ImageDetails
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. ID des Tabs, der erfasst werden soll. Standardmäßig der aktive Tab im aktuellen Fenster.
- `options` {{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageDetails')}}.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Daten-URL erfüllt wird, welche das erfasste Bild kodiert. Diese URL kann der 'src'-Eigenschaft eines HTML-Bild-Elements zugewiesen werden, um es anzuzeigen. Bei einem Fehler wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Erfassen eines Bildes des aktiven Tabs im aktuellen Fenster mit den Standardeinstellungen:

```js
function onCaptured(imageUri) {
  console.log(imageUri);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  let capturing = browser.tabs.captureTab();
  capturing.then(onCaptured, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-captureVisibleTab). Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
