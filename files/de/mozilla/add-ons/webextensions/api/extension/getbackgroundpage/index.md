---
title: extension.getBackgroundPage()
slug: Mozilla/Add-ons/WebExtensions/API/extension/getBackgroundPage
l10n:
  sourceCommit: d82c19fea93f7b36787c6d84af600c955c2732d5
---

{{AddonSidebar}}

Gibt das [Fenster](/de/docs/Web/API/Window) der Hintergrundseite zurück, wenn das Hintergrundskript läuft. Wenn das Skript nicht läuft, wird null zurückgegeben.

Dies ist eine synchrone Funktion.

> [!NOTE]
> Diese Methode kann im privaten Modus nicht verwendet werden — sie gibt immer null zurück. Erwägen Sie stattdessen die Verwendung von {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} oder {{WebExtAPIRef("runtime.connect","runtime.connect()")}}. Weitere Informationen finden Sie im [Firefox-Fehler 1329304](https://bugzil.la/1329304).

## Syntax

```js-nolint
let page = browser.extension.getBackgroundPage()
```

### Parameter

Keine.

### Rückgabewert

`object`. [Fenster](/de/docs/Web/API/Window) der Hintergrundseite oder null.

## Beispiele

Angenommen, ein [Hintergrundskript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) definiert eine Funktion `foo()`:

```js
// background.js

function foo() {
  console.log("I'm defined in background.js");
}
```

Ein Skript, das in einem [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) läuft, kann diese Funktion direkt so aufrufen:

```js
// popup.js

let page = browser.extension.getBackgroundPage();
page.foo(); // -> "I'm defined in background.js"
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/api/extension#method-getBackgroundPage) API von Chromium. Diese Dokumentation ist übernommen aus [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) im Chromium-Code.

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
