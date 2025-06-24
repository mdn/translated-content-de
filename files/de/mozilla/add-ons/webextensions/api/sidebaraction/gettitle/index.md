---
title: sidebarAction.getTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ruft den Titel der Seitenleiste ab.

Genau wie Sie den Titel tab-spezifisch mit {{WebExtAPIRef("sidebarAction.setTitle()")}} setzen können, können Sie einen tab-spezifischen Titel abrufen, indem Sie die ID des Tabs an diese Funktion übergeben.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingTitle = browser.sidebarAction.getTitle(
  details               // object
)
```

### Parameter

- `details`
  - : `object`. Ein Objekt mit den folgenden Eigenschaften:
    - `tabId` {{optional_inline}}
      - : `integer`. Holt den Titel für die Seitenleiste, die für den angegebenen Tab spezifisch ist.
    - `windowId` {{optional_inline}}
      - : `integer`. Holt den Titel für die Seitenleiste, die für das angegebene Fenster spezifisch ist.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben werden, schlägt die Funktion fehl und das zurückgegebene Promise wird abgelehnt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird der globale Titel zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem String erfüllt wird, der den Titel der Seitenleiste enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code wechselt den Titel zwischen "this" und "that" jedes Mal, wenn der Benutzer auf die Browseraktion klickt.

```js
function toggleTitle(title) {
  if (title === "this") {
    browser.sidebarAction.setTitle({ title: "that" });
  } else {
    browser.sidebarAction.setTitle({ title: "this" });
  }
}

browser.browserAction.onClicked.addListener(() => {
  let gettingTitle = browser.sidebarAction.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Operas [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API.

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
