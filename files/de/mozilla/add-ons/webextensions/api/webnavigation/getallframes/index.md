---
title: webNavigation.getAllFrames()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getAllFrames
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Angaben einer Tab-ID ermöglichen es, Informationen über alle enthaltenen Frames abzurufen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingFrames = browser.webNavigation.getAllFrames(
  details                // object
)
```

### Parameter

- `details`

  - : `object`. Informationen über den Tab, von dem alle Frames abgerufen werden sollen.

    - `tabId`
      - : `integer`. Die ID des Tabs.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Array von Objekten erfüllt wird, von denen jedes die folgenden Eigenschaften hat:

- `errorOccurred`
  - : `boolean`. Wahr, wenn die letzte Navigation in diesem Frame durch einen Fehler unterbrochen wurde, d. h. das {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}}-Ereignis ausgelöst wurde.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Als er gesetzt wurde, repräsentierte er die ID des Prozesses, der das Renderer für diesen Tab ausführte.
- `frameId`
  - : `integer`. Die ID des Frames. Wenn dies der Hauptframe ist, ist `frameId` null.
- `parentFrameId`
  - : `integer`. ID des übergeordneten Frames. Dies ist -1, wenn kein übergeordneter Frame vorhanden ist: das heißt, wenn dieser Frame der Top-Level-Browsing-Kontext im Tab ist.
- `url`
  - : `string`. Die URL, die derzeit mit diesem Frame verknüpft ist.

Wenn der Tab verworfen ist, wird das Promise stattdessen mit einem `null`-Wert aufgelöst. Wenn der angegebene Tab nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code protokolliert die URLs aller Frames im aktiven Tab, wenn der Benutzer auf eine Browser-Aktion klickt:

```js
function logFrameInfo(framesInfo) {
  for (const frameInfo of framesInfo) {
    console.log(frameInfo);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

function logAllFrames(tabs) {
  browser.webNavigation
    .getAllFrames({
      tabId: tabs[0].id,
    })
    .then(logFrameInfo, onError);
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs
    .query({
      currentWindow: true,
      active: true,
    })
    .then(logAllFrames, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#method-getAllFrames) API. Diese Dokumentation stammt aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

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
