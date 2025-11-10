---
title: webNavigation.getFrame()
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/getFrame
l10n:
  sourceCommit: dec39bc3ee8676967dac28821f58c7c1d4a32d7d
---

Ruft Informationen über einen bestimmten Frame ab. Ein Frame kann der oberste Frame in einem Tab oder ein verschachteltes [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) sein und wird eindeutig durch eine Tab-ID und eine Frame-ID identifiziert.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingFrame = browser.webNavigation.getFrame(
  details                // object
)
```

### Parameter

- `details`
  - : `object`. Informationen über den Frame, über den Informationen abgerufen werden sollen. Muss eine der Eigenschaften `tabId`, `frameId` oder `documentId` enthalten.
    - `tabId` {{optional_inline}}
      - : `integer`. Die ID des Tabs, in dem sich der Frame befindet.
    - `processId` {{optional_inline}} {{deprecated_inline}}
      - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, stellte er die ID des Prozesses dar, der das Renderer für diesen Tab ausführte.
    - `frameId` {{optional_inline}}
      - : `integer`. Die ID des Frames im angegebenen Tab.
    - `documentId` {{optional_inline}}
      - : `string`. Die UUID des Dokuments des Frames.

Muss eine der folgenden Eigenschaften enthalten

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Objekt erfüllt wird, das die folgenden Eigenschaften enthält:

- `errorOccurred`
  - : `boolean`. Wahr, wenn die letzte Navigation in diesem Frame durch einen Fehler unterbrochen wurde, d.h. das Ereignis {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} wurde ausgelöst.
- `url`
  - : `string`. Die URL, die mit diesem Frame verbunden ist, falls der durch `frameId` identifizierte Frame zu einem Zeitpunkt im durch `tabId` identifizierten Tab existiert hat. Die Tatsache, dass eine URL mit einer bestimmten `frameId` verknüpft ist, impliziert nicht, dass der entsprechende Frame noch existiert.
- `frameType`
  - : `string`. Der Typ des Frames. Gibt die Werte `"outermost_frame"`, `"fenced_frame"` oder `"sub_frame"` zurück.
- `parentFrameId`
  - : `integer`. ID des übergeordneten Frames. Dies ist -1, wenn kein übergeordneter Frame existiert: das heißt, wenn dieser Frame der oberste Browsing-Kontext im Tab ist.
- `documentId`
  - : `string`. Eine UUID des Dokuments des Frames.
- `parentDocumentId`
  - : `string`. Eine UUID des übergeordneten Dokuments, dem der Frame gehört. Nicht gesetzt, wenn kein übergeordnetes Dokument existiert.
- `documentLifecycle`
  - : `string`. Der Lebenszyklus des Dokuments. Gibt die Werte `"prerender"`, `"active"`, `"cached"` oder `"pending_deletion"` zurück.

Wenn der Tab verworfen wird, wird das Promise stattdessen mit dem Wert `null` aufgelöst. Wenn die angegebene Tab- oder Frame-ID nicht gefunden werden konnte oder ein anderer Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

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

## Browser-Kompatibilität

{{Compat}}

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
