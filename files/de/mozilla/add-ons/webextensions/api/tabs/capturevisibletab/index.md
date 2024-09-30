---
title: tabs.captureVisibleTab()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/captureVisibleTab
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erstellt eine Daten-URL, die das Bild eines Bereichs des aktiven Tabs im angegebenen Fenster codiert. Sie müssen entweder die `<all_urls>`- oder die `activeTab`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

> [!NOTE]
> In Firefox 125 und früher war diese Methode nur mit der `<all_urls>`-Berechtigung verfügbar.

Zusätzlich zu den Seiten, auf die Erweiterungen normalerweise zugreifen können, ermöglicht diese Methode den Erweiterungen, sensible Seiten zu erfassen, die ansonsten eingeschränkt sind, einschließlich Browser-UI-Seiten und Seiten anderer Erweiterungen. Diese sensiblen Seiten können nur mit der `activeTab`-Berechtigung erfasst werden. Chrome erlaubt es auch, Datei-URLs zu erfassen, wenn die Erweiterung Dateizugriff gewährt wurde.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let capturing = browser.tabs.captureVisibleTab(
  windowId,               // optional integer
  options                 // optional extensionTypes.ImageDetails
)
```

### Parameter

- `windowId` {{optional_inline}}
  - : `integer`. Das Ziel-Fenster. Standardmäßig das aktuelle Fenster.
- `options` {{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageDetails')}}.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einer Daten-URL erfüllt wird, die das erfasste Bild codiert. Es kann der 'src'-Eigenschaft eines HTML-Image-Elements zur Anzeige zugewiesen werden. Wenn ein Fehler auftritt, wird das Versprechen mit einer Fehlermeldung abgelehnt.

## Beispiele

Erfassen Sie ein Bild des aktiven Tabs im aktuellen Fenster mit den standardmäßigen Bildeinstellungen:

```js
function onCaptured(imageUri) {
  console.log(imageUri);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  let capturing = browser.tabs.captureVisibleTab();
  capturing.then(onCaptured, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-captureVisibleTab)-API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
