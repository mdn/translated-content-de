---
title: webNavigation.getFrame()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{AddonSidebar}}

Ruft Informationen über einen bestimmten Frame ab. Ein Frame kann entweder der oberste Frame in einem Tab oder ein verschachteltes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) sein und wird eindeutig durch eine Tab-ID und eine Frame-ID identifiziert.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingFrame = browser.webNavigation.getFrame(
  details                // object
)
```

### Parameter

- `details`

  - : `object`. Informationen über den Frame, für den Informationen abgerufen werden sollen.

    - `tabId`
      - : `integer`. Die ID des Tabs, in dem sich der Frame befindet.
    - `processId` {{optional_inline}} {{deprecated_inline}}
      - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, repräsentierte er die ID des Prozesses, der den Renderer für diesen Tab ausführte.
    - `frameId`
      - : `integer`. Die ID des Frames im angegebenen Tab.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das die folgenden Eigenschaften enthält:

- `errorOccurred`
  - : `boolean`. True, wenn die letzte Navigation in diesem Frame durch einen Fehler unterbrochen wurde, d.h. das {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}}-Ereignis wurde ausgelöst.
- `url`
  - : `string`. Die URL, die derzeit mit diesem Frame verknüpft ist, wenn der mit `frameId` identifizierte Frame zu einem bestimmten Zeitpunkt in dem mit `tabId` identifizierten Tab existierte. Die Tatsache, dass eine URL mit einer bestimmten `frameId` verknüpft ist, impliziert nicht, dass der entsprechende Frame noch existiert.
- `parentFrameId`
  - : `integer`. Die ID des übergeordneten Frames. Dies ist -1, wenn es keinen übergeordneten Frame gibt: das heißt, wenn dieser Frame der oberste Browsing-Kontext im Tab ist.

Wenn der Tab verworfen ist, wird das Promise stattdessen mit einem `null`-Wert aufgelöst. Wenn der angegebene Tab oder die Frame-ID nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function onGot(frameInfo) {
  console.log(frameInfo);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let gettingFrame = browser.webNavigation.getFrame({
  tabId: 19,
  frameId: 1537,
});

// Edge specific - processId is required not optional, must be integer not null
// let gettingFrame = browser.webNavigation.getFrame({ tabId: 19, processId: 0, frameId: 1537 });

gettingFrame.then(onGot, onError);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#method-getFrame) API. Diese Dokumentation ist abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

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
