---
title: action.getBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/action/getBadgeTextColor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ruft die Textfarbe des Browser-Action-Badges ab.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

In Firefox wird die Badge-Textfarbe, sofern sie nicht explizit mit {{WebExtAPIRef("action.setBadgeTextColor()")}} festgelegt wird, automatisch auf Schwarz oder Weiß gesetzt, um den Kontrast zur angegebenen Badge-Hintergrundfarbe zu maximieren. Zum Beispiel, wenn Sie die Badge-Hintergrundfarbe auf Weiß setzen, wird die Standard-Badge-Textfarbe auf Schwarz gesetzt und umgekehrt.

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
      - : `integer`. Gibt die Registerkarte an, von der die Badge-Textfarbe abgerufen werden soll.
    - `windowId` {{optional_inline}}
      - : `integer`. Gibt das Fenster an, aus dem die Badge-Textfarbe abgerufen werden soll.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird die globale Badge-Textfarbe zurückgegeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit der abgerufenen Farbe als {{WebExtAPIRef('action.ColorArray')}} erfüllt wird.

## Beispiele

Protokollieren der Textfarbe des Badges:

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
> Diese API basiert auf der Chromium-API [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-getBadgeBackgroundColor). Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

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
