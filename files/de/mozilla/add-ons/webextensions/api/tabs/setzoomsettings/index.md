---
title: tabs.setZoomSettings()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/setZoomSettings
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt die Zoom-Einstellungen für den angegebenen Tab fest. Diese Einstellungen werden auf die Standardeinstellungen zurückgesetzt, wenn der Tab navigiert wird.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let settingZoomSettings = browser.tabs.setZoomSettings(
  tabId,           // optional integer
  zoomSettings     // ZoomSettings
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, für den die Zoom-Einstellungen geändert werden sollen. Standardmäßig wird der aktive Tab des aktuellen Fensters verwendet.
- `zoomSettings`
  - : {{WebExtAPIRef('tabs.ZoomSettings')}}. Definiert, wie Zoom-Änderungen gehandhabt werden und in welchem Umfang.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das nach Änderung der Zoom-Einstellungen ohne Argumente erfüllt wird. Wenn der Tab nicht gefunden werden kann oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Zoom für den aktuellen Tab deaktivieren:

```js
function onSet() {
  console.log(`Set zoom factor`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let setting = browser.tabs.setZoomSettings({ mode: "disabled" });
setting.then(onSet, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-setZoomSettings) API. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
