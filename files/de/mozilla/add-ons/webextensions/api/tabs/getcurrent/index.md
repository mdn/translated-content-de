---
title: tabs.getCurrent()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/getCurrent
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
---

{{AddonSidebar}}

Holen Sie ein {{WebExtAPIRef("tabs.Tab")}}, das Informationen über den Tab enthält, in dem dieses Skript ausgeführt wird.

> [!NOTE]
> Diese Funktion ist nur nützlich in Kontexten, in denen es einen Browser-Tab gibt, wie zum Beispiel auf einer [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#sidebars_popups_and_options_pages).
>
> Wenn Sie es von einem Hintergrundskript oder einem Popup aus aufrufen, wird `undefined` zurückgegeben.

Dies ist eine asynchrone Funktion, die ein {{jsxref("Promise")}} zurückgibt.

## Syntax

```js-nolint
const gettingCurrent = browser.tabs.getCurrent()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{WebExtAPIRef('tabs.Tab')}}-Objekt erfüllt wird, das Informationen über den aktuellen Tab enthält. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Holen Sie Informationen über den aktuellen Tab:

```js
function onGot(tabInfo) {
  console.log(tabInfo);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const gettingCurrent = browser.tabs.getCurrent();
gettingCurrent.then(onGot, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-getCurrent) API. Diese Dokumentation stammt von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
