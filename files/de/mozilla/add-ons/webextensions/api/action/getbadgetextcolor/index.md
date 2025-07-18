---
title: action.getBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/action/getBadgeTextColor
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ruft die Textfarbe für das Badge der Browser-Aktion ab.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

In Firefox, es sei denn, die Textfarbe des Badges wird explizit mithilfe von {{WebExtAPIRef("action.setBadgeTextColor()")}} festgelegt, wird die Textfarbe des Badges automatisch auf Schwarz oder Weiß eingestellt, um den Kontrast zur angegebenen Hintergrundfarbe des Badges zu maximieren. Wenn Sie beispielsweise die Hintergrundfarbe des Badges auf Weiß setzen, wird die Standard-Textfarbe des Badges auf Schwarz gesetzt und umgekehrt.

Andere Browser verwenden immer eine weiße Textfarbe.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
browser.action.getBadgeTextColor(
  details // object
)
```

### Parameter

- `details`
  - : `object`.
    - `tabId` {{optional_inline}}
      - : `integer`. Spezifiziert den Tab, von dem die Textfarbe des Badges abgerufen werden soll.
    - `windowId` {{optional_inline}}
      - : `integer`. Spezifiziert das Fenster, aus dem die Textfarbe des Badges abgerufen werden soll.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird die globale Textfarbe des Badges zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit der abgerufenen Farbe als {{WebExtAPIRef('action.ColorArray')}} erfüllt wird.

## Beispiele

Protokollieren Sie die Textfarbe des Badges:

```js
function onGot(color) {
  console.log(color);
}

function onFailure(error) {
  console.log(error);
}

browser.action.getBadgeTextColor({}).then(onGot, onFailure);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-getBadgeBackgroundColor) API. Diese Dokumentation leitet sich ab von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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
